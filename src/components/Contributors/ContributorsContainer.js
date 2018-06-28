import { connect } from 'react-redux';
import { actions } from '../../store/rootReducer';
import Contributors from './Contributors';

const mapStateToProps = (state) => {
  const { repos, selectedRepo } = state;
  const { contributors } = repos[selectedRepo];
  const { selectedPage, pages } = contributors;
  const contributorsInfo = pages[selectedPage] || {
    loading: false,
    loaded: false,
    list: []
  };

  return {
    selectedRepo,
    selectedPage,
    contributors: contributorsInfo,
  };
}

const mapDispatchToProps = {
  updateRepoContributors: actions.updateRepoContributors,
}

const ContributorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contributors);

export default ContributorsContainer;
