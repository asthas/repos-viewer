import { connect } from 'react-redux';

import { actions } from '../../store/rootReducer';
import normalizeRepos from '../../utils/normalize-repos';
import RepoList from './RepoList';

const mapStateToProps = (state) => ({
  selectedRepo: state.selectedRepo,
  repos: normalizeRepos(state.repos, state.searchTerm, 'watchers'),
});

const mapDispatchToProps = {
  updateSelectedRepo: actions.updateSelectedRepo,
};

const RepoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);

export default RepoListContainer;
