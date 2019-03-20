const { execSync } = require("child_process");
const { join } = require("path");

const REPO_ROOT = join(__dirname, "..");
module.exports.REPO_ROOT = REPO_ROOT;

const getWorkSpaceInfo = () => {
	// Gather Workspace info
	let info = execSync("yarn workspaces info", { cwd: REPO_ROOT }).toString();
	info = info.slice(info.indexOf("{"));
	info = info.slice(0, info.lastIndexOf("}") + 1);
	info = JSON.parse(info.trim());
	return info;
};

module.exports.getWorkSpaceInfo = getWorkSpaceInfo;
