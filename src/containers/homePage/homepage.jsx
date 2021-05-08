import React from 'react';
import './homepageStyling.scss';
import { Link, withRouter } from "react-router-dom";
import { render } from '@testing-library/react';

  
class Landing extends React.Component {
  render() {
    const {
      landing,
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
      text1,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="landing screen"
          style={{ backgroundImage: `url(${landing})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group">
            <div className="login-1">{login}</div>
            <div className="group-38">
              <div className="user-id poppins-normal-white-18px">{userid}</div>
              <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <input
                  className="enter-your-user-id"
                  name="8598"
                  placeholder={inputPlaceholder}
                  type={inputType}
                  required
                />
              </div>
            </div>
            <div className="group-39">
              <div className="password poppins-normal-white-18px">{password}</div>
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <input
                  className="enter-your-password"
                  name="8601"
                  placeholder={inputPlaceholder2}
                  type={inputType2}
                  required
                />
              </div>
            </div>
            <div className="group-40">
              <div className="overlap-group1">
                <Link to="/register">
                  <div className="rectangle-49 smart-layers-pointers"></div>
                  <div className="login">{login2}</div>
                </Link>
              </div>
            </div>
            <Link className="align-self-flex-center" >
              <p className="text-1 poppins-normal-white-16px">{text1}</p>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Landing);