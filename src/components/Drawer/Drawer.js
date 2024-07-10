import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import i18n from '../../translations/i18n'

const Drawer = (props) => {
  const { language, updateLanguage } = props
  const { t } = useTranslation()

  const changeLanguage = (lng) => {
    updateLanguage(lng)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  const title = 'Kahuna Demo Drawer'

  return (
    <div>
      <h1>{title}</h1>
      <p>{t('welcome')}</p>

      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
    </div>
  )
}

export default Drawer
