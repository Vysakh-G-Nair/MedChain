import React from "react";
import "./registerPatientFormStyling.scss";
import { withRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Select from "react-select"
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

const genderoptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

class RegisterPatientForm extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    patientName: "",
    age: undefined,
    gender: null,
    bloodGroup: "",
    visible: false,
  };

  registerPatient = async (event) => {
    event.preventDefault();

    const { patientName, age, gender, bloodGroup } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerPatient(
          patientName,
          age,
          gender,
          bloodGroup,
          false,
          "0x0000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000"
        )
        .send({
          from: accounts[0],
        });

      const patientInstance = await factory.methods.loginPatient().call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/patient",
        state: patientInstance,
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
              className="overlap-group1-registerpatien"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <Select
                value={(gender != null)? gender.value: gender}
                onChange={(e) => {
                  this.setState({ gender: e.value });
                }}
                options={genderoptions}
                required
              />
              {/* {console.log(this.state.gender)} */}
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

export default withRouter(RegisterPatientForm);
