import React from 'react'

import KeepAlive from '@/components/keepalive'
import RootBoundary from '@/components/rootBoundary'
import NotFund from '@/components/NotFund'

const Home = React.lazy(() => import('@/pages/home/index'))
const Demo = React.lazy(() => import('@/pages/Demo/index'))

const routes = [
  {
    path: '/',
    element: <KeepAlive />,
    children: [
      {
        path: '/home',
        element: <Home />,
        errorElement: <RootBoundary />
      },
      {
        path: '/demo/:id',
        element: <Demo />,
        errorElement: <RootBoundary />
      }
    ]
  },

  // 路由重定向
  {
    path: '/',
    element: <Home />,
    errorElement: <RootBoundary />
  },
  {
    path: '*',
    element: <NotFund />
  }
]

export default routes
