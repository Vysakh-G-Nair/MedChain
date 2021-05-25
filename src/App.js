import React from 'react';
//import { useMediaQuery } from 'react-responsive';
//import { MediaQueries } from './responsive';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Record, ViewRecordsRow, HospitalAddCheck, RegisterPatientHospital, External, Requests, ExternalView, ViewRecords, Landing, Hospital, Register, RegisterHospitalForm, RegisterExternalForm, RegisterPatientForm, LoginAs, HospitalView, HospitalAdd, Patient, PatientExternalView, PatientShareRecord, PatientGrant } from './containers/index' ;



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
  viewRecord: "View Record",
  addRecord: "Add Record",
  regPatient: "Reg Patient",
};

const externalData = {
  hospital: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  viewRecord: "View Record",
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

const externalViewData = {
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
  text2: "Doctor’s name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter Doctor's name",
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
  inputPlaceholder6: "Choose todays date",
  entryDate: "Date",
  view: "Add",
};

const registerHospitalFormData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO REGISTER HOSPITAL",
  text2: "Name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter name",
  categoryName: "Category",
  patientEthAddr: "License number",
  doctorEthAddr: "Location",
  symptoms: "Docter's note",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Select your category",
  inputPlaceholder3: "Enter your license number",
  inputPlaceholder4: "Enter your location",
  view: "Register",
};

const registerExternalFormData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO REGISTER EXTERNAL USER",
  text2: "Name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter name",
  recordName: "Designation",
  symptoms: "Docter's note",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter your designation",
  view: "Register",
};

const registerPatientFormData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO REGISTER PATIENT",
  text2: "Patient’s name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter patient's name",
  recordName: "Patient's age",
  patientEthAddr: "Patient's gender",
  doctorEthAddr: "Patient's blood group",
  symptoms: "Docter's note",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter your age",
  inputPlaceholder3: "Enter your gender",
  inputPlaceholder4: "Enter your blood group",
  view: "Register",
};

const registerPatientHospitalData = {
  hospitalView: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO REGISTER PATIENT",
  text2: "Patient’s name",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/6094db5c8169e97a53cdd8e2/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter patient's name",
  recordName: "Patient's age",
  patientGender: "Patient's gender",
  doctorEthAddr: "Patient's blood group",
  symptoms: "Docter's note",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter your age",
  inputPlaceholder3: "Enter your gender",
  inputPlaceholder4: "Enter your blood group",
  view: "Register",
  patientEthAddr: "Patient's Ethereum Address",
  patientEthAddrPH: "Enter patient's ethereum address",
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
  view: "Share Record",
};

const patientGrantData = {
  patientShareRecord: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "ENTER DETAILS TO GRANT PERMISSION",
  text2: "Docter’s ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter docter's ethereum address",
  view: "Grant Permission",
};

const patientData = {
  patient: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  //text1: "Welcome Back, ",
  //text1sub: "Vysakh G Nair!",
  view4: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60926b3578d99f0175dcf352/img/view-4@2x.png",
  viewYourRecords: <>View Your<br />Records</>,
  name: <>Grant Write<br />Access</>,
  shareRecord: "Requests",
  text2: "<>View External<br />Record</>",
};

const registerData = {
  register: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  registerAs: "REGISTER AS",
  patient: "Patient",
  place: "Hospital",
  externaluser: "External",
};

const loginAsData = {
  register: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  registerAs: "LOGIN AS",
  patient: "Patient",
  place: "Medical Pro",
  externaluser: "External",
};


const viewRecordsData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  incomingRequests: "INCOMING REQUESTS",
  doctersName: "Record name",
  text2: "Date created",
  takeAction: "Take Action",
  patientsOwnRecords: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  yourRecords: "YOUR RECORDS",
};

const viewRecordsRowData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  manjunathanM: "Fever",
  text1: "14/05/2021",
  name: "View",
  download: "Download",
  patientsOwnRecords: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
};

const recordData = {
  patientShareRecord: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  recordID: "Record ID: ",
  // recordIDVal: <> A123F<br /></>,
  creatorEth: "Creator Ethereum Address: ",
  // creatorEthVal: <>ABDDJ1735329299DHSSBBCGET35478292<br /></>,
  recordName: "Record Name: ",
  // recordNameVal: <>Fever<br /></>,
  docName: "Doctor Name: ",
  docNameVal: <>Manjunathan M<br /></>,
  recDate: "Date Created: ",
  recDateVal: <>25 April 2021<br /></>,
  docNote: "Doctor's Note: ",
  // docNoteVal: <>Mild fever only. Paracetamol 650mg 10nos<br /></>,
};

const requestsData = {
  patientSOwnRecords: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  requests: "REQUESTS",
  rectangle88: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609e042164fa84b611973eb3/img/rectangle-88@1x.svg",
  takeAction: "Take action",
  recordId: "Create / View (Record ID)",
  text2: "Docter’s ethereum address",
  doctersName: "Docter’s name",
};

const hospitalAddCheckData = {
  patientShareRecord: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  text1: "CHECK ADD PERMISSION",
  text2: "Patient’s ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51@1x.svg",
  inputType: "text",
  inputPlaceholder: "Enter patient's ethereum address",
  view: "Check Permission",
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Landing {...landingData} />} />
            <Route path="/register" exact component={() => <Register {...registerData} />} />
            <Route path="/registerhospitalform" exact component={() => <RegisterHospitalForm {...registerHospitalFormData} />} />
            <Route path="/registerexternalform" exact component={() => <RegisterExternalForm {...registerExternalFormData} />} />
            <Route path="/registerpatientform" exact component={() => <RegisterPatientForm {...registerPatientFormData} />} />
            <Route path="/registerpatienthospital" exact component={() => <RegisterPatientHospital {...registerPatientHospitalData} />} />
            <Route path="/loginas" exact component={() => <LoginAs {...loginAsData} />} />
            <Route path="/patient" exact component={() => <Patient {...patientData} />} />
            <Route path="/hospital" exact component={() => <Hospital {...hospitalData} />} />
            <Route path="/hospitalview" exact component={() => <HospitalView {...hospitalViewData} />} />
            <Route path="/hospitaladd" exact component={() => <HospitalAdd {...hospitalAddData} />} />
            <Route path="/hospitaladdcheck" exact component={() => <HospitalAddCheck {...hospitalAddCheckData} />} />
            <Route path="/patientshare" exact component={() => <PatientShareRecord {...patientShareRecordData} />} />
            <Route path="/patientexternalview" exact component={() => <PatientExternalView {...patientExternalViewData} />} />
            <Route path="/patientgrant" exact component={() => <PatientGrant {...patientGrantData} />} />
            <Route path="/viewrecords" exact component={() => <ViewRecords {...viewRecordsData} />} />
            <Route path="/external" exact component={() => <External {...externalData} />} />
            <Route path="/externalview" exact component={() => <ExternalView {...externalViewData} />} />
            <Route path="/record" exact component={() => <Record {...recordData} />} />
            <Route path="/requests" exact component={() => <Requests {...requestsData} />} />
          </Switch>
        </Router>
      </div>
    );
  }
} 

export default App;

