import React from "react";
import "./registerPatientHospitalStyling.scss";
import { Link, withRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import HospitalCreator from '../../ethereum/medicalpro';
import Select from "react-select"

const genderoptions = [ 
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" }
];

class RegisterPatientHospital extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    patientName: "",
    age: 0,
    patientAddr:"",
    gender: null,
    bloodGroup: "",
    visible: false,
    state1:""
  }

  componentWillMount() {
    const { state } = this.props.location;
    this.setState({state1:state});
}

registerPatient = async (event) => {
  event.preventDefault();
  const { patientName,age,patientAddr,gender, bloodGroup } = this.state;
  this.setState({ loading: true, errorMessage: "" });   
  try {
      const accounts = await web3.eth.getAccounts();
      const hospital = HospitalCreator(this.state.state1);
      console.log("hospital"+hospital.options.address);
      await hospital.methods
        .createPatient(this.state.patientAddr, this.state.patientName, this.state.age,this.state.gender, this.state.bloodGroup).send({from: accounts[0]});
        this.props.history.push({
          pathname: "/hospital",
          state: this.state.state1
        }); 
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }

  this.setState({ loading: false });
  };


  render() {
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      patientEthAddr,
      doctorEthAddr,
      patientGender,
      patientEthAddrPH,
      inputType,
      inputPlaceholder,
      recordName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      inputPlaceholder3,
      inputPlaceholder4,
      view,
    } = this.props;

    const { loading, gender } = this.state;

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
        >
          <div className="text-1-hospitalview poppins-medium-white-20px">
            {text1}
          </div>
          <div className="group-52">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">
              {text2}
            </div>
            <div
              className="overlap-group2-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <input
                className="enter-ethereum-address-hospitaladd"
                name="2212"
                placeholder={inputPlaceholder} //PATIENTS NAME
                type={inputType}
                value={this.state.patientName}
                onChange={(event) =>
                  this.setState({ patientName: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {recordName}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder2} //AGE
                type={inputType2}
                value={this.state.age}
                onChange={(event) => this.setState({ age: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {patientEthAddr}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={patientEthAddrPH}
                type={inputType2}
                value={this.state.patientAddr}
                onChange={(event) => this.setState({ patientAddr: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {patientGender}
            </div>
            <div
              className="overlap-group1-registerpatien"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <div className="enter-record-name-registerhosp">
              <Select
                value={(gender != null)? gender.value: gender}
                onChange={(e) => {
                  this.setState({ gender: e.value });
                }}
                options={genderoptions}
                required
              />
              </div>
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {doctorEthAddr}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder4} //BLOODGROUP
                type={inputType2}
                value={this.state.bloodGroup}
                onChange={(event) =>
                  this.setState({ bloodGroup: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              <a onClick={this.registerPatient}>
                <div className="rectangle-94">
                  {loading && (
                    <i
                      className="fa fa-refresh fa-2x fa-spin"
                      style={{
                        marginRight: "0px",
                        color: "#B080FF",
                        marginTop: "12px",
                        marginLeft: "205px",
                      }}
                    />
                  )}
                  {!loading && <div className="view-hospitalview">{view}</div>}
                  {loading && <div className="view-hospitalview">Wait...</div>}
                </div>
              </a>
              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>
                {/* <a onClick={() => this.setState({ visible: false })}>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Close</div>
                  </div>
                </a> */}
              </Rodal>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterPatientHospital);
