import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../../actions/auth.actions';
import photo from '../../../assets/avatar.png';
import { Dropdown } from 'react-bootstrap';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
        <div className="container">
          <a className="navbar-brand" href="/ ">Goals App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {this.props.isAuth ? (
                  <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                      <img src={photo} alt="Avatar" className="avatar"></img>
                    </Dropdown.Toggle>
                    <Dropdown.Menu alignRight="true">
                      <Dropdown.Item><NavLink to="/resetPassword">Reset password</NavLink></Dropdown.Item>
                      <Dropdown.Item onClick={this.handleSubmit}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <NavLink to="/login">Sign In</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth
  }
}

const actionCreators = {
  logout: authActions.logout
};

const connectedHeader = connect(mapStateToProps, actionCreators)(Header)


export { connectedHeader as Header }