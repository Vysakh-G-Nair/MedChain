import React from "react";
import "./registerStyling.scss";
import { Link, withRouter } from "react-router-dom";
import user_img from "./user.png";
import hospital_img from "./hospital.png";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class Register extends React.Component {
  state = {
    noMetavisible: false,
    errorMessage: "",
    loading: false,
    visible: false,
  };

  componentDidMount() {
    if (typeof window.web3 === "undefined") {
      this.setState({ noMetavisible: true });
    }
  }

  canRegister = async (type) => {
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods.canRegister().call({
        from: accounts[0],
      });

      if (type == 0) {
        this.props.history.push({
          pathname: "/registerpatientform",
        });
      } else if (type == 1) {
        this.props.history.push({
          pathname: "/registerhospitalform",
        });
      } else if (type == 2) {
        this.props.history.push({
          pathname: "/registerexternalform",
        });
      }
    } catch (error) {
      const er = error.message;
      // console.log(er);
      this.setState({
        errorMessage: er.slice(er.indexOf("A"), er.indexOf("!") + 1),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  regPatient = async (event) => {
    event.preventDefault();

    this.canRegister(0);
  };

  regMedPro = async (event) => {
    event.preventDefault();

    this.canRegister(1);
  };

  regExtUser = async (event) => {
    event.preventDefault();

    this.canRegister(2);
  };

  render() {
    const { register, registerAs, patient, medPro, externaluser } = this.props;

    return (
      <div className="container-center-horizontal">
        <form
          className="register screen"
          style={{ backgroundImage: `url(${register})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group-register">
            <div className="register-as-register poppins-medium-white-20px">
              {registerAs}
            </div>
            {/* <Link to='/registerpatientform'> */}
            <a onClick={this.regPatient}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                  <img className="user-1-register" src={user_img} alt="" />
                  <div className="patient-register poppins-semi-bold-amethyst-20px">
                    {patient}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </a>
            {/* <Link to='/registerhospitalform'> */}
            <a onClick={this.regMedPro}>
              <div className="group-62-register">
                <div className="overlap-group1-register">
                  <img
                    className="hospital-2-register"
                    src={hospital_img}
                    alt=""
                  />
                  <div className="place-register poppins-semi-bold-amethyst-20px">
                    {medPro}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </a>
            {/* <Link to='/registerexternalform'> */}
            <a onClick={this.regExtUser}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                  <img className="user-1-register" src={user_img} alt="" />
                  <div className="patient-register poppins-semi-bold-amethyst-20px">
                    {externaluser}
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </a>
            <Rodal
              visible={this.state.visible}
              onClose={() => this.setState({ visible: false })}
            >
              <div className="text-1-rodal">{this.state.errorMessage}</div>
              <Link to="/loginAs">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to Login Page</div>
                </div>
              </Link>
            </Rodal>
            <Rodal
              visible={this.state.noMetavisible}
              onClose={() => this.props.history.push("/")}
            >
              <div className="text-1-rodal">
                Web3 not found! MetaMask may not be installed or configured
                correctly!
              </div>
              <a href="https://metamask.io/" target="_blank">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to MetaMask site</div>
                </div>
              </a>
            </Rodal>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
