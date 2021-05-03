import React from 'react';
import './hospitalViewStyling.scss';
import { Link, withRouter } from "react-router-dom";

  
class HospitalView extends React.Component {
  render () { 
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      recordName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      view,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-hospitalview poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-hospitalview" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{recordName}</div>
            <div className="overlap-group1-hospitalview" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              <Link >
                <div className="rectangle-94 smart-layers-pointers"></div>
                <div className="view-hospitalview">{view}</div>
              </Link>
          </div>
        </div>  
        </form>
      </div>
    );
  }
}

export default withRouter(HospitalView);


        