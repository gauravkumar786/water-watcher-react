import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { apiUrl } from '../../../src/config.json';

class OrderView extends Component {
    state = {
        data: {
            data.orderId: "",
            contactName: "",
            contactEmail: "",
            contactMobile: "",
            contactAddress: "",
            truckInformation: []
        }
    }
    async componentDidMount() {
        try {
            const { data: partner } = await axios.get(apiUrl + "/orders/" + this.props.match.params.id, {
                headers: {
                    "x-auth-token": localStorage.getItem('token')
                }
            });
            this.setState({ data: partner });
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data);
        }
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div className="innerpanel">
                <div className="page_title">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Order Detail</h1>
                        </div>
                    </div>
                </div>
                <div className="details_Panel">
                    <div className="information">
                        <h2>Personal Information</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Client ID::</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Phone:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Location:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Post code:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Order Type:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Last Interaction:</label>
                                    <span>{data.partnerType}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>    
                    <div className="information">
                        <h2>Partner Information</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Company:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Mobile:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Location:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Partner Type:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>                            
                        </div>
                    </div>  
                    <div className="information">
                        <h2>Order Information</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Order Number:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Order Date:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Delivery Size:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Qty:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Price:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Status:</label>
                                    <span>{data.orderId}</span>
                                </div>
                            </div>   
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Comments:</label>
                                    <p>{data.orderId}</p>
                                </div>
                            </div>                         
                        </div>
                    </div>                
                    <div className="button_panel text-center">
                        <a href="partners.php" className="btn btn-default" >Back</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderView;