import { combineEpics, ofType } from 'redux-observable';
import { map, mergeMap, tap } from 'rxjs/operators';

import { actions, actionTypes } from './rootReducer';
import Api from '../utils/api';

const getReposEpic = action$ =>
  action$.pipe(
    tap(action => console.log({ action })),
    ofType(actionTypes.updateOrg),
    mergeMap(action => Api.repos({ org: action.payload }).pipe(
      map(repos => repos ?
        actions.updateReposSuccess(repos) :
        actions.updateReposFailure(`Couldn't fetch repos`)
      ),
    )),
    tap(val => console.log({ val })),
  );

const rootEpic = combineEpics(
  getReposEpic,
);

export default rootEpic;
