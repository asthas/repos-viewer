import { connect } from 'react-redux';
import DetailView from './DetailView';

const mapStateToProps = (state) => ({
  selectedRepo: state.selectedRepo,
  repoInfo: state.repos[state.selectedRepo],
});

const DetailViewContainer = connect(
  mapStateToProps,
)(DetailView);

export default DetailViewContainer;
