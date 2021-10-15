import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { apiUrl } from '../../../src/config.json';

class PartnerView extends Component {
    state = {
        data: {
            companyName: "",
            contactName: "",
            contactEmail: "",
            contactMobile: "",
            contactAddress: "",
            truckInformation: []
        }
    }
    async componentDidMount() {
        try {
            const { data: partner } = await axios.get(apiUrl + "/partners/" + this.props.match.params.id, {
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
                            <h1>Partner Detail</h1>
                        </div>
                    </div>
                </div>
                <div className="details_Panel">
                    <div className="information">
                        <h2>Personal Information</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Company:</label>
                                    <span>{data.companyName}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <span>{data.companyName}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <span>{data.contactEmail}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Mobile:</label>
                                    <span>{data.contactMobile}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Location:</label>
                                    <span>{data.contactAddress}</span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Partner Type:</label>
                                    <span>{data.partnerType}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="truck_title">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Truck Information</h2>
                                </div>

                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Vehicle Registration</th>
                                        <th>Truck Capacity</th>
                                        <th>Loads per day</th>
                                        <th>Price per load</th>
                                        <th>Status</th>
                                        {/* <th><Action</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.truckInformation.map((truckInfo, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{truckInfo.vehicleRegistration}</td>
                                            <td>200{truckInfo.truckCapacity} ltr.</td>
                                            <td>{truckInfo.loadsPerDay}</td>
                                            <td>$ {truckInfo.pricePerLoad}</td>
                                            <td><button className="btn btn-success btn-sm">Active</button></td>
                                            {/* <td><button className="btn btn-danger btn-sm">Delete</button></td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="button_panel text-center">
                        <a href="partners.php" className="btn btn-default" >Back</a>
                        <a href="#" className="btn btn-danger" data-toggle="modal" data-target="#SuspendBlock">Suspend/Block</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PartnerView;