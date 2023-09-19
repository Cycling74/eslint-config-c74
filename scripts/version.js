#!/usr/bin/env node
const { execSync } = require("child_process");
const { workspacePackages, REPO_ROOT } = require("./helpers");

const version = process.env.npm_package_version;

for (const [name] of Object.entries(workspacePackages)) {
	execSync(`npm version ${version} --git-tag-version=false --workspace=${name}`, { cwd: REPO_ROOT });
}
