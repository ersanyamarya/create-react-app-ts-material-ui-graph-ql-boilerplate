import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { lazy, ReactElement, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import client from './apollo'
import { SnackbarContainer, ThemeContainer } from './appContext'
import './index.css'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
const NotFound = lazy(() => import('./pages/404'))
const Login = lazy(() => import('./pages/login'))
const Capture = lazy(() => import('./pages/capture'))
const SpaceX = lazy(() => import('./pages/spaceX'))

const RouterPage = (props: { pageComponent: ReactElement } & RouteComponentProps) => props.pageComponent

const Application = () => {
  return (
    <Suspense fallback={<div className="spin"></div>}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <ThemeContainer>
          <SnackbarContainer>
            <Router>
              <RouterPage path="/" pageComponent={<Login />} />
              <RouterPage path="/capture" pageComponent={<Capture />} />
              <RouterPage path="/spacex" pageComponent={<SpaceX />} />
              <RouterPage default pageComponent={<NotFound />} />
            </Router>
          </SnackbarContainer>
        </ThemeContainer>
      </ApolloProvider>
    </Suspense>
  )
}

ReactDOM.render(
  <StrictMode>
    <Application />
  </StrictMode>,

  document.getElementById('root')
)
serviceWorker.register()
reportWebVitals(console.log)
