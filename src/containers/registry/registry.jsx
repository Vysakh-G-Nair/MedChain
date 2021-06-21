import React from "react";
import "./registryStyling.scss";
import { withRouter } from "react-router-dom";
import MedProCreator from "../../ethereum/medicalpro";
import web3 from "../../ethereum/web3";
import { RegistryRow, Header} from "../index.js";

const registryRowData = {
  overlapGroup:
    "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  name: "Add",
  download: "",
  patientsOwnRecords:
    "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
};

class Registry extends React.Component {
  state = {
    address: "",
    patients: []
  };

  componentWillMount() {
    const { state } = this.props.location;
    this.getInstance(state);
  }

  async getInstance(state) {
    const medPro = MedProCreator(state[0]);
    console.log("Deployed address: " + medPro.options.address);
    const accounts = await web3.eth.getAccounts();

    const noOfPatients = state[1];
    console.log("No. of patients: " + noOfPatients);

    const patients = await Promise.all(
      Array(parseInt(noOfPatients))
        .fill()
        .map((element, index) => {
          return medPro.methods.regPatient(index).call({
            from: accounts[0],
          });
        })
    );

    this.setState({
      address: state[0],
      patients: patients
    });
  }

  renderRows() {
    return this.state.patients.map((patient, index) => {
      // console.log(record);
      return (
        <RegistryRow {...registryRowData} patient={patient} key={index} address={this.state.address} />
      );
    });
  }

  render() {
    const { patientsOwnRecords, yourRecords, doctersName, text2, takeAction } = this.props;

   
      const headerData = { 
        inputPlaceholder: "Enter Ethereum Address",
          check: "Check",
          logoLink: "/hospital",
          inputType: "text",
          logOut: "Log Out",
          address:this.props.location.state[0]
        };
   

    return (
      <div class="container-center-horizontal">
        <div
          className="patient-s-own-records screen"
          style={{ backgroundImage: `url(${patientsOwnRecords})` }}
        >
          <div className="header-viewrecords"> 
            <Header {...headerData} />
          </div>
          <div className="your-records-registry poppins-medium-white-20px">
            {yourRecords}
          </div>
          <form
            className="view-records screen"
            name="form2"
            action="form2"
            method="post"
          >
            <div className="overlap-group-view-records">
              <div className="flex-row-2-view-records">
                <div className="docters-name-view-records poppins-medium-baby-powder-18px">
                  {doctersName}
                </div>
                <div className="text-2-view-records-registry poppins-medium-baby-powder-18px">
                  {text2}
                </div>
                <div className="take-action-registry poppins-medium-baby-powder-18px">
                  {takeAction}
                </div>
              </div>
              <div className="flex-row-view-records">
                <div className="rectangle-5-view-records-registry"></div>
                <div className="rectangle-89-view-records-registry"></div>
                <div className="rectangle-90-view-records-registry"></div>
              </div>
              <div className="RecordRow">{this.renderRows()}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Registry);
