import React from 'react';
//import { useMediaQuery } from 'react-responsive';
//import { MediaQueries } from './responsive';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing, Hospital, Register, HospitalView, HospitalAdd, Patient, PatientExternalView, PatientShareRecord, PatientGrant } from './containers/index' ;



const landingData = {
  landing: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  login: "LOGIN",
  userid: "UserID",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-51@2x.svg",
  inputType: "text",
  inputPlaceholder: "Enter Your UserID",
  password: "Password",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-51@2x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter Your Password",
  login2: "Login",
  text1: "Click here to register as a new user",
};



const hospitalData = {
  hospital: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  spanText: "Welcome Back, ",
  spanText2: "ABC Hospital!",
  viewRecord: "View Record",
  addRecord: "Add Record",
};



const hospitalViewData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO VIEW RECORD",
  text2: "Patient’s Ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter ethereum address",
  recordName: "Record name",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter record name",
  view: "View",
};

const hospitalAddData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO ADD RECORD",
  text2: "Patient’s name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter patient's name",
  recordName: "Record name",
  patientEthAddr: "Patient's ethereum address",
  doctorEthAddr: "Docter's ethereum address",
  symptoms: "Docter's note",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter record name",
  inputPlaceholder3: "Enter patient's ethereum address",
  inputPlaceholder4: "Enter docters's ethereum address",
  inputPlaceholder5: "Enter symptoms, ailments, medications etc.",
  view: "View",
};



const patientExternalViewData = {
  patientExternalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO VIEW EXTERNAL RECORD",
  text2: "Patient’s Ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter ethereum address",
  recordName: "Record name",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter record name",
  view: "View",
};

const patientShareRecordData = {
  patientShareRecord: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO SHARE RECORD",
  text2: "Recipient’s ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter recipient's ethereum address",
  recordName: "Record name",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter record name",
  view: "View",
};

const patientGrantData = {
  patientShareRecord: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO GRANT PERMISSION",
  text2: "Docter’s ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter docter's ethereum address",
  view: "View",
};

const patientData = {
  patient: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "Welcome Back, ",
  text1sub: "Vysakh G Nair!",
  view4: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60926b3578d99f0175dcf352/img/view-4@2x.png",
  viewYourRecords: <>View Your<br />Records</>,
  name: <>Grant Write<br />Access</>,
  shareRecord: "Share Record",
  text2: <>View External<br />Record</>,
};

const registerData = {
  register: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  registerAs: "REGISTER AS",
  patient: "Patient",
  place: "Hospital",
};


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Landing {...landingData} />} />
            <Route path="/register" exact component={() => <Register {...registerData} />} />
            <Route path="/patient" exact component={() => <Patient {...patientData} />} />
            <Route path="/hospital" exact component={() => <Hospital {...hospitalData} />} />
            <Route path="/hospitalview" exact component={() => <HospitalView {...hospitalViewData} />} />
            <Route path="/hospitaladd" exact component={() => <HospitalAdd {...hospitalAddData} />} />
            <Route path="/patientshare" exact component={() => <PatientShareRecord {...patientShareRecordData} />} />
            <Route path="/patientexternalview" exact component={() => <PatientExternalView {...patientExternalViewData} />} />
            <Route path="/patientgrant" exact component={() => <PatientGrant {...patientGrantData} />} />
          </Switch>
        </Router>
      </div>
    );
  }
} 

export default App;

