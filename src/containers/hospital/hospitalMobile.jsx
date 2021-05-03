import React from 'react';
import './hospitalMobileStyling.scss';
import { Link, withRouter } from "react-router-dom";
import add_record_img from './add_record.png';
import view_record_img from './view_record.png';

  
function HospitalMobile(props) {
  const { hospitalMobile, spanText, spanText2, view3, viewRecord, edit5, addRecord } = props;

  return (
    <div class="container-center-horizontal">
      <form
        className="hospital-mobile screen"
        style={{ backgroundImage: `url(${hospitalMobile})` }}
        name="form2"
        action="form2"
        method="post"
      >
        <div className="overlap-group-hospitalmobile">
          <div className="text-1-hospitalmobile poppins-medium-white-18px">
            <span className="span0 poppins-medium-white-18px">{spanText}</span>
            <span className="span1 ">{spanText2}</span>
          </div>
          <Link to="/hospitalview">
            <div className="x-record-group-mobile smart-layers-pointers">
              <div className="overlap-group2-hospitalmobile">
                <img className="view-3" src={view_record_img} />
                <div className="view-record poppins-medium-amethyst-16px">{viewRecord}</div>
              </div>
            </div>
          </Link>
          <a href="javascript:SubmitForm('form2')">
            <div className="x-record-group-mobile smart-layers-pointers">
              <div className="overlap-group1-hospitalmobile">
                <img className="edit-5" src={add_record_img} />
                <div className="add-record poppins-medium-amethyst-16px">{addRecord}</div>
              </div>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
}



export default withRouter(HospitalMobile);