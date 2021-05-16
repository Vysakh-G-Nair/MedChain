import React from 'react';
import './registerStyling.scss';
import { withRouter } from "react-router-dom";
import user_img from './user.png';
import hospital_img from './hospital.png';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import 'font-awesome/css/font-awesome.min.css';
  
class Register extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    loading1: false,
    loading2: false,
  };

  fetchData = () => {
    this.setState({ loading1: true });

    setTimeout(() => {
      this.setState({ loading1: false });
    }, 2000);
  };

  registerPatient = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerPatient()
        .send({
          from: accounts[0],
        });

      const patientInstance = await factory.methods.loginPatient().call({
        from: accounts[0]
      });

      // console.log(patientInstance);
      this.props.history.push({
        pathname: "/patient",
        state: patientInstance
      }); 
    } catch (error) {
      this.setState({ errorMessage: error.message });
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  registerDoctor = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerDoctor()
        .send({
          from: accounts[0],
        });

        const doctorInstance = await factory.methods.loginDoctor().call({
          from: accounts[0]
        });
  
        // console.log(doctorInstance);
        this.props.history.push({
          pathname: "/hospital",
          state: doctorInstance
        });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  render() {
    const { register, registerAs, patient, place, externaluser } = this.props;
    const { loading, loading1, loading2 } = this.state;

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
            <div className="register-as-register poppins-medium-white-20px">{registerAs}</div>
            <a onClick={this.registerPatient} disabled={loading}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                {!loading &&  <img className="user-1-register" src={user_img} alt=""/>}
                  {loading && (
                    <i
                      className="fa fa-refresh fa-2x fa-spin"
                      style={{ marginRight: "0px", color: '#B080FF' }}
                    />
                  )}
                  {!loading && <div className="patient-register poppins-semi-bold-amethyst-20px">{patient}</div>}
                  {loading && <div className="patient-register poppins-semi-bold-amethyst-20px">Wait...</div>}
                </div>
              </div>
            </a>
            <a onClick={this.fetchData} disabled={loading1}>
              <div className="group-62-register">
                <div className="overlap-group1-register">
                {!loading1 && <img className="hospital-2-register" src={hospital_img} alt=""/>}
                  {loading1 && (
                    <i
                      className="fa fa-refresh fa-2x fa-spin"
                      style={{ marginRight: "0px", color: '#B080FF' }}
                    />
                  )}
                  {!loading1 && <div className="place-register poppins-semi-bold-amethyst-20px">{place}</div>}
                  {loading1 && <div className="place-register poppins-semi-bold-amethyst-20px">Wait...</div>}
                </div>
              </div>
            </a>
            <a onClick={this.registerPatient} disabled={loading2}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                {!loading2 && <img className="user-1-register" src={user_img} alt=""/>}
                  {loading2 && (
                    <i
                      className="fa fa-refresh fa-2x fa-spin"
                      style={{ marginRight: "0px", color: '#B080FF' }}
                    />
                  )}
                  {!loading2 && <div className="patient-register poppins-semi-bold-amethyst-20px">{externaluser}</div>}
                  {loading2 && <div className="patient-register poppins-semi-bold-amethyst-20px">Wait...</div>}
                </div>
              </div>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);