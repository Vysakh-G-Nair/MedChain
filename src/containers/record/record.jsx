import React from "react";
import "./recordStyling.scss";
import { Link, withRouter } from "react-router-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Header } from "../index.js";

const headerData = {
  inputPlaceholder: "Enter Ethereum Address",
  check: "Check",
  logoLink: "back",
  logOut: "Log Out",
};

class Record extends React.Component {
  render() {
    const {
      recordID,
      creatorEth,
      recordName,
      docName,
      recDate,
      docNote,
      patientShareRecord,
      attachFile,
    } = this.props;

    let record;

    if (typeof this.props.location.state === "undefined") {
      record = [0, 0, 0, 0, 0, 0];
    } else {
      const { state } = this.props.location;
      record = state;
      // console.log("result", record);
    }

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-share-record screen"
          style={{
            backgroundImage: `url(${patientShareRecord})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="header-record">
            <Header {...headerData} />
          </div>

          <div className="boxposition">
            <div className="overlap-group-record-record">
              <p className="text-1-record-record poppins-normal-white-16px">
                <span className="span-record poppins-normal-white-16px">
                  {recordID}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[0]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {creatorEth}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[1]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {recordName}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[2]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {docName}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[3]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {recDate}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[4]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {docNote}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  {record[5]}
                  <br />
                </span>
                <span className="span-record poppins-normal-white-16px">
                  {attachFile}
                </span>
                <span className="span-1-record poppins-medium-white-18px">
                  <a
                    href={"https://ipfs.infura.io/ipfs/" + record[6]}
                    style={{ color: "#b080ff" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View File
                  </a>
                  <br />
                </span>
              </p>
            </div>

            <Rodal visible={record[1] === 0}>
              <div className="text-1-rodal">No record found!</div>
              <Link to="/loginAs">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to Login Page</div>
                </div>
              </Link>
            </Rodal>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Record);
