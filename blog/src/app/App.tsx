import React, { Suspense, useState } from 'react'

import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { BlogsPage } from 'pages/BlogsPage'
import { PostsPage } from 'pages/PostsPage'
import { classNames } from 'shared/lib/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/posts'}>Posts</Link>
      <Link to={'/'}>Blogs</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={'/'} element={<BlogsPage />} />
          <Route path={'/posts'} element={<PostsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
