import React from 'react';
import './viewRecordsRowStyling.scss';
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
          <div className="records-row screen" >
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
          
        </div>
      );
    }
  }

  export default withRouter(ViewRecords);

  