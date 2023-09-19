#!/usr/bin/env node
const { join } = require("path");
const { execSync } = require("child_process");
const { REPO_ROOT, workspacePackages } = require("./helpers");

const publishPackage = (name, path) => {
	console.log(`publishing package '${name}'`);
	execSync("npm publish --non-interactive", { cwd: join(REPO_ROOT, path) });
};
for (const [name, path] of Object.entries(workspacePackages)) {
	publishPackage(name, path);
}
