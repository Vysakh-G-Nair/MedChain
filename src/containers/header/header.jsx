import React from "react";
import "./headerStyling.scss";
import { Link, withRouter } from "react-router-dom";
import back_img from "./back.png";
import vector1_img from "./vector1.png";
import search_img from "./search.png";
import logo_hori_img from "./medlogohori.png";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

class Header extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    visible: false,
    ethAddr: "",
    isRegistered: false
  };

  isRegister = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      const isReg = await factory.methods.isRegistered(this.state.ethAddr).call({
        from: accounts[0],
      });

      if (isReg === "Not registered as a user in the system!") {
        this.setState({ isRegistered: false });
      }
      else {
        this.setState({ isRegistered: true });
      }

      this.setState({
        errorMessage: isReg,
        visible: true,
      });
    } catch (error) {
      const er = error.message;
      // console.log(er);
      this.setState({
        errorMessage: er.slice(er.indexOf("N"), er.indexOf("!") + 1),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  render() {
    const { inputPlaceholder, logoLink, logOut, address } = this.props;

    const { isRegistered } = this.state;

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
                value={this.state.ethAddr}
                onChange={event => this.setState({ ethAddr: event.target.value })}
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
        <Rodal
              visible={this.state.visible}
              onClose={() => this.setState({ visible: false })}
            >
              <div className="text-1-rodal">{this.state.errorMessage}</div>
              {!isRegistered && <Link to="/register">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to Register Page</div>
                </div>
              </Link>}
              {isRegistered && <Link to="/loginAs">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to Login Page</div>
                </div>
              </Link>}
            </Rodal>
      </div>
    );
  }
}

export default withRouter(Header);
