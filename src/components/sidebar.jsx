import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <ul className="menu">
                    <li className="">
                        <NavLink to="/dashboard"><i className="fa fa-dashboard"></i>Dashboard </NavLink>
                    </li>
                    <li className="nav-item submenu">
                        <a className="nav-link" data-toggle="collapse" data-target="#orders"><i className="fa fa-book"></i>Orders <i className="fa fa-angle-down pull-right" aria-hidden="true"></i></a>
                        <ul className="list-unstyled flex-column collapse" id="orders" aria-expanded="false">
                            <li className="nav-item"><NavLink className="nav-link" to="pending-orders.php"><em className="sub_icon"><i className="fa fa-minus"></i></em>Pending Orders</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="completed-orders.php"><em className="sub_icon"><i className="fa fa-minus"></i></em>Completed Orders</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link" data-toggle="collapse" data-target="#clients"><i className="fa fa-user-o"></i>Clients <i className="fa fa-angle-down pull-right" aria-hidden="true"></i></a>
                        <ul className="list-unstyled flex-column collapse" id="clients" aria-expanded="false">
                            <li className="nav-item"><NavLink className="nav-link" to="water_order_clients"><em className="sub_icon"><i className="fa fa-minus"></i></em>Water Order Clients</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="subscription-clients.php"><em className="sub_icon"><i className="fa fa-minus"></i></em>Subscription Clients</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/partners"><i className="fa fa-handshake-o"></i>Partners</NavLink>
                    </li>
                    <li>
                        <NavLink to="/payments"><i className="fa fa-money"></i>Payments</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subscription_plans"><i className="fa fa-hand-o-up"></i>Subscription Plans</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;