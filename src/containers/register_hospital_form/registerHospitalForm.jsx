import React from 'react';
import './registerHospitalFormStyling.scss';
import { Link, withRouter } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'font-awesome/css/font-awesome.min.css';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const options = [
  'Hospital', 'Diagnostic center', 'Clinic'
];

const defaultOption = options[0];
  
class RegisterHospitalForm extends React.Component {

  state = {
    errorMessage: "",
    loading: false,
    hospitalName: "",
    category: "",
    lisenceNo: 0,
    location: "",
    visible: false
  };


  registerMedical = async (event) => {
    event.preventDefault();
    
    const{hospitalName,category,lisenceNo,location}=this.state;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerMedPro( hospitalName , "hospital" , location, lisenceNo)
        .send({
          from: accounts[0],
        });

        const doctorInstance = await factory.methods.loginDoctor().call({
          from: accounts[0]
        });
  
        this.props.history.push({
          pathname: "/hospital",
          state: doctorInstance
        });        
    } catch (error) {
      this.setState({ errorMessage: error.message , visible: true});
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  render () { 
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      searchNames,
      patientEthAddr,
      doctorEthAddr,
      inputType,
      inputPlaceholder,
      categoryName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      inputPlaceholder3,
      inputPlaceholder4,
      view,
    } = this.props;

    const { loading } = this.state;

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
          //action="form1"
          //method="post"
          //onSubmit={this.registerDoctor} error={!!this.state.errorMessage}
        >
          <div className="text-1-hospitalview poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-hospitalview" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-hospitaladd"
                name="2212"
                placeholder={inputPlaceholder}//hospital name
                type={inputType}
                value={this.state.hospitalName}
                onChange={event => this.setState({ hospitalName: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{categoryName}</div>
            <div className="overlap-group1-registerhosp" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            
              <div className="enter-record-name-registerhosp">
                <label>{inputPlaceholder2}
                <select category={this.state.value} onChange={event => this.setState({ category: event.target.value })}>
                  <option value="Hospital">Hospital</option>
                  <option value="Diagnostic center">Diagnostic center</option>
                  <option value="Clinic">Clinic</option>
                </select>
                </label>
              </div>
              
          
              {/* <Dropdown
                options={options}
                //onChange={this._onSelect}
                className="enter-record-name-registerhosp"
                name="2215"
                placeholder={inputPlaceholder2}//category
                value={this.state.category}
                onChange={event => this.setState({ category: event.target.value })}
                
              /> */}
            </div>
          </div>

          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{patientEthAddr}</div>
            <div className="overlap-group1-hospitalview" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder3}//lisencenumber
                type={inputType2}
                value={this.state.lisenceNo}
                onChange={event => this.setState({ lisenceNo: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{doctorEthAddr}</div>
            <div className="overlap-group1-hospitalview" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder4}//location
                type={inputType2}
                value={this.state.location}
                onChange={event => this.setState({ location: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              <a onClick={this.registerMedical} error={!!this.state.errorMessage} disabled={loading}>
                <div className="rectangle-94">
                {loading && (
                  <i
                    className="fa fa-refresh fa-2x fa-spin"
                    style={{ marginRight: "0px", color: '#B080FF', marginTop: "12px", marginLeft: "205px" }}
                  />
                )}
                {!loading && <div className="view-hospitalview">{view}</div>} 
                {loading && <div className="view-hospitalview">Wait...</div>} 
                </div>
              </a>
              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}>
                <div className="text-1-rodal">
                  {this.state.errorMessage}
                </div>
                <a onClick={() => this.setState({ visible: false })}>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Close</div>
                  </div>
                </a>
              </Rodal>
          </div>
        </div>  
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterHospitalForm);


        