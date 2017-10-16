import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4 className="log-status">
              You are logged in! You can now view your{' '} <Link to="profile">profile area</Link>.
            </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4 className="log-status">
              You are not logged in! Please{' '} <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}> Log In </a> {' '}to continue.
            </h4>
          )
        }
      </div>
    );
  }
}

export default Home;
