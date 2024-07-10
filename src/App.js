import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage  from './containers/LandingPage'
import Drawer  from './containers/Drawer'

import './translations/i18n'
import './App.css'

const Workouts = React.lazy(() => import('workouts/App'))

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className='drawer'>
          <Drawer />
        </div>
        <div className='content'>
          <React.Suspense fallback='Loading...'>
            <Routes>
              <Route path='/workouts/*' element={<Workouts />} />
              <Route path='/' element={<LandingPage />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App
