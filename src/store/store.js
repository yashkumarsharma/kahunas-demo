import React, { createContext, useContext } from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

// Todo: Remove this temporary root reducer
const rootReducer = (state = {
  isLoading: false,
}, action) => state

const staticReducers = {
  rootReducer,
}

const store = configureStore({
  reducer: combineReducers(staticReducers),
  devTools: process.env.NODE_ENV !== 'production',
})

export const replaceReducertest = (asyncReducers) => {
  store.replaceReducer(combineReducers({
    ...staticReducers,
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
