import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function RootBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page 404!</div>
    }

    if (error.status === 401) {
      return <div>You aren authorized</div>
    }

    if (error.status === 503) {
      return <div>Service Unavailable</div>
    }
  }

  return <div>Something Error</div>
}
