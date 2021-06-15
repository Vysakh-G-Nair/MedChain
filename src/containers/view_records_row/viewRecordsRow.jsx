import React from "react";
import "./viewRecordsRowStyling.scss";
import { Link, withRouter } from "react-router-dom";
import logo_hori_img from "./medlogohori.png";

class ViewRecordsRow extends React.Component {
  downloadPDF(record) {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();
    doc.addImage(logo_hori_img, "PNG", 80, 10, 40, 8);
    doc.setLineWidth(1.25);
    doc.line(10, 20, 200, 20);

    doc.setFont("helvetica", "bold");
    doc.text("Record ID: " + record[0], 85, 30);

    doc.setFont("times", "normal");
    doc.text("Record Name: " + record[2], 10, 40);
    doc.text("Record Date: " + record[4], 10, 50);
    doc.text("Record Description: " + record[5], 10, 60);
    doc.text("Creator's Ethereum Address: " + record[1], 10, 70);
    doc.text("Creator Doctor's Name: " + record[3], 10, 80);
    doc.text("Attached File: ", 10, 90);
    doc.textWithLink("View", 43, 90, {url: "https://ipfs.infura.io/ipfs/" + record[6]});

    doc.save("Record ID-" + record[0] + ".pdf"); 
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
          {/* eslint-disable-next-line */}
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

export default withRouter(ViewRecordsRow);
