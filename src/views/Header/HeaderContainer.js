import { connect } from 'react-redux';

import { actions } from '../../store/rootReducer';
import Header from './Header';

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  selectedOrg: state.selectedOrg,
})

const mapDispatchToProps = {
  updateSearchTerm: actions.updateSearchTerm,
  updateOrg: actions.updateOrg,
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;


