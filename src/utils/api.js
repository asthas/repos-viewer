import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import normalizeReposResponse from './normalize-repos-response';

const baseUrl = 'https://api.github.com';

const fetchData = (url) => ajax({
  crossDomain: true,
  responseType: 'json',
  url
}).pipe(map(res => res.response));

export default class Api {
  static repos({ org }) {
    return fetchData(`${baseUrl}/orgs/${org}/repos?per_page=100`).pipe(
      map(normalizeReposResponse),
      catchError(() => of(null)),
    );
  }

  static contributors({ org, repo, page }) {
    return fetchData(
      `${baseUrl}/repos/${org}/${repo}/contributors?page=${page}&per_page=10`
    ).catch(() => of(null))
  }
}
