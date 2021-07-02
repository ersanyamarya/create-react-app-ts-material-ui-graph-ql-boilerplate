import { CssBaseline } from '@material-ui/core'

import { RouteComponentProps, Router } from '@reach/router'
import React, { lazy, ReactElement, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { SnackbarContainer, ThemeContainer } from './appContext'
import './index.css'
import reportWebVitals from './reportWebVitals'

const NotFound = lazy(() => import('./pages/404'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const Application = () => {
  return (
    <Suspense fallback={<div className="spin"></div>}>
      <CssBaseline />
      <ThemeContainer>
        <SnackbarContainer>
          <Router>
            <RouterPage path="/" pageComponent={<NotFound />} />
            <RouterPage default pageComponent={<NotFound />} />
          </Router>
        </SnackbarContainer>
      </ThemeContainer>
    </Suspense>
  )
}

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,

  document.getElementById('root')
)

reportWebVitals(console.log)
