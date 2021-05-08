import React from 'react';
import './hospitalStyling.scss';
import { Link, withRouter } from "react-router-dom";
import add_record_img from './add_record.png';
import view_record_img from './view_record.png';

  
class Hospital extends React.Component {
  render() {  
    const { hospital, spanText, spanText2, view3, viewRecord, edit5, addRecord } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital screen"
          style={{ backgroundImage: `url(${hospital})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group-hospital">
            <div className="text-1-hospital poppins-medium-white-20px">
              <span className="span0 poppins-medium-white-20px">{spanText}</span>
              <span className="span1 ">{spanText2}</span>
            </div>
            <div className="flex-row-hospital">
              <Link to="/hospitalview">
                <div className="view-record-group smart-layers-pointers">
                  <div className="overlap-group2-hospital">
                    <img className="view-3" src={view_record_img} />
                    <div className="view-record poppins-medium-amethyst-16px">{viewRecord}</div>
                  </div>
                </div>
              </Link>
              <Link to="/hospitaladd">
                <div className="add-record-group smart-layers-pointers">
                  <div className="overlap-group1-hospital">
                    <img className="edit-5" src={add_record_img} />
                    <div className="add-record poppins-medium-amethyst-16px">{addRecord}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Hospital);