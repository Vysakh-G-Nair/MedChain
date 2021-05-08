import React from 'react';
import './patientGrantStyling.scss';
import { Link, withRouter } from "react-router-dom";

  
class PatientGrant extends React.Component {
  render () { 
    const {
      patientShareRecord,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      view,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-grant screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-patient-grant poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-grant poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-grant" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-grant"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
      
          <div className="group-54">
            <div className="overlap-group-patient-grant">
              <Link >
                <div className="rectangle-94 smart-layers-pointers"></div>
                <div className="view-patient-grant">{view}</div>
              </Link>
          </div>
        </div>  
        </form>
      </div>
    );
  }
}

export default withRouter(PatientGrant);


        