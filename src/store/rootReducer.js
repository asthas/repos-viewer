import initialState from './initialState';

export const actionTypes = {
  updateSearchTerm: 'UPDATE_SEARCH_TERM',
  updateOrg: 'UPDATE_ORG',
  updateRepos: 'UPDATE_REPOS',
  updateReposSuccess: 'UPDATE_REPOS_SUCCESS',
  updateReposFailure: 'UPDATE_REPOS_FAILURE',
  updateSelectedRepo: 'UPDATE_SELECTED_REPO',
  updateRepoContributors: 'UPDATE_REPO_CONTRIBUTORS',
  updateRepoContributorsSuccess: 'UPDATE_REPO_CONTRIBUTORS_SUCCESS',
  updateRepoContributorsFailure: 'UPDATE_REPO_CONTRIBUTORS_FAILURE',
}

export const actions = {
  updateSearchTerm: (payload) => ({
    type: actionTypes.updateSearchTerm,
    payload
  }),

  updateOrg: (payload) => ({
    type: actionTypes.updateOrg,
    payload
  }),

  updateReposSuccess: (payload) => ({
    type: actionTypes.updateReposSuccess,
    payload
  }),

  updateReposFailure: (payload) => ({
    type: actionTypes.updateReposFailure,
    payload
  }),

  updateSelectedRepo: (payload) => ({
    type: actionTypes.updateSelectedRepo,
    payload,
  }),

  updateRepoContributors: (payload) => ({
    type: actionTypes.updateRepoContributors,
    payload
  }),

  updateRepoContributorsSuccess: (payload) => ({
    type: actionTypes.updateRepoContributorsSuccess,
    payload
  }),

  updateRepoContributorsFailure: (payload) => ({
    type: actionTypes.updateRepoContributorsFailure,
    payload
  }),
}

const actionHandler = {
  [actionTypes.updateSearchTerm]: (
    state,
    action
  ) => ({
    ...state,
    searchTerm: action.payload,
  }),

  [actionTypes.updateOrg]: (
    state,
    action
  ) => ({
    ...state,
    selectedOrg: action.payload
  }),

  [actionTypes.updateReposSuccess]: (
    state,
    action
  ) => ({
    ...state,
    repos: action.payload
  }),

  [actionTypes.updateReposFailure]: (
    state,
    action
  ) => ({
    ...state,
    errorMessage: action.payload
  }),

  [actionTypes.updateSelectedRepo]: (
    state,
    action
  ) => ({
    ...state,
    selectedRepo: action.payload
  }),

  [actionTypes.updateRepoContributors]: (
    state,
    { payload: { repo, page } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [repo]: {
        ...state.repos[repo],
        contributors: {
          ...state.repos[repo].contributors,
          selectedPage: page,
          pages: {
            ...state.repos[repo].contributors.pages,
            [page]: {
              loaded: false,
              loading: true,
              list: [],
            }
          }
        },
      }
    }
  }),

  [actionTypes.updateRepoContributorsSuccess]: (
    state,
    { payload: { repo, page, contributors } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [repo]: {
        ...state.repos[repo],
        contributors: {
          ...state.repos[repo].contributors,
          selectedPage: page,
          pages: {
            ...state.repos[repo].contributors.pages,
            [page]: {
              loaded: true,
              loading: false,
              list: contributors,
            }
          }
        },
      }
    }
  }),

  [actionTypes.updateRepoContributorsFailure]: (
    state,
    { payload: { repo, page, errorMessage } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [repo]: {
        ...state.repos[repo],
        contributors: {
          ...state.repos[repo].contributors,
          pages: {
            ...state.repos[repo].contributors.pages,
            [page]: {
              loaded: false,
              loading: false,
              list: [],
            }
          }
        },
      },
    },
    errorMessage,
  })
}

const rootReducer = (state = initialState, action) => {
  const handler = actionHandler[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default rootReducer;
