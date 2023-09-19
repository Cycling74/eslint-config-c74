const { join } = require("path");

const REPO_ROOT = join(__dirname, "..");
module.exports.REPO_ROOT = REPO_ROOT;

const workspacePackages = {
	"eslint-config-c74-base": join(REPO_ROOT, "packages", "eslint-config-c74-base"),
	"eslint-config-c74": join(REPO_ROOT, "packages", "eslint-config-c74"),
	"eslint-config-c74-ts": join(REPO_ROOT, "packages", "eslint-config-c74-ts")
};

module.exports.workspacePackages = workspacePackages;
