import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import GetApi from './GetApi.js';
import NotFound from './NotFound.js';
import './user.css';

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React App</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="headerlinks">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>

                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={GetApi} />
                        <Route path='/about' component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default RouterApp;