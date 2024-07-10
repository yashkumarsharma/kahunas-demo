import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Workouts = React.lazy(() => import('workouts/App'))

const App = () => (
  <Router>
    <React.Suspense fallback='Loading...'>
      <Routes>
        <Route path='/workouts/*' element={<Workouts />} />
        <Route path='/' element={<h1>Main Application</h1>} />
      </Routes>
    </React.Suspense>
  </Router>
)

export default App
