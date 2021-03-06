import React from "react";
import "./registryRowStyling.scss";
import { Link, withRouter } from "react-router-dom";

class RegistryRow extends React.Component {
  render() {
    const { name, patient, address } = this.props;

    return (
      <div className="records-row screen">
        <div className="flex-row-1-view-records">
          <div className="docname1 poppins-normal-baby-powder-18px">
            {patient[1]}
          </div>
          <div className="docether1-registryrow poppins-normal-baby-powder-18px">
            {patient[0]}
          </div>
          <Link
            to={{
              pathname: "/hospitaladd",
              state: [address, patient[0]]
            }}
          >
            <div className="grant-button-registryrow">
              <div className="overlap-group-1-view-records">
                <div className="name-view-records poppins-medium-amethyst-15px">
                  {name}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="rectangle-95-view-records-registryrow"></div>
      </div>
    );
  }
}

export default withRouter(RegistryRow);
