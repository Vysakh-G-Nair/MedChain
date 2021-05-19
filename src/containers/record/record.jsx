import React from "react";
import "./recordStyling.scss";
import { Link, withRouter } from "react-router-dom";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import { Details } from "../index.js";

class Record extends React.Component {
  // state = {
  //     recordID: 0,
  //     creatorEth: '',
  //     recordName: '',
  //     docName: '',
  //     recDate: '',
  //     docNote: '',
  //   };

  //   componentWillMount() {
  //     const { state } = this.props.location;
  //     this.setState({
  //         recordID: state[0],
  //         creatorEth: state[1],
  //         recordName: state[2],
  //         docName: state[3],
  //         recDate: state[4],
  //         docNote: state[5],
  //     })
  //   }

  render() {
    const {
      recordID,
      creatorEth,
      recordName,
      docName,
      recDate,
      docNote,
      //   recordIDVal,
      //   creatorEthVal,
      //   recordNameVal,
      //   docNameVal,
      //   recDateVal,
      //   docNoteVal,
      patientShareRecord,
    } = this.props;

    const { state } = this.props.location;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-share-record screen"
          style={{
            backgroundImage: `url(${patientShareRecord})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="boxposition">
            <div className="overlap-group-record-record">
              <p className="text-1-record-record poppins-normal-white-16px">
                <span className="span-record poppins-normal-white-16px">
                  {recordID}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[0]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {creatorEth}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[1]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {recordName}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[2]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {docName}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[3]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {recDate}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[4]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {docNote}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {state[5]}
                  <br />
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Record);