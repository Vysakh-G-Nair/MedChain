import React from 'react';
import './viewRecordsStyling.scss';
import { withRouter } from "react-router-dom";
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

  