import React, { Suspense } from 'react'
import { useRoutes } from 'react-router'
import routes from './router'

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="count">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
