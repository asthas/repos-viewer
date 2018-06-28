import { combineEpics, ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";

import { actions, actionTypes } from "./rootReducer";
import Api from "../utils/api";

const getReposEpic = action$ =>
  action$.pipe(
    ofType(actionTypes.updateOrg),
    mergeMap(action =>
      Api.repos({ org: action.payload }).pipe(
        map(
          repos =>
            repos
              ? actions.updateReposSuccess(repos)
              : actions.updateReposFailure(`Couldn't fetch repos`)
        )
      )
    )
  );

const getContributorsEpic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.updateRepoContributors),
    mergeMap(({ payload: { repo, page } }) =>
      Api.contributors({
        org: state$.value.selectedOrg,
        repo,
        page
      }).pipe(
        map(
          contributors =>
            contributors
              ? actions.updateRepoContributorsSuccess({
                  repo,
                  page,
                  contributors
                })
              : actions.updateRepoContributorsFailure({
                  repo,
                  page,
                  errorMessage: `Couldn't fetch Contributors`
                })
        )
      )
    )
  );

const rootEpic = combineEpics(getReposEpic, getContributorsEpic);

export default rootEpic;
