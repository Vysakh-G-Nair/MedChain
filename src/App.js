import React from 'react';
//import { useMediaQuery } from 'react-responsive';
//import { MediaQueries } from './responsive';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingMobile, Landing, Hospital, HospitalMobile, HospitalView, HospitalViewMobile } from './containers/index' ;



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

const landingMobileData = {
  landingMobile: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84-1@1x.svg",
  login: "LOGIN",
  userid: "UserID",
  overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-85@2x.svg",
  inputType: "text",
  inputPlaceholder: "Enter Your UserID",
  password: "Password",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-85@2x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter Your Password",
  login2: "Login",
  text2: <>Click here to register <br />as a new user</>,
};

const hospitalData = {
  hospital: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  spanText: "Welcome Back, ",
  spanText2: "ABC Hospital!",
  viewRecord: "View Record",
  addRecord: "Add Record",
};

const hospitalMobileData = {
  hospitalMobile: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84-1@1x.svg",
  spanText: <>Welcome Back, <br /></>,
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

const hospitalViewMobileData = {
  hospitalViewMobile: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84-1@1x.svg",
  text3: <>ENTER DETAILS TO <br />VIEW RECORD</>,
  text4: "Patient’s Ethereum address",
  overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51-2@2x.svg",
  inputType: "text",
  inputPlaceholder: "Enter ethereum address",
  recordName: "Record name",
  overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/608d3aad710ab4fa079fc6c8/img/rectangle-51-2@2x.svg",
  inputType2: "text",
  inputPlaceholder2: "Enter record name",
  view: "View",
};


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Landing {...landingData} />} />
            <Route path="/hospital" exact component={() => <Hospital {...hospitalData} />} />
            <Route path="/hospitalview" exact component={() => <HospitalView {...hospitalViewData} />} />
          </Switch>
        </Router>
      </div>
    );
  }
} 

export default App;

