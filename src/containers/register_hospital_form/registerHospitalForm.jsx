import React from "react";
import "./registerHospitalFormStyling.scss";
import { withRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Select from "react-select";
import { Header } from "../index.js";

const headerData = {
  inputPlaceholder: "Enter Ethereum Address",
  check: "Check",
  inputType: "text",
  logOut: "Log Out"
};

const options = [
  { value: "Hospital", label: "Hospital" },
  { value: "Diagnostic center", label: "Diagnostic center" },
  { value: "Clinic", label: "Clinic" },
];

class RegisterHospitalForm extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    hospitalName: "",
    category: "",
    lisenceNo: "",
    location: "",
    visible: false,
  };

  registerMedical = async (event) => {
    event.preventDefault();

    const { hospitalName, category, lisenceNo, location } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerMedPro(hospitalName, category, location, lisenceNo)
        .send({
          from: accounts[0],
        });

      const medProDeployedAddr = await factory.methods.loginMedPro().call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/hospital",
        state: medProDeployedAddr,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  styles = {
    container: (provided, state) => ({
      ...provided,
      backgroundColor: "#2D3135",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#7F8489",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#2D3135",
      borderColor: "#2D3135",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? "#2D3135" : "#2D3135",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#2D3135" : "#2D3135"
      }
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "#7F8489",
      backgroundColor: "#2D3135",
      backgroundColor: state.isFocused ? "white" : "#2D3135",
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#7F8489",
      fontSize: state.selectProps.myFontSize
    }),
    menuList: (provided, state) => ({
      ...provided,
      padding: "0px",
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: 0,
      hyphens: "auto",
      marginTop: 0,
      textAlign: "left",
      wordWrap: "break-word"
    })
  };

  render() {
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      // searchNames,
      patientEthAddr,
      doctorEthAddr,
      inputType,
      inputPlaceholder,
      categoryName,
      overlapGroup1,
      inputType2,
      // inputPlaceholder2,
      inputPlaceholder3,
      inputPlaceholder4,
      view,
    } = this.props;

    const { loading, category } = this.state;

    return (
      <div className="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
        >
          <div className="header-hospitaladd"> 
            <Header {...headerData} />
          </div>
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
                placeholder={inputPlaceholder} //hospital name
                type={inputType}
                value={this.state.hospitalName}
                onChange={(event) =>
                  this.setState({ hospitalName: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {categoryName}
            </div>
            <div
              className="overlap-group1-registerhosp-category"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <div className="enter-record-name-registerhosp">
                <Select
                  value={category != null ? category.value : category}
                  onChange={(e) => {
                    this.setState({ category: e.value });
                  }}
                  options={options}
                  styles={this.styles}
                  required
                />
                {/* {console.log(this.state.category)} */}
              </div>
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
                placeholder={inputPlaceholder3} //lisencenumber
                type={inputType2}
                value={this.state.lisenceNo}
                onChange={(event) =>
                  this.setState({ lisenceNo: event.target.value })
                }
                required
              />
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
                placeholder={inputPlaceholder4} //location
                type={inputType2}
                value={this.state.location}
                onChange={(event) =>
                  this.setState({ location: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              {/* eslint-disable-next-line */}
              <a
                onClick={this.registerMedical}
                error={!!this.state.errorMessage}
                disabled={loading}
              >
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
                {/* eslint-disable-next-line */}
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
