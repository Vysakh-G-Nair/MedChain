import React from "react";
import "./headerStyling.scss";
import { Link, withRouter } from "react-router-dom";
import back_img from "./back.png";
import vector1_img from "./vector1.png";
import search_img from "./search.png";
import logo_hori_img from "./medlogohori.png";

class Header extends React.Component {
  isRegister() {}

  render() {
    const { inputPlaceholder, logoLink, logOut, address } = this.props;

    return (
      <div className="group-85-header">
        {/* eslint-disable-next-line */}
        <a
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          {logOut && (
            <div className="left-arrow-1">
              <img className="vector-2" src={back_img} alt="back" />
            </div>
          )}
        </a>
        {logoLink !== "back" && (
          <Link
            to={{
              pathname: logoLink,
              state: address,
            }}
          >
            <img className="medlogo-1-header" src={logo_hori_img} alt="logo" />
          </Link>
        )}
        {logoLink === "back" && (
          // eslint-disable-next-line
          <a
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            <img className="medlogo-1-header" src={logo_hori_img} alt="logo" />
          </a>
        )}
        <div className="overlap-group4-header">
          {/* eslint-disable-next-line */}
          <a onClick={this.isRegister}>
            <div className="group-83-header">
              <div className="overlap-group1-1-header-check">
                <img className="vector-header" src={search_img} alt="search" />
                {/* <div className="check poppins-medium-amethyst-15px">{check}</div> */}
              </div>
            </div>
          </a>
          <div className="group-84-header">
            <div className="loupe-1-header">
              <div className="overlap-group1-header">
                {/* <img className="vector-header" src={search_img} /> */}
              </div>
            </div>
            <div className="flex-col-header">
              <input
                className="enter-ethereum-address-header"
                name="enter-ethereum-address"
                placeholder={inputPlaceholder}
                type="text"
                required
              />
              <img className="vector-1-header" src={vector1_img} alt="Header" />
            </div>
          </div>
        </div>
        <Link to="/loginAs">
          {logOut && (
            <div className="reject-button-header">
              <div className="overlap-group1-1-header">
                <div className="log-out poppins-medium-alizarin-crimson-15px">
                  {logOut}
                </div>
              </div>
            </div>
          )}
        </Link>
      </div>
    );
  }
}

export default withRouter(Header);
