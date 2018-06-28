const normalizeReposResponse = repos => repos
  .map(repo => ({
    id: repo.id,
    name: repo.name,
    watchers: repo.watchers,
    stars: repo.stargazers_count,
    forks: repo.forks,
    issues: repo.open_issues,
    description: repo.description,
    url: repo.homepage || repo.html_url,
    contributors: {
      selectedPage: 1,
      pages: {},
    }
  }))
  .reduce((repos, repo) => ({ ...repos, [repo.name]: repo }), {})

export default normalizeReposResponse;
