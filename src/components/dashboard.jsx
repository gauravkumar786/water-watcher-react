import React, { Component } from 'react';

class Dashboard extends React.Component {
    render() { 
        return (
            <div className="innerpanel">
                <div className="row">
                    <div className="col-md-4">
                        <div className="bx-div">
                        <div className="box_left">
                            <h3>143</h3>
                            <p>New Clients</p>
                        </div>
                        <div className="box_right">
                            <img src={ process.env.PUBLIC_URL + '/images/new_customer_icon.png' } />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bx-div middle">
                        <div className="box_left">
                            <h3>10</h3>
                            <p>New Users Subscribed</p>
                        </div>
                        <div className="box_right">
                            <img src={ process.env.PUBLIC_URL + '/images/new_users_icon.png' } />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bx-div">
                        <div className="box_left">
                            <h3>299</h3>
                            <p>New Orders</p>
                        </div>
                        <div className="box_right">
                            <img src={ process.env.PUBLIC_URL + '/images/new_orders_icon.png' } />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-3">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="dashboard_calendar">
                        <img src={ process.env.PUBLIC_URL + '/images/dashboard_calendar.jpg' } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Dashboard;