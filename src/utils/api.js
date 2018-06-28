const baseUrl = 'https://api.github.com';

export const endpoints = {
  repos: ({ org }) => `${baseUrl}/orgs/${org}/repos?per_page=100`,
  repo: ({ org, repo }) => `${baseUrl}/repos/${org}/${repo}`,
  contributors: ({ org, repo, page }) =>
    `${baseUrl}/repos/${org}/${repo}/contributors?page=${page}&per_page=10`
}

export const fetchData = (endpoint) => fetch(endpoint, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
  .then(res => res.json())
