import React from 'react';
import './detailsStyling.scss';
import './rodal.css'
import { withRouter } from "react-router-dom";
import qr_icon from "./qr_icon.svg";
import qr_img from "./qr_img.png";
import Rodal from 'rodal';
// import 'rodal/lib/rodal.css';

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
 
  show() {
    this.setState({ visible: true });
  }
 
  hide() {
    this.setState({ visible: false });
  }

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
      spanText9

    } = this.props;

    return (
      <div className="group-81">
        <div className="overlap-group-details" >
          <p className="text-1-details poppins-normal-white-16px">
            <span className="span-details poppins-normal-white-16px">{spanText}</span>
            <span className="span-1-details poppins-medium-white-18px">{spanText2}</span>
            <a onClick={this.show.bind(this)}>
              <img className="qr_icon" src={qr_icon} alt="" />
            </a>
            <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
              <div className="qr_img_div" >
                <img className="qr_img" src={spanText9} alt="" />
              </div>
            </Rodal>
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

  