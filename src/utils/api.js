import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const baseUrl = 'https://api.github.com';

const fetchData = (url) => ajax({
  crossDomain: true,
  responseType: 'json',
  url
}).pipe(map(res => res.response));

export default class Api {
  static repos({ org }) {
    return fetchData(`${baseUrl}/orgs/${org}/repos?per_page=100`).pipe(
      map(
        repos => repos
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            watchers: repo.watchers,
            stars: repo.stargazers_count,
            forks: repo.forks,
            issues: repo.open_issues,
            description: repo.description,
            url: repo.homepage || repo.html_url
          }))
          .reduce((repos, repo) => ({ ...repos, [repo.name]: repo }), {})
      ),
      catchError(() => of(null)),
    );
  }

  static repo({ org, repo }) {
    return fetchData(`${baseUrl}/repos/${org}/${repo}`)
      .catch(() => of(null))
  }

  static contributors({ org, repo, page }) {
    return fetchData(
      `${baseUrl}/repos/${org}/${repo}/contributors?page=${page}&per_page=10`
    ).catch(() => of(null))
  }
}
