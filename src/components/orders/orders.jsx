import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../../src/config.json';;

class Partners extends Component {
    state = {
        orders: []
    }

    async componentDidMount() {
        try {
            const { data: orders } = await axios.get(apiUrl + "/orders?status=pending", {
                headers: {
                    "x-auth-token": localStorage.getItem('token')
                }
            });
            this.setState({ orders });
        }
        catch (err) {
            if (err.response)
                toast.error(err.response.data);
        }
    }

    CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <img src={process.env.PUBLIC_URL + '/images/dots.png'} className="img-fluid" />
        </a>
    ));

    CustomMenu = React.forwardRef(
        ({ children, style, _id, className, 'aria-labelledby': labeledBy }, ref) => {
            console.log(_id)
            return (
                <div
                    ref={ref}
                    style={style}
                    _id={_id}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Link className="dropdown-item" to={"/orders/view/" + _id}><i className="fa fa-eye" aria-hidden="true"></i> View</Link>
                </div>
            );
        },
    );


    render() {
        return (
            <div className="innerpanel">
                <div className="page_title">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>Partners</h1>
                        </div>
                        <div className="col-md-9">
                            <div className="search_box">
                                <div className="search_input">
                                    <input className="form-control" placeholder="Search orders" />
                                </div>
                                <div className="search_submit">
                                    <input type="button" className="btn btn-primary" title="Submit" value="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive table_view">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Order Number</th>
                                <th>Client Name</th>
                                <th>Date</th>
                                <th>Delivery Size</th>
                                <th>Qty.</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orders.map((order) => (
                                <tr>
                                    <td><Link className="detail_Link" to="">#{order.orderId}</Link></td>
                                    <td>{order.date}</td>
                                    <td>{order.date}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <Dropdown className="ac-cstm">
                                            <Dropdown.Toggle as={this.CustomToggle} id="dropdown-custom-components">

                                            </Dropdown.Toggle>

                                            <Dropdown.Menu _id={order._id} as={this.CustomMenu}>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pag-div my-3">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="pagination_panel" aria-label="Page navigation">
                                <ul className="pagination mb-0">
                                    <li className="page-item"><a className="page-link" href="#"><span aria-hidden="true">←</span>Prev</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next <span aria-hidden="true">→</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Orders;