import React, { Suspense, useState } from 'react'

import './styles/index.scss'
import { Link } from 'react-router-dom'

import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/posts'}>Posts</Link>
      <Link to={'/'}>Blogs</Link>
      <AppRouter />
    </div>
  )
}

export default App
