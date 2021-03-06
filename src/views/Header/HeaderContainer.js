import { connect } from 'react-redux';

import { actions } from '../../store/rootReducer';
import Header from './Header';

const mapStateToProps = (state) => ({
  selectedOrg: state.selectedOrg,
})

const mapDispatchToProps = {
  updateOrg: actions.updateOrg,
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
