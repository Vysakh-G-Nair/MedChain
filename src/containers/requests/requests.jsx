import React from 'react';
import './requestsStyling.scss';
import { withRouter } from "react-router-dom";


class Requests extends React.Component {
    render() {
      const {
        incomingRequests,
        personName,
        personEth,
        takeAction,
        recordID,
        name1,
        eth1,
        grant,
        recID1,
        reject,
        patientShareRecord,
      } = this.props;
  
      return (
        <div class="container-center-horizontal">
          <form
            className="requests screen"
            style={{ backgroundImage: `url(${patientShareRecord})`, backgroundSize: '100% 100%' }}>
            <div className="overlap-group-requests" >
              <div className="incoming-requests poppins-semi-bold-white-20px">{incomingRequests}</div>
              <div className="flex-row-2-requests">
                <div className="docters-name-requests poppins-medium-baby-powder-18px">{personName}</div>
                <div className="doc-eth-requests poppins-medium-baby-powder-18px">{personEth}</div>
                <div className="text-2-requests poppins-medium-baby-powder-18px">{recordID}</div>
                <div className="take-action-requests poppins-medium-baby-powder-18px">{takeAction}</div>
              </div>
              <div className="flex-row-requests">
                <div className="rectangle-5-requests"></div>
                <div className="rectangle-89-requests"></div>
                <div className="rectangle-90-requests"></div>
              </div>
              <div className="flex-row-1-requests">
                <div className="docname1-requests poppins-normal-baby-powder-18px">{name1}</div>
                <div className="docether1-requests poppins-normal-baby-powder-18px">{eth1}</div>
                <div className="recID1-requests poppins-normal-baby-powder-18px">{recID1}</div>
                <a href="javascript:SubmitForm('form2')">
                  <div className="grant-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="name-requests poppins-medium-amethyst-15px">{grant}</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:SubmitForm('form2')">
                  <div className="reject-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="reject-requests poppins-medium-alizarin-crimson-15px">{reject}</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="rectangle-95-requests"></div>
            </div>
          </form>
        </div>
      );
    }
  }

  export default withRouter(Requests);

  