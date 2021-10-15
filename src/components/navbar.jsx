import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header id="header">
            <a className="logo animated fadeIn" href="dashboard.php">
                <img src={process.env.PUBLIC_URL + '/images/main_logo.png'} className="img-fluid" />
            </a>
            <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <div className="header_actions">
                <ul>
                    <li className="logout">
                        <span><b>Christophe S.</b> <Link to="/logout">Logout <i className="fa fa-sign-out"></i></Link></span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
