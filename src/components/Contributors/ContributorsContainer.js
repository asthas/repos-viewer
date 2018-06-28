import { connect } from 'react-redux';
import { actions } from '../../store/rootReducer';
import Contributors from './Contributors';

const mapStateToProps = (state) => {
  const { repos, selectedRepo } = state;
  const contributors = repos[selectedRepo].contributors || {};
  const selectedPage = contributors.selectedPage || 1;
  const contributorsInfo = contributors.pages[selectedPage] || {};

  return {
    selectedRepo,
    selectedPage,
    contributors: contributorsInfo,
  }
}

const mapDispatchToProps = {
  updateRepoContributors: actions.updateRepoContributors,
}

const ContributorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contributors);

export default ContributorsContainer;
