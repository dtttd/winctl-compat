const os = require("os");
const IS_WINDOWS = os.platform() === "win32";

if (IS_WINDOWS) {
  module.exports = require("@digitalattitude/winctl");
} else {
  module.exports = require("./winctl-phony");
}
