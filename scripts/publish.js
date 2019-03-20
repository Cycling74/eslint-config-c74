#!/usr/bin/env node
const { join } = require("path");
const { execSync } = require("child_process");
const { getWorkSpaceInfo, REPO_ROOT } = require("./helpers");

const PACKAGES_TO_PUBLISH = [
	"eslint-config-c74-base",
	"eslint-config-c74",
	"eslint-config-c74-ts"
];

const publishPackage = (name, pkgInfo) => {
	console.log(`publishing package '${name}'`);
	execSync("yarn publish --non-interactive", { cwd: join(REPO_ROOT, pkgInfo.location) });
};

const info = getWorkSpaceInfo();
const workspacePackages = Object.keys(info);
for (let i = 0, il = workspacePackages.length; i < il; i++) {
	const pkg = workspacePackages[i];
	const pkgInfo = info[pkg];

	if (PACKAGES_TO_PUBLISH.includes(pkg)) publishPackage(pkg, pkgInfo);
}
