import React from 'react';
import './requestsStyling.scss';
import { withRouter } from "react-router-dom";

class Requests extends React.Component {
    render() {
      const {
        incomingRequests,
        doctersName,
        text2,
        takeAction,
        manjunathanM,
        text1,
        name,
        reject,
      } = this.props;
  
      return (
        <div class="container-center-horizontal">
          <form className="requests screen" name="form2" action="form2" method="post">
            <div className="overlap-group-requests" >
              <div className="incoming-requests poppins-semi-bold-white-20px">{incomingRequests}</div>
              <div className="flex-row-2-requests">
                <div className="docters-name-requests poppins-medium-baby-powder-18px">{doctersName}</div>
                <div className="text-2-requests poppins-medium-baby-powder-18px">{text2}</div>
                <div className="take-action poppins-medium-baby-powder-18px">{takeAction}</div>
              </div>
              <div className="flex-row-requests">
                <div className="rectangle-5-requests"></div>
                <div className="rectangle-89-requests"></div>
                <div className="rectangle-90-requests"></div>
              </div>
              <div className="flex-row-1-requests">
                <div className="docname1 poppins-normal-baby-powder-18px">{manjunathanM}</div>
                <div className="docether1 poppins-normal-baby-powder-18px">{text1}</div>
                <a href="javascript:SubmitForm('form2')">
                  <div className="grant-button">
                    <div className="overlap-group-1-requests">
                      <div className="name-requests poppins-medium-amethyst-15px">{name}</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:SubmitForm('form2')">
                  <div className="reject-button">
                    <div className="overlap-group-1-requests">
                      <div className="reject poppins-medium-alizarin-crimson-15px">{reject}</div>
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

  