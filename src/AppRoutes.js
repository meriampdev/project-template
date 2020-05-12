import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import App from './App'

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" render={(props) => (
            <App />
          )} />
          {/*<Route exact path="/" render={(props) => (
            <ProtectedRoute {...props} whenAuthRedirect='/home' component={<div>Login</div>} />
          )} />*/}

          <Route  path="*" render={(props) => (
            <div>Not Found</div>
          )} />
        </Switch>
    </Router>
  )
}