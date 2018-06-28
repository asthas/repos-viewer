import sortBy from "./sort-by";

const normalizeRepos = (repos, filter, sortProp) =>
  Object.values(repos)
    .filter(repo => repo.name.toLowerCase().includes(filter.toLowerCase()))
    .sort(sortBy(sortProp))
    .reverse();

export default normalizeRepos;
