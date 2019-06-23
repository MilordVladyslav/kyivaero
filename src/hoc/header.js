import { connect } from 'react-redux'
import Header from '../components/header/'
import {
  mapStateToHeaderProps,
  mapDispatchToHeaderProps,
} from '../state-management/dispatchers'

const HeaderHoc = connect(
  mapStateToHeaderProps,
  mapDispatchToHeaderProps,
)(Header)

export default HeaderHoc
