import { connect } from 'react-redux';

import { actions } from '../../store/rootReducer';
import Search from './Search';

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
})

const mapDispatchToProps = {
  updateSearchTerm: actions.updateSearchTerm,
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
