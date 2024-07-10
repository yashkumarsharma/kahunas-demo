import {
  CHANGE_APP_LANGUAGE,
} from './actions'

// eslint-disable-next-line import/prefer-default-export
export const updateLanguage = async (dispatch, language) => {
  dispatch({ type: CHANGE_APP_LANGUAGE, data: language })
}
