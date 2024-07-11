import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'

import LandingPage  from './containers/LandingPage'
import Drawer  from './containers/Drawer'

import './translations/i18n'
import './App.css'

const Workouts = React.lazy(() => import('workouts/App'))
const Clients = React.lazy(() => import('clients/App'))
const Auth = React.lazy(() => import('auth/App'))

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/auth' />
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuthChange = () => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }

  useEffect(() => {
    window.addEventListener('authChanged', handleAuthChange)
    handleAuthChange() // Initial check

    return () => {
      window.removeEventListener('authChanged', handleAuthChange)
    }
  }, [])

  return (
    <Router>
      <div className='container'>
        <div className='drawer'>
          <Drawer />
        </div>
        <div className='content'>
          <React.Suspense fallback='Loading...'>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/workouts/*' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path='' element={<Workouts />} />
              </Route>
              <Route path='/clients/*' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path='' element={<Clients />} />
              </Route>
              <Route path='/auth' element={<Auth />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App
