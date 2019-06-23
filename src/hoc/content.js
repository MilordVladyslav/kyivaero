import { connect } from 'react-redux'
import Content from '../components/content/content'
import {
  mapStateToContentProps,
  mapDispatchToContentProps,
} from '../state-management/dispatchers'

const ContentHoc = connect(
  mapStateToContentProps,
  mapDispatchToContentProps,
)(Content)

export default ContentHoc
