import React, { createContext, useContext } from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { appReducers as workoutsReducers } from 'workouts/Store'
import { appReducers as clientsReducers } from 'clients/Store'
import { appReducers as authReducers } from 'auth/Store'

import appSettingsReducer from '../containers/Drawer/store/reducer'

const appReducers = {
  appSettings: appSettingsReducer,
  ...workoutsReducers,
  ...clientsReducers,
  ...authReducers,
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
