import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./header.css";

export default class Header extends Component {
  state = {
    hasError: false,
  };
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  renderLogoutLink() {
    return (
      <div>
        <div className="Header__logged-in">
          <Link onClick={this.handleLogoutClick} to="/">
            Logout
          </Link>
          <Hyph />
          <Link to="/resources">Resources</Link>
          <Hyph />
          <Link to="/add-resource">Add Resource</Link>
        </div>
        <div>
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register </Link>
        <Hyph />
        <Link to="/login"> Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            {/*<FontAwesomeIcon className="yellow" icon="earlybirds" />*/}{" "}
            HatchLink
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
