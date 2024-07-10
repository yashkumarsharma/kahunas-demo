import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.css'

const LandingPage = () => {
  const { t } = useTranslation()

  const title = 'Kahuna Demo Landing Page'

  return (
    <div className='landing-page'>
      <h1>{title}</h1>
      <p>{t('welcome')}</p>
      <ul>
        <li>{t('description')}</li>
        <li>{t('subdescription1')}</li>
        <li>{t('subdescription2')}</li>
      </ul>
    </div>
  )
}

export default LandingPage
