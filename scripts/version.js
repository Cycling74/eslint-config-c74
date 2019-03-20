#!/usr/bin/env node
const { join } = require("path");
const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

const { getWorkSpaceInfo, REPO_ROOT } = require("./helpers");

const version = process.env.npm_package_version;
const info = getWorkSpaceInfo();

// Update workspace package info
const workspacePackages = Object.keys(info);

for (let i = 0, il = workspacePackages.length; i < il; i++) {
	const pkg = info[workspacePackages[i]];
	const pkgInfoPath = join(REPO_ROOT, pkg.location, "package.json");

	const pkgInfo = JSON.parse(readFileSync(pkgInfoPath));
	pkgInfo.version = version;

	for (let j = 0, jl = pkg.workspaceDependencies.length; j < jl; j++) {
		const dep = pkg.workspaceDependencies[j];
		if (pkgInfo.dependencies && pkgInfo.dependencies [dep]) pkgInfo.dependencies[dep] = version;
		if (pkgInfo.devDependencies && pkgInfo.devDependencies[dep]) pkgInfo.devDependencies[dep] = version;
	}

	writeFileSync(pkgInfoPath, JSON.stringify(pkgInfo, null, "\t"));
	execSync(`git add ${join(pkg.location, "package.json")}`, { cwd: REPO_ROOT });
}
