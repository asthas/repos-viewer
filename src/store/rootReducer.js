import initialState from './initialState';

const actionTypes = {
  updateSearchTerm: 'UPDATE_SEARCH_TERM',
  updateOrg: 'UPDATE_ORG',
  updateRepos: 'UPDATE_REPOS',
  updateReposSuccess: 'UPDATE_REPOS_SUCCESS',
  updateReposFailure: 'UPDATE_REPOS_FAILURE',
  updateSelectedRepo: 'UPDATE_SELECTED_REPO',
  updateRepoInfo: 'UPDATE_REPO_INFO',
  updateRepoInfoSuccess: 'UPDATE_REPO_INFO_SUCCESS',
  updateRepoInfoFailure: 'UPDATE_REPO_INFO_FAILURE',
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

  updateRepoInfo: (payload) => ({
    type: actionTypes.updateRepoInfo,
    payload
  }),

  updateRepoInfoSuccess: (payload) => ({
    type: actionTypes.updateRepoInfoSuccess,
    payload
  }),

  updateRepoInfoFailure: (payload) => ({
    type: actionTypes.updateRepoInfoFailure,
    payload
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

  [actionTypes.updateRepoInfoSuccess]: (
    state,
    { payload: { name, info } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [name]: {
        ...state.repos[name],
        ...info,
        loaded: true,
      }
    }
  }),

  [actionTypes.updateRepoInfoFailure]: (
    state,
    action
  ) => ({
    ...state,
    errorMessage: action.payload
  }),

  [actionTypes.updateRepoContributors]: (
    state,
    { payload: { name, page } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [name]: {
        ...state.repos[name],
        contributors: {
          selectedPage: page,
          ...state.repos[name].contributors,
          [page]: {
            loaded: false,
            loading: true,
          }
        },
      }
    }
  }),

  [actionTypes.updateRepoContributorsSuccess]: (
    state,
    { payload: { name, page, contributors } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [name]: {
        ...state.repos[name],
        contributors: {
          ...state.repos[name].contributors,
          [page]: {
            loaded: false,
            loading: true,
            list: contributors,
          }
        },
      }
    }
  }),

  [actionTypes.updateRepoContributorsFailure]: (
    state,
    { payload: { name, page, errorMessage } }
  ) => ({
    ...state,
    repos: {
      ...state.repos,
      [name]: {
        ...state.repos[name],
        contributors: {
          ...state.repos[name].contributors,
          [page]: {
            loaded: false,
            loading: false,
          },
        },
      }
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
