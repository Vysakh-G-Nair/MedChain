import React from 'react';
import './homepageStyling.scss';
import { Link, withRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import logo_img from './logo.png';
  
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
            <div className="group-38">
              <img className="view-logo" src={logo_img} />
            </div>
            <div className="group-40">
              <div className="overlap-group1">
                <Link to='/loginAs'>
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