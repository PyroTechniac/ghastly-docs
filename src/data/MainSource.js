import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set();
export default new DocsSource({
  id: "ghastly",
  name: "Main library",
  global: "Ghastly",
  repo: "PyroTechniac/ghastly",
  defaultTag: "master",
  defaultFile: { category: "class", id: "GhastlyClient" },
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith("dependabot"),
  tagFilter: tag => semver.gte(tag, "0.0.1")
});