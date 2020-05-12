import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import App from './App'
import Login from './pages/Login'
import Layout from './components/Layout'

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" render={(props) => (
            <Login />
          )} />
          {/*<Route exact path="/" render={(props) => (
            <ProtectedRoute {...props} whenAuthRedirect='/home' component={<div>Login</div>} />
          )} />*/}
          <Route exact path="/login" render={(props) => (
            <Login />
          )} />

          <Route path="/app" render={(props) => (
            <Layout />
          )} />

          <Route  path="*" render={(props) => (
            <div>Not Found</div>
          )} />
        </Switch>
    </Router>
  )
}