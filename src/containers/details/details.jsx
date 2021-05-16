import React from 'react';
import './detailsStyling.scss';
import { withRouter } from "react-router-dom";

class Details extends React.Component {
  render() {
    const {
      spanText,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
    } = this.props;

    return (
      <div className="group-81">
        <div className="overlap-group-details" >
          <p className="text-1-details poppins-normal-white-16px">
            <span className="span-details poppins-normal-white-16px">{spanText}</span>
            <span className="span-1-details poppins-medium-white-18px">{spanText2}</span>
            <span className="span-details poppins-normal-white-16px">{spanText3}</span>
            <span className="span-1-details poppins-medium-white-18px">{spanText4}</span>
            <span className="span-details poppins-normal-white-16px">{spanText5}</span>
            <span className="span-1-details poppins-medium-white-18px">{spanText6}</span>
            <span className="span-details poppins-normal-white-16px">{spanText7}</span>
            <span className="span-1-details poppins-medium-white-18px">{spanText8}</span>
          </p>
        </div>
      </div>
    );
  }
}

  export default withRouter(Details);

  