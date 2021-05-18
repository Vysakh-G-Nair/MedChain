import React from 'react';
import './patientGrantStyling.scss';
import { Link, withRouter } from "react-router-dom";
import { Requests } from '../index.js' ;
import PatientCreator from '../../ethereum/patient';
import web3 from "../../ethereum/web3";

const requestsData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  incomingRequests: "INCOMING REQUESTS",
  doctersName: "Docter’s name",
  text2: "Docter’s ethereum address",
  takeAction: "Take Action",
  manjunathanM: "Manjunathan M",
  text1: "0xDC25EF3F5B8A186998338A2",
  name: "Grant",
  reject: "Reject",
};

class PatientGrant extends React.Component {
  state = {
    address: "",
    addressOwner: '',
    name: ''
}

componentWillMount() {
    const { state } = this.props.location;
    this.getPatSummary(state)
}

async getPatSummary(state) {
    const patient = PatientCreator(state);
    console.log("Deployed address: " + patient.options.address);

    const accounts = await web3.eth.getAccounts();

    const summary = await patient.methods.getPatSummary().call({
        from: accounts[0]
    });

    this.setState({
        address: state,
        addressOwner: summary[0],
        name : summary[1],
        age: summary[2],
        gender: summary[3],
        bloodGroup: summary[4],
        noOfRecords: summary[5]
    });
  }

  render () { 
    const {
      patientShareRecord,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      view,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-grant screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-patient-grant poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-grant poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-grant" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-grant"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
      
          <div className="group-54">
            <div className="overlap-group-patient-grant">
              <Link >
                <div className="rectangle-94">
                <div className="view-patient-grant">{view}</div>
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

export default withRouter(PatientGrant);


        