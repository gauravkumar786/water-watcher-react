import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Form from '../common/form';
import { apiUrl } from '../../config.json';

class PartnerAdd extends Form {
    state = {
        data: {
            partnerId: "Part001",
            partnerType: "Water Delivery",
            companyName: "",
            contactName: "",
            contactEmail: "",
            contactMobile: "",
            contactAddress: "",
            truckInformation: [
                {
                    vehicleRegistration: "",
                    truckCapacity: "",
                    loadsPerDay: "",
                    pricePerLoad: ""
                }
            ]
        }
    }

    async componentDidMount() {
        try {
            const partnerId = this.props.match.params.id;
            if (partnerId === "create") return;
    
            const { data: partner } = await axios.get(apiUrl + "/partners/" + partnerId, {
                headers: {
                    "x-auth-token": localStorage.getItem('token')
                }
            }); 
            const data = this.mapValues(partner);
            this.setState({ data });
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data);
        }
    }

    mapValues(data) {
        return {
            partnerId: data.partnerId,
            partnerType: data.partnerType,
            companyName: data.companyName,
            contactName: data.contactName,
            contactEmail: data.contactEmail,
            contactMobile: data.contactMobile,
            contactAddress: data.contactAddress,
            truckInformation: data.truckInformation,
        }
    }

    doSubmit = async () => {
        try {
            const headers = {
                "x-auth-token": localStorage.getItem('token')
            }
            const partnerId = this.props.match.params.id;
            if (partnerId === "create") {
                await axios.post(apiUrl + "/partners", this.state.data, {
                    headers: headers
                });
            }
            else {
                await axios.put(apiUrl + "/partners/" + partnerId, this.state.data, {
                    headers: headers
                });
            }
            this.props.history.push("/partners");
        }
        catch (err) {
            if (err.response)
                toast.error(err);
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div className="innerpanel">
                <div className="page_title">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{(this.props.match.params.id === "create") ? 'Add' : 'Edit'} Partner</h1>
                        </div>
                    </div>
                </div>
                <div className="content_panel">
                    <div className="form_panel">
                        <form onSubmit={this.handleSubmit}>
                            <div className="information">
                                <h2>Personal Information</h2>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Partner ID</label>
                                            <input name="partnerId" readOnly type="text" className="form-control" value={data.partnerId} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Partner Type</label>
                                            <input name="partnerType" type="text" className="form-control" readOnly value={data.partnerType} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input name="companyName" value={data.companyName} type="text" onChange={this.handleChange} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Contact Name</label>
                                            <input name="contactName" type="text" onChange={this.handleChange} className="form-control" value={data.contactName} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Contact Email</label>
                                            <input name="contactEmail" type="text" onChange={this.handleChange} className="form-control" value={data.contactEmail} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Contact Mobile</label>
                                            <input name="contactMobile" type="text" onChange={this.handleChange} className="form-control" value={data.contactMobile} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Contact Address</label>
                                            <textarea name="contactAddress" defaultValue={data.contactAddress} type="text" onChange={this.handleChange} className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="information truck_info">
                                <h2>Truck Information</h2>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input className="vehicleRegistration" placeholder="Vehicle Registration" type="text" className="form-control" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input className="" placeholder="Truck Capacity" type="text" className="form-control" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input className="" placeholder="Loads per day" type="text" className="form-control" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <input className="" placeholder="Price per load" type="text" className="form-control" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-1">
                                        <div className="form-group">
                                            <button className="btn btn-primary"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button_panel">
                                <button type="button" className="btn btn-default">Back</button>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerAdd;