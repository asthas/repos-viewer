import { connect } from 'react-redux';
import DetailView from './DetailView';

const mapStateToProps = (state) => {
  const { repos, selectedRepo } = state;
  const repoInfo = repos[selectedRepo] ?
    { ...repos[selectedRepo], loaded: true } :
    { loaded: false };

  return ({
    selectedRepo,
    repoInfo
  });
}

const DetailViewContainer = connect(
  mapStateToProps,
)(DetailView);

export default DetailViewContainer;
