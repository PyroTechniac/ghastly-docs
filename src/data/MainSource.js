import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set();
export default new DocsSource({
  id: "discord-entangled",
  name: "Main library",
  global: "Entangled",
  repo: "PyroTechniac/discord-entangled",
  defaultTag: "master",
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith("dependabot"),
  tagFilter: tag => semver.gte(tag, "0.0.1")
});