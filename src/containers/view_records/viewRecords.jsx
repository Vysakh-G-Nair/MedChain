import React from 'react';
import './viewRecordsStyling.scss';
import { withRouter } from "react-router-dom";


class ViewRecords extends React.Component {
    render() {
      const {
        patientsOwnRecords,
        yourRecords,
        doctersName,
        text2,
        takeAction,
        manjunathanM,
        text1,
        name,
        download,
      } = this.props;
  
      return (
        <div class="container-center-horizontal">
          <div className="patient-s-own-records screen" style={{ backgroundImage: `url(${patientsOwnRecords})` }}>
          <div className="your-records poppins-medium-white-20px">{yourRecords}</div>
          <form className="view-records screen" name="form2" action="form2" method="post">
            <div className="overlap-group-view-records" >
              <div className="flex-row-2-view-records">
                <div className="docters-name-view-records poppins-medium-baby-powder-18px">{doctersName}</div>
                <div className="text-2-view-records poppins-medium-baby-powder-18px">{text2}</div>
                <div className="take-action poppins-medium-baby-powder-18px">{takeAction}</div>
              </div>
              <div className="flex-row-view-records">
                <div className="rectangle-5-view-records"></div>
                <div className="rectangle-89-view-records"></div>
                <div className="rectangle-90-view-records"></div>
              </div>
              <div className="flex-row-1-view-records">
                <div className="docname1 poppins-normal-baby-powder-18px">{manjunathanM}</div>
                <div className="docether1 poppins-normal-baby-powder-18px">{text1}</div>
                <a href="javascript:SubmitForm('form2')">
                  <div className="grant-button">
                    <div className="overlap-group-1-view-records">
                      <div className="name-view-records poppins-medium-amethyst-15px">{name}</div>
                    </div>
                  </div>
                </a>
                <a href="javascript:SubmitForm('form2')">
                  <div className="reject-button">
                    <div className="overlap-group-1-view-records">
                      <div className="download poppins-medium-alizarin-crimson-15px">{download}</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="rectangle-95-view-records"></div>
            </div>
          </form>
          </div>
          
        </div>
      );
    }
  }

  export default withRouter(ViewRecords);

  