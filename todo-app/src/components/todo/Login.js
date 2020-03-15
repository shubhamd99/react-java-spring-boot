import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: 'shubham',
             password: '',
             hasLoginFailed: false,
             showSuccessMessage: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClicked() {
        if (this.state.username === 'shubham' && this.state.password === 'abc123') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.setState({ showSuccessMessage: true, hasLoginFailed: false });
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({ showSuccessMessage: false , hasLoginFailed: true });
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div className="alert alert-warning">Invalid Credentials</div>;
    }

    return null;
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>;
    }

    return null;
}

export default LoginComponent;