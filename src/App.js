import React, { Component } from 'react';
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';
//import {  } from 'react-bootstrap';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>

        <Navbar fluid>
          <Navbar.Header>

            <Navbar.Brand>
              <img src={ require('./Images/logo.png') } alt="Pizza42"/>
            </Navbar.Brand>

            {
              !isAuthenticated() && (
                <Button className="btn-alt" onClick={this.goTo.bind(this, 'home')}> Home </Button>
              )
            }
            {
              !isAuthenticated() && (
                <Button className="btn-log" onClick={this.login.bind(this)}> Log In </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button className="btn-alt" onClick={this.goTo.bind(this, 'profile')}> Profile </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button className="btn-log" onClick={this.logout.bind(this)}> Log Out </Button>
              )
            }
          </Navbar.Header>
        </Navbar>

        <div className="container">
          {this.props.children}

          <div className="backdrop">
            <p className="sentence1">We now deliver!</p>
            <p className="sentence2">Log in or sign up now to order.</p>
          </div>

          <div className="pizza-content">
            <Row className="show-grid">
              <Col md={4} className="delivery">
                <img src={ require('./Images/1.png') } alt="order"/> 1. Log in and make your order
              </Col>
              <Col md={4} className="delivery">
                <img src={ require('./Images/2.png') } alt="prepare"/> 2. Well make your order to perfection
              </Col>
              <Col md={4} className="delivery">
                <img src={ require('./Images/3.png') } alt="deliver"/> 3. Deliver to you in minutes
              </Col>
            </Row>
          </div>

          <div className="footer">
            <Row className="show-grid">

              <Col md={3} className="foot-grids">
                <ul className="links">
                  <li><a href="a-link.co.uk">About Us</a></li>
                  <li><a href="a-link.co.uk">Stores Near You</a></li>
                  <li><a href="a-link.co.uk">Terms & Conditions</a></li>
                  <li><a href="a-link.co.uk">Delivery</a></li>
                  <li><a href="a-link.co.uk">Have A Question?</a></li>
                  <li><a href="a-link.co.uk">Nutritional Information</a></li>
                </ul>
              </Col>

              <Col md={3} className="foot-grids">
                <img className="social-links" src={ require('./Images/social.png') } alt="social"/>
              </Col>

              <Col md={3} className="foot-grids">
                <div className="history">
                  Something about terms and conditions. A way of filling up the space.
                  Something about pizza and its greatness would be good too.
                  Oh and not too forget something about how long Pizza42 has been around.
                  Something about terms and conditions. A way of filling up the space.
                  Something about pizza and its greatness would be good too.
                </div>
              </Col>

              <Col md={3} className="foot-grids">
                <a href="a-link.com"><img className="ad" src={ require('./Images/blur-pizza.gif') } alt="ad"/></a>
              </Col>

            </Row>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
