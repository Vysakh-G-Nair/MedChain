import React from 'react';
import './patientShareRecordStyling.scss';
import { Link, withRouter } from "react-router-dom";
import { Requests } from '../index.js' ;
import { Header } from "../index.js";

const headerData = {
  inputPlaceholder: "Enter Ethereum Address",
  check: "Check",
  inputType: "text",
  logOut: "Log Out"
};

const requestsData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  incomingRequests: "INCOMING REQUESTS",
  doctersName: "Person’s name",
  text2: "Record Name",
  takeAction: "Take Action",
  manjunathanM: "Manjunathan M",
  text1: "fever",
  name: "Grant",
  reject: "Reject",
};

  
class PatientShareRecord extends React.Component {
  render () { 
    const {
      patientShareRecord,
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
          className="patient-share-record screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className=""> 
            <Header {...headerData} />
          </div>
          <div className="text-1-patient-share-record poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-share-record poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-share-record" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-share-record"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required

              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{recordName}</div>
            <div className="overlap-group1-patient-share-record" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-share-record"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-patient-share-record">
              <Link >
                <div className="rectangle-94">
                <div className="view-patient-share-record">{view}</div>
                </div>
              </Link>
          </div>
        </div>  
        <div className="requests-comp"> <Requests {...requestsData} /> </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PatientShareRecord);


        