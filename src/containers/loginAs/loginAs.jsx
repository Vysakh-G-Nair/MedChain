import React from 'react';
import './loginAsStyling.scss';
import { Link, withRouter } from "react-router-dom";
import user_img from './user.png';
import hospital_img from './hospital.png';

  
class LoginAs extends React.Component {

  render() {
    const { register, registerAs, patient, place } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="register screen"
          style={{ backgroundImage: `url(${register})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group-register">
            <div className="register-as poppins-medium-white-20px">{registerAs}</div>
            <Link to="/patient">
              <div className="group-61-register">
                <div className="overlap-group2-register">
                  <img className="user-1-register" src={user_img} />
                  <div className="patient-register poppins-semi-bold-amethyst-20px">{patient}</div>
                </div>
              </div>
            </Link>
            <Link to="/hospital">
              <div className="group-62-register">
                <div className="overlap-group1-register">
                  <img className="hospital-2-register" src={hospital_img} />
                  <div className="place-register poppins-semi-bold-amethyst-20px">{place}</div>
                </div>
              </div>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginAs);