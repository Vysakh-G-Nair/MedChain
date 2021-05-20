import React from "react";
import "./viewRecordsStyling.scss";
import { Link, withRouter } from "react-router-dom";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import { ViewRecordsRow } from "../index.js";

const viewRecordsRowData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609b614b08bbf1aecdf4b534/img/rectangle-46@1x.svg",
  manjunathanM: "Fever",
  text1: "14/05/2021",
  name: "View",
  download: "Download",
  patientsOwnRecords: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
};

class ViewRecords extends React.Component {
  state = {
    address: "",
    // noOfRecords: -1,
    records: {},
    record2: {}
  };

  componentWillMount() {
    const { state } = this.props.location;
    this.getInstance(state);
  }

  async getInstance(state) {
    const patient = PatientCreator(state[0]);
    console.log("Deployed address: " + patient.options.address);
    console.log("Passed address: " + state[0]);
    console.log("No. of records: " + state[1]);
    const accounts = await web3.eth.getAccounts();
    const record = await patient.methods.view1Record(0).call({
      from: accounts[0],
    });
    const record2 = await patient.methods.view1Record(4).call({
      from: accounts[0],
    });

    // const noOfRecords = state[1];

    // const records = await Promise.all(
    //   Array(parseInt(noOfRecords))
    //   .fill()
    //   .map((element, index) => {
    //       return patient.methods.view1Record(index).call({
    //           from: accounts[0],
    //         });
    //   })
    // );

    // console.log(records);

    this.setState({
      address: state[0],
      // noOfRecords: state[1],
      records: record,
      record2: record2
    });
  }

  // downloadRecord(rec) {
  //   var FileSaver = require('file-saver');
  //   var blob = new Blob(rec, {type: "text/plain;charset=utf-8"});
  //   FileSaver.saveAs(blob, "hello world.txt");
  // }

  render() {
    const {
      patientsOwnRecords,
      yourRecords,
      doctersName,
      text2,
      takeAction,
      // manjunathanM,
      // text1,
      name,
      download,
      records
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <div
          className="patient-s-own-records screen"
          style={{ backgroundImage: `url(${patientsOwnRecords})` }}
        >
          <div className="your-records poppins-medium-white-20px">
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
/* <<<<<<< patient-interface
              <div className="flex-row-1-view-records">
                <div className="docname1 poppins-normal-baby-powder-18px">
                  {this.state.records[2]}
                </div>
                <div className="docether1 poppins-normal-baby-powder-18px">
                  {this.state.records[4]}
                </div>
                {/* <a href="javascript:SubmitForm('form2')"> */}
                <Link
                  to={{
                    pathname: "/record",
                    state: this.state.records,
                  }}
                >
                  <div className="grant-button">
                    <div className="overlap-group-1-view-records">
                      <div className="name-view-records poppins-medium-amethyst-15px">
                        {name}
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </Link>
                {/* <a onClick={this.downloadRecord(this.state.records)}> */}
                <div className="reject-button">
                  <div className="overlap-group-1-view-records">
                    <div className="download poppins-medium-alizarin-crimson-15px">
                      {download}
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div className="rectangle-95-view-records"></div>
              <div className="flex-row-1-view-records">
                <div className="docname1 poppins-normal-baby-powder-18px">
                  {this.state.record2[2]}
                </div>
                <div className="docether1 poppins-normal-baby-powder-18px">
                  {this.state.record2[4]}
                </div>
                {/* <a href="javascript:SubmitForm('form2')"> */}
                <Link
                  to={{
                    pathname: "/record",
                    state: this.state.record2,
                  }}
                >
                  <div className="grant-button">
                    <div className="overlap-group-1-view-records">
                      <div className="name-view-records poppins-medium-amethyst-15px">
                        {name}
                      </div>
                    </div>
                  </div>
                  {/* </a> */}
                </Link>
                {/* <a onClick={this.downloadRecord(this.state.records)}> */}
                <div className="reject-button">
                  <div className="overlap-group-1-view-records">
                    <div className="download poppins-medium-alizarin-crimson-15px">
                      {download}
                    </div>
                  </div>
                </div>
                {/* </a> */}
======= */
              <div className="RecordRow">
                <ViewRecordsRow {...viewRecordsRowData} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ViewRecords);
