const { join } = require("path");
const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");

const REPO_ROOT = join(__dirname, "..");
const version = process.env.npm_package_version;
console.log(version);

// Gather Workspace info
let info = execSync("yarn workspaces info", { cwd: REPO_ROOT }).toString();
info = info.slice(info.indexOf("{"));
info = info.slice(0, info.lastIndexOf("}") + 1);
info = JSON.parse(info.trim());

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
