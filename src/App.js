import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage  from './containers/LandingPage'
import Drawer  from './containers/Drawer'

import './translations/i18n'

const Workouts = React.lazy(() => import('workouts/App'))

const App = () => {
  return (
    <Router>
      {/* Not an ideal place */}
      <Drawer />
      <React.Suspense fallback='Loading...'>
        <Routes>
          <Route path='/workouts/*' element={<Workouts />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App
