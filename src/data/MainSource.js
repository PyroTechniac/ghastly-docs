import semver from "semver";
import DocsSource from "./DocsSource";

const branchBlacklist = new Set();
export default new DocsSource({
  id: "thread",
  name: "Main library",
  global: "Thread",
  repo: "PyroTechniac/spooky",
  defaultTag: "master",
  defaultFile: { category: "class", id: "ThreadClient" },
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith("dependabot"),
  tagFilter: tag => semver.gte(tag, "0.0.1")
});