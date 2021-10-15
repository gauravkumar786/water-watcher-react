import React, { Component } from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <p>&copy; COPYRIGHT 2021 Thewaterwatcher.com. All rights Reserved</p>
            </div>

            <div class="modal fade" id="OrderStatus" tabindex="-1" role="dialog" aria-labelledby="OrderStatus" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Order Status</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Change Order Status</label>
                                <select class="form-control">
                                    <option>Pending</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-default">Cancel</button>
                            <button type="button" onclick="location.href='completed-orders.php'" class="btn btn-primary">Change Status</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="SuspendBlock" tabindex="-1" role="dialog" aria-labelledby="SuspendBlock" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Suspend/Block</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>An email will sent to the user as a notification that your account has been blocked till next instructions for details and support contact us via email, phone etc. TBD</label>
                            </div>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-default">Cancel</button>
                            <button type="button" class="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="AddTruck" tabindex="-1" role="dialog" aria-labelledby="AddTruck" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Truck</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="truck_info">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Vehicle Registration" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Truck Capacity" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Loads per day" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <input name="" placeholder="Price per load" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <button class="btn btn-danger"><i class="fa fa-minus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Vehicle Registration" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Truck Capacity" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <input name="" placeholder="Loads per day" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <input name="" placeholder="Price per load" type="text" class="form-control" value="" />
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <button class="btn btn-primary"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-default">Cancel</button>
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="DeactivatePlan" tabindex="-1" role="dialog" aria-labelledby="DeactivatePlan" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Deactivate Plan</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Are you sure you want to Deactivate a Plan</label>
                            </div>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-default">Cancel</button>
                            <button type="button" class="btn btn-primary">Confirm</button>

                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="ActivatePlan" tabindex="-1" role="dialog" aria-labelledby="ActivatePlan" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Activate Plan</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Are you sure you want to Activate a Plan</label>
                            </div>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="button" data-dismiss="modal" aria-label="Close" class="btn btn-default">Cancel</button>
                            <button type="button" class="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Footer;