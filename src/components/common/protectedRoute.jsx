import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/authService';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Footer from '../footer';

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to="/login" />;
                return Component ? (
                    <div className="main_wrapper" >
                        <Navbar />
                        <Sidebar />
                        <div id="wrapper">
                            <Component {...props} />
                        </div>
                        <Footer />
                    </div>
                )
                    : render(props);
            }}
        />
    );
}

export default ProtectedRoute;