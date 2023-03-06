import { RouteProps } from 'react-router-dom'

import { BlogsPage } from 'pages/BlogsPage'
import { PostsPage } from 'pages/PostsPage'

export enum AppRoutes {
  Blogs = 'blogs',
  Posts = 'posts',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Blogs]: '/',
  [AppRoutes.Posts]: '/posts',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Posts]: {
    path: RoutePath.posts,
    element: <PostsPage />,
  },
  [AppRoutes.Blogs]: {
    path: RoutePath.blogs,
    element: <BlogsPage />,
  },
}
