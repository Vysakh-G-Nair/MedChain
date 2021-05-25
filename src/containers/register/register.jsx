import React from 'react';
import './registerStyling.scss';
import { Link, withRouter } from "react-router-dom";
import user_img from './user.png';
import hospital_img from './hospital.png';
import Rodal from "rodal";
import "rodal/lib/rodal.css";
  
class Register extends React.Component {
  state = {
    noMetavisible: false,
  };

  componentDidMount() {
    if (typeof window.web3 === 'undefined') {
      this.setState({ noMetavisible: true });
    }
  }

  render() {
    const { register, registerAs, patient, place, externaluser } = this.props;

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
            <div className="register-as-register poppins-medium-white-20px">{registerAs}</div>
            <Link to='/registerpatientform'>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                <img className="user-1-register" src={user_img} alt=""/>
                <div className="patient-register poppins-semi-bold-amethyst-20px">{patient}</div>
                </div>
              </div>
            </Link>
            <Link to='/registerhospitalform'>
              <div className="group-62-register">
                <div className="overlap-group1-register">
                <img className="hospital-2-register" src={hospital_img} alt=""/>
                <div className="place-register poppins-semi-bold-amethyst-20px">{place}</div>
                </div>
              </div>
            </Link>
            <Link to='/registerexternalform'>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                <img className="user-1-register" src={user_img} alt=""/>
                <div className="patient-register poppins-semi-bold-amethyst-20px">{externaluser}</div>
                </div>
              </div>
            </Link>
            <Rodal
              visible={this.state.noMetavisible}
              onClose={() => this.props.history.push("/")}
            >
              <div className="text-1-rodal">Web3 not found! MetaMask may not be installed or configured correctly!</div>
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