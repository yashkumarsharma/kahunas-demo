import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const title = 'Kahuna Demo Landing Page'

  return (
    <div>
      <h1>{title}</h1>
      <Link to='/workouts'> Check out Workouts Section </Link>
    </div>
  )
}

export default LandingPage
