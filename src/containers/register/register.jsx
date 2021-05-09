import React from 'react';
import './registerStyling.scss';
import { Link, withRouter } from "react-router-dom";
import user_img from './user.png';
import hospital_img from './hospital.png';
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
  
class Register extends React.Component {
  state = {
    errrorMessage: "",
    loading: false
  };

  onClick = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errrorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerPatient()
        .send({
          from: accounts[0],
        });

      // Router.pushRoute('/');
    } catch (error) {
      this.setState({ errrorMessage: error.message });
    }

    this.setState({ loading: false });
  };

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

export default withRouter(Register);