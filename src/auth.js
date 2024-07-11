import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  // After several attempts, the Parent app, was not automatically refreshed on login/logout
  // I am adding a temporary solution of dispatching events to handle this.

  const dispatchAuthChangeEvent = () => {
    window.dispatchEvent(new Event('authChanged'))
  }

  const login = (token) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
    dispatchAuthChangeEvent()
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    dispatchAuthChangeEvent()
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
