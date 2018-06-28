import { connect } from 'react-redux';

import { actions } from '../../store/rootReducer';
import normalizeRepos from '../../utils/normalize-repos';
import RepoList from './RepoList';

const mapStateToProps = (state) => ({
  selectedOrg: state.selectedOrg,
  selectedRepo: state.selectedRepo,
  repos: normalizeRepos(state.repos, state.searchTerm, 'watchers'),
  totalRepos: Object.keys(state.repos).length,
});

const mapDispatchToProps = {
  updateOrg: actions.updateOrg,
  updateSelectedRepo: actions.updateSelectedRepo,
};

const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);

export default RepoListContainer;
