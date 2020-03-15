import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';

import Header from './Header';
import Footer from './Footer';
import LoginComponent from './Login';
import ListTodosComponent from './ListTodos';
import WelcomeComponent from './Welcome';
import LogoutComponent from './Logout';

export default class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Header />
                    <Switch>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todo" component={ListTodosComponent} />
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponent} />
                    </Switch>
                    <Footer />
               </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div className="alert alert-warning">An Error Occurred</div>
}
