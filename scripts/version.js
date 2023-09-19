#!/usr/bin/env node
const { join } = require("path");
const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");
const { workspacePackages, REPO_ROOT } = require("./helpers");

const version = process.env.npm_package_version;

for (const path of Object.values(workspacePackages)) {

	const pkgInfoPath = join(REPO_ROOT, path, "package.json");
	const pkgInfo = JSON.parse(readFileSync(pkgInfoPath));
	pkgInfo.version = version;

	for (const depName of Object.keys(workspacePackages)) {
		if (pkgInfo.dependencies && pkgInfo.dependencies[depName]) pkgInfo.dependencies[depName] = version;
		if (pkgInfo.devDependencies && pkgInfo.devDependencies[depName]) pkgInfo.devDependencies[depName] = version;
	}

	writeFileSync(pkgInfoPath, JSON.stringify(pkgInfo, null, "\t"));
	execSync(`git add ${pkgInfoPath}`, { cwd: REPO_ROOT });

}
