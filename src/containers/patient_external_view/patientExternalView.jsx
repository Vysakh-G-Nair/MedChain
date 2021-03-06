import React from 'react';
import './patientExternalViewStyling.scss';
import { Link, withRouter } from "react-router-dom";
import { Header } from "../index.js";

const headerData = {
  inputPlaceholder: "Enter Ethereum Address",
  check: "Check",
  inputType: "text",
  logOut: "Log Out"
};

  
class PatientExternalView extends React.Component {
  render () { 
    const {
      patientExternalView,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      recordName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      view,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-external-view screen"
          style={{ backgroundImage: `url(${patientExternalView})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className=""> 
            <Header {...headerData} />
          </div>
          <div className="text-1-patient-external-view poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-external-view poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-external-view" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-externalview"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{recordName}</div>
            <div className="overlap-group1-patient-external-view" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-externalview"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-patient-external-view">
              <Link >
                <div className="rectangle-94">
                <div className="view-patient-external-view">{view}</div>
                </div>
              </Link>
          </div>
        </div>  
        </form>
      </div>
    );
  }
}

export default withRouter(PatientExternalView);


        