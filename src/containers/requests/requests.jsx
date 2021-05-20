import React from 'react';
import './requestsStyling.scss';
import { withRouter } from "react-router-dom";
import { RequestsRow } from "../index.js";

const requestsRowData = {
  patientSOwnRecords: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/60891dcbaf87ec1bbe8d0827/img/rectangle-84@1x.svg",
  rectangle88: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609e042164fa84b611973eb3/img/rectangle-88@1x.svg",
  reject: "Reject",
  name: "Grant",
  ag1637G: "AG1637G",
  text1: "AFSGCBFGE215QESDWRG415DFERSTCH1534ERDFSH12",
  recordName1: "Record name1",
};


class Requests extends React.Component {
  render() {
    const {
      patientSOwnRecords,
      requests,
      rectangle88,
      reject,
      name,
      ag1637G,
      text1,
      recordName1,
      takeAction,
      recordId,
      text2,
      doctersName,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-s-own-records-requests screen"
          style={{ backgroundImage: `url(${patientSOwnRecords})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="requests poppins-medium-white-20px">{requests}</div>
          <div className="overlap-group-requests">
            <img className="rectangle-88-requests" src={rectangle88} />
            <div className="rectangle-90-requests"></div>
            <div className="take-action-requests poppins-medium-baby-powder-18px">{takeAction}</div>
            <div className="rectangle-89-requests"></div>
            <div className="record-id-requests poppins-medium-baby-powder-18px">{recordId}</div>
            <div className="rectangle-96-requests"></div>
            <div className="text-2-requests poppins-medium-baby-powder-18px">{text2}</div>
            <div className="rectangle-5-requests"></div>
            <div className="docters-name-requests poppins-medium-baby-powder-18px">{doctersName}</div>
            <div className="RequestsRow">
                <RequestsRow {...requestsRowData} />
            </div>
          </div>
        </form>
      </div>
    );
  }
  }


  export default withRouter(Requests);

  