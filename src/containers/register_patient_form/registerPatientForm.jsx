import React from 'react';
import './registerPatientFormStyling.scss';
import { Link, withRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const genderoptions = [
  'Male', 'Female', 'Other'
];

const defaultOption = genderoptions[0];

  
class RegisterPatientForm extends React.Component {

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

  state = {
    errorMessage: "",
    loading: false,
  };

  fetchData = () => {
    this.setState({ loading: true });

    this.show.bind(this)

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
    
  };

  render () { 
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      patientEthAddr,
      doctorEthAddr,
      inputType,
      inputPlaceholder,
      recordName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      inputPlaceholder3,
      inputPlaceholder4,
      view,
    } = this.props;

    const { loading } = this.state;

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
                className="enter-ethereum-address-hospitaladd"
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
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{patientEthAddr}</div>
            <div className="overlap-group1-registerpatien" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <Dropdown
                options={genderoptions}
                onChange={this._onSelect}
                className="enter-record-name-registerhosp"
                name="2215"
                placeholder={inputPlaceholder3}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{doctorEthAddr}</div>
            <div className="overlap-group1-hospitalview" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder4}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              <a onClick={this.fetchData} disabled={loading}>
              <div className="rectangle-94">
                {loading && (
                  <i
                    className="fa fa-refresh fa-2x fa-spin"
                    style={{ marginRight: "0px", color: '#B080FF', marginTop: "12px", marginLeft: "205px" }}
                  />
                )}
                {!loading && <div className="view-hospitalview">{view}</div>}
                {loading && <div className="view-hospitalview">Wait...</div>}
                </div>
              </a>
              <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                  <div className="text-1-rodal">You don’t have permission to add a record</div>
                  <a >
                    <div className="rectangle-94-rodal">
                      <div className="view-rodal">Request Permission</div>
                    </div>
                  </a>
              </Rodal>
          </div>
        </div>  
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterPatientForm);


        