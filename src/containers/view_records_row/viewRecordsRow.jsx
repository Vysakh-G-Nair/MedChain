import React from "react";
import "./viewRecordsRowStyling.scss";
import { Link, withRouter } from "react-router-dom";

class ViewRecords extends React.Component {
  downloadPDF(record) {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();
    record = [
      "Record ID: " + record[0],
      "Creator's Ethereum Address: " + record[1],
      "Record Name: " + record[2],
      "Record Creator Doctor's Name: " + record[3],
      "Record Date: " + record[4],
      "Record Description: " + record[5]
    ];
    doc.setFont("times");
    doc.text(record, 10, 10);
    doc.save(record[0] + ".pdf"); 
  }

  render() {
    const { name, download, record } = this.props;

    return (
      <div className="records-row screen">
        <div className="flex-row-1-view-records">
          <div className="docname1 poppins-normal-baby-powder-18px">
            {record[2]}
          </div>
          <div className="docether1 poppins-normal-baby-powder-18px">
            {record[4]}
          </div>
          <Link
            to={{
              pathname: "/record",
              state: record,
            }}
          >
            <div className="grant-button">
              <div className="overlap-group-1-view-records">
                <div className="name-view-records poppins-medium-amethyst-15px">
                  {name}
                </div>
              </div>
            </div>
          </Link>
          <a onClick={() => this.downloadPDF(record)} >
          <div className="reject-button">
            <div className="overlap-group-1-view-records">
              <div className="download poppins-medium-alizarin-crimson-15px">
                {download}
              </div>
            </div>
          </div>
          </a>
        </div>
        <div className="rectangle-95-view-records"></div>
      </div>
    );
  }
}

export default withRouter(ViewRecords);
