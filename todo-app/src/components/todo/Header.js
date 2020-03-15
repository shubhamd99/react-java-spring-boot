import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class Header extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log("isUserLoggedIn", isUserLoggedIn);
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a className="navbar-brand" style={{ color: 'white' }}>TODO</a></div>
                   <ul className="navbar-nav">
                       {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/shubham">Home</Link></li>}
                       {isUserLoggedIn && <li><Link className="nav-link" to="/todo">Todos</Link></li>}
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                       {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </div>
        )
    }
}

export default withRouter(Header);