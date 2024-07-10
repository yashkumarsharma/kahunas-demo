import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LandingPage = () => {
  const { t } = useTranslation()

  const title = 'Kahuna Demo Landing Page'

  return (
    <div>
      <h1>{title}</h1>
      <p>{t('welcome')}</p>

      <Link to='/workouts'> Check out Workouts Section </Link>
    </div>
  )
}

export default LandingPage
