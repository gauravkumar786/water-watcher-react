import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AdminLoginForm from './components/loginForm';
import 'react-toastify/dist/ReactToastify.css';
import auth from './services/authService';
import './App.css';
import Dashboard from './components/dashboard';
import ProtectedRoute from './components/common/protectedRoute';
import Partners from './components/partners/partners';
import PartnerForm from './components/partners/partnerForm';
import PartnerView from './components/partners/partnerView';
import Logout from './components/logout';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Route
          path="/login"
          exact
          render={props => {
            if (user) return <Redirect to="/dashboard" />;
            return <AdminLoginForm user={user} />;
          }}
        />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/partners/view/:id" component={PartnerView} />
        <ProtectedRoute exact path="/partners/:id" component={PartnerForm} />
        <ProtectedRoute exact path="/partners" component={Partners} />
        <ProtectedRoute path="/logout" component={Logout} />
      </React.Fragment>
    );
  }
}

export default App;

