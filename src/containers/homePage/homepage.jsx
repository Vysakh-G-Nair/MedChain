import React from 'react';
import './homepageStyling.scss';
import { Link, withRouter } from "react-router-dom";
import logo_img from './logo.png';
  
class Landing extends React.Component {
  render() {
    const {
      landing,
      login2,
      text1,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <form
          className="landing screen"
          style={{ backgroundImage: `url(${landing})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group-landing">
            <div className="group-38">
              <img className="view-logo" src={logo_img} alt="" />
            </div>
            <div className="group-40">
              <div className="overlap-group1">
                <Link to='/loginAs'>
                  <div className="rectangle-49">
                  <div className="login">{login2}</div>
                  </div>
                </Link>
              </div>
            </div>
            <Link to = "/register" className="align-self-flex-center" >
              <p className="text-1-landing poppins-normal-white-16px">{text1}</p>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Landing);