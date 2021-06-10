import React from "react";
import "./registryStyling.scss";
import { withRouter } from "react-router-dom";
import PatientCreator from "../../ethereum/patient";
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
    records: [],
  };

  componentWillMount() {
    const { state } = this.props.location;
    this.getInstance(state);
  }

  async getInstance(state) {
    const patient = PatientCreator(state[0]);
    console.log("Deployed address: " + patient.options.address);
    const accounts = await web3.eth.getAccounts();

    const noOfRecords = state[1];
    console.log("No. of records: " + noOfRecords);

    const records = await Promise.all(
      Array(parseInt(noOfRecords))
        .fill()
        .map((element, index) => {
          return patient.methods.viewRecords(index).call({
            from: accounts[0],
          });
        })
    );

    this.setState({
      address: state[0],
      noOfRecords: state[1],
      records: records,
    });
  }

  renderRows() {
    return this.state.records.map((record, index) => {
      // console.log(record);
      return (
        <RegistryRow {...registryRowData} record={record} key={index} />
      );
    });
  }

  render() {
    const { patientsOwnRecords, yourRecords, doctersName, text2, takeAction } = this.props;

    const headerData = {
      inputPlaceholder: "Enter Ethereum Address",
      check: "Check",
      inputType: "/patient",
      logOut: "Log Out",
      address: this.state.address
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
                <div className="text-2-view-records poppins-medium-baby-powder-18px">
                  {text2}
                </div>
                <div className="take-action poppins-medium-baby-powder-18px">
                  {takeAction}
                </div>
              </div>
              <div className="flex-row-view-records">
                <div className="rectangle-5-view-records"></div>
                <div className="rectangle-89-view-records"></div>
                <div className="rectangle-90-view-records"></div>
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
