import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import i18n from '../../translations/i18n'
import './styles.css'

const Drawer = (props) => {
  const { language, updateLanguage } = props
  const { t } = useTranslation()

  const changeLanguage = (lng) => {
    updateLanguage(lng)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const title = 'Kahunas Drawer'

  return (
    <div className='drawer-container'>
      <h1>{title}</h1>
      <p>{t('welcome')}</p>
      <div className='section-links'>
        <Link to='/workouts' className='button-link'>
          Workouts
        </Link>
        <Link to='/clients' className='button-link'>
          Clients
        </Link>
        <Link to='/auth' className='button-link'>
          Auth
        </Link>
      </div>
      <div className='button-container'>
        <button onClick={() => changeLanguage('en')} disabled={language === 'en'}>
          English
        </button>
        <button onClick={() => changeLanguage('fr')} disabled={language === 'fr'}>
          Français
        </button>
      </div>
    </div>
  )
}

export default Drawer
