import React from 'react';
import './homepageMobileStyling.scss';
import { Link, withRouter } from "react-router-dom";

function LandingMobile(props) {
  const {
    landingMobile,
    login,
    userid,
    overlapGroup3,
    inputType,
    inputPlaceholder,
    password,
    overlapGroup2,
    inputType2,
    inputPlaceholder2,
    login2,
    text2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form
        className="landing-mobile screen"
        style={{ backgroundImage: `url(${landingMobile})` }}
        name="form2"
        action="form2"
        method="post"
      >
        <div className="overlap-groupmobile">
          <div className="login-1">{login}</div>
          <div className="group-38">
            <div className="user-id poppins-normal-white-16px">{userid}</div>
            <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <input
                className="enter-your-user-id"
                name="1048"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
          <div className="group-39">
            <div className="password poppins-normal-white-16px">{password}</div>
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-your-password"
                name="10410"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-40">
            <div className="overlap-group1">
              <Link to="/hospital">
                <div className="rectangle-49mobile smart-layers-pointers"></div>
                <div className="loginmobile">{login2}</div>
              </Link>
            </div>
          </div>
          <Link>
            <p className="text-1">{text2}</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default withRouter(LandingMobile);