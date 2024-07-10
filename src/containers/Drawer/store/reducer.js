import {
  CHANGE_APP_LANGUAGE,
} from './actions'

const initialState = {
  language: 'en',
}

// Todo: Need better name for this location
const appSettings = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_APP_LANGUAGE:
    // Todo: Add ImmutableJS
    return { ...state, language: action.data }
  default:
    return state
  }
}

export default appSettings
