import React from 'react';
import './requestsRowStyling.scss';
import { withRouter } from "react-router-dom";


class RequestsRow extends React.Component {
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
        <div className="patient-s-own-records-requestsrow screen">
          
          <div className="requestsRow-requests">
            <div className="rectangle-95-requests"></div>
            <a href="javascript:SubmitForm('form2')">
              <div className="group-82-requests">
                <div className="overlap-group1-requests">
                  <div className="reject-requests poppins-medium-amethyst-15px">{reject}</div>
                </div>
              </div>
            </a>
            <a href="javascript:SubmitForm('form2')">
              <div className="group-83-requests">
                <div className="overlap-group1-requests">
                  <div className="name-requests poppins-medium-amethyst-15px">{name}</div>
                </div>
              </div>
            </a>
            <div className="ag1637-g poppins-normal-baby-powder-18px">{ag1637G}</div>
            <div className="text-1-requests poppins-normal-baby-powder-18px">{text1}</div>
            <div className="record-name1-requests poppins-normal-baby-powder-18px">{recordName1}</div>
          </div>
        </div>
      </div>
    );
  }
  }

  export default withRouter(RequestsRow);

  