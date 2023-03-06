import React, { Suspense } from 'react'

import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'

import { BlogsPage } from 'pages/BlogsPage'
import { PostsPage } from 'pages/PostsPage'

const App = () => {
  return (
    <div className="app">
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
