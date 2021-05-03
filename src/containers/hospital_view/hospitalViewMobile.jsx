import React from 'react';
import './hospitalViewMobileStyling.scss';
import { Link, withRouter } from "react-router-dom";

  
function HospitalViewMobile(props) {
  const {
    hospitalViewMobile,
    text3,
    text4,
    overlapGroup2,
    inputType,
    inputPlaceholder,
    recordName,
    overlapGroup1,
    inputType2,
    inputPlaceholder2,
    view,
  } = props;

  return (
    <div class="container-center-horizontal">
      <form
        className="hospital-view-mobile screen"
        style={{ backgroundImage: `url(${hospitalViewMobile})` }}
        name="form2"
        action="form2"
        method="post"
      >
        <div className="text-1-hospitalviewmobile poppins-medium-white-18px">{text3}</div>
        <div className="group-55">
          <div className="text-2-hospitalviewmobile poppins-normal-baby-powder-16px">{text4}</div>
          <div className="overlap-group2-hospitalviewmobile" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            <input
              className="enter-ethereum-address"
              name="1098"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
        </div>
        <div className="group-56">
          <div className="record-name poppins-normal-baby-powder-16px">{recordName}</div>
          <div className="overlap-group1-hospitalviewmobile" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <input
              className="enter-record-name"
              name="10910"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
        </div>
        <a href="javascript:SubmitForm('form2')" className="align-self-flex-center">
          <div className="group-47">
            <div className="overlap-group-hospitalviewmobile">
              <a href="javascript:SubmitForm('form2')" onClick={window.event.stopPropagation()}>
                <div className="rectangle-49-hospitalviewmobile smart-layers-pointers"></div>
              </a>
              <div className="view poppins-semi-bold-amethyst-18px">{view}</div>
            </div>
          </div>
        </a>
      </form>
    </div>
  );
}

export default withRouter(HospitalViewMobile);