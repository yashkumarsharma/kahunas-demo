import React, { createContext, useContext } from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import appSettingsReducer from '../containers/Drawer/store/reducer'

const appReducers = {
  appSettings: appSettingsReducer,
}

const store = configureStore({
  reducer: combineReducers(appReducers),
  devTools: process.env.NODE_ENV !== 'production',
})

export const replaceReducertest = (asyncReducers) => {
  store.replaceReducer(combineReducers({
    ...appReducers,
    ...asyncReducers,
  }))
}

const StoreContext = createContext({ store, replaceReducertest})

export const useStore = () => useContext(StoreContext)

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ store, replaceReducertest }}>
      {children}
    </StoreContext.Provider>
  )
}


export default store
