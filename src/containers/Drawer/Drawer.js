import { connect } from 'react-redux'

import Drawer from '../../components/Drawer'
import { updateLanguage } from './store/saga'

const mapStateToProps = ({ appSettings }) => ({
  language: appSettings.language,
})

const mapDispatchToProps = (dispatch) => ({
  updateLanguage: (language) => updateLanguage(dispatch, language),
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)

