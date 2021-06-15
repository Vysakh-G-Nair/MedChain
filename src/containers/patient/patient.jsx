import React from "react";
import "./patientStyling.scss";
import { Link, withRouter } from "react-router-dom";
import view_your_record_img from "./view_record.png";
import label from "./label.svg";
import share_your_record_img from "./share.png";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import { Details } from "../index.js";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Header } from "../index.js";
import QRCode from 'qrcode';

class Patient extends React.Component {
  state = {
    address: "",
    addressOwner: "",
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    noOfRecords: -1,
    errorMessage: "",
    loading: false,
    visible: false,
    newTag: false,
    qrCode: ""
  };

  componentDidMount() {
    const { state } = this.props.location;
    this.getPatSummary(state);
  }

  async getPatSummary(state) {
    this.setState({ loading: true, errorMessage: "" });

    try {
      const patient = PatientCreator(state);
      console.log("Deployed address: " + patient.options.address);

      const accounts = await web3.eth.getAccounts();

      const summary = await patient.methods.getPatSummary().call({
        from: accounts[0],
      });

      this.setState({
        address: state,
        addressOwner: summary[0],
        name: summary[1],
        age: summary[2],
        gender: summary[3],
        bloodGroup: summary[4],
        noOfRecords: summary[5],
        newTag : summary[6],
        qrCode: await QRCode.toDataURL(summary[0], { scale: 8 })
      });
      console.log(this.state.qrCode)

      }catch (error) {
      let er = error.message;
      if (er.indexOf(":") !== -1) {
        er = er.slice(er.indexOf(":") + 1, er.indexOf("!") + 1)
      }
      this.setState({ errorMessage: er, visible: true });
      console.log(error.message);
    }

    this.setState({ loading: false });
  }

  render() {
    const { patient, viewYourRecords, shareRecord } = this.props;

    const headerData = {
      inputPlaceholder: "Enter Ethereum Address",
      check: "Check",
      logoLink: "/patient",
      logOut: "Log Out",
      address: this.state.address
    };

    const detailsData = {
      overlapGroup:
        "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609cab0d2e5b4db0132e7a2a/img/rectangle-51@2x.svg",
      spanText: "Name: ",
      spanText2: (
        <>
          {this.state.name}
          <br />
        </>
      ),
      spanText3: "Age: ",
      spanText4: (
        <>
          {this.state.age} 
          <br />
        </>
      ),
      spanText5: "Gender: ",
      spanText6: (
        <>
          {this.state.gender}
          <br />
        </>
      ),
      spanText7: "Blood group: ",
      spanText8: (
        <>
          {this.state.bloodGroup}
          <br />
        </>
      ),
      spanText9: "QR Code: ",
      spanText10: (
        <>
        <img
          className="share-1"
          src={this.state.qrCode}
          alt=""
        />
          <br />
        </>
      ),
    };

    return (
      <div className="container-center-horizontal">
        <form
          className="patient screen"
          style={{ backgroundImage: `url(${patient})` }}
          name="form4"
          action="form4"
          method="post"
        >
          <div className="header-patient"> 
            <Header {...headerData} />
          </div>
          <div className="details-comp-patient">
            {" "}
            <Details {...detailsData} />{" "}
          </div>
          <div className="overlap-group-patient">
            <div className="flex-row">
              <Link
                to={{
                  pathname: "/viewrecords",
                  state: [this.state.address, this.state.noOfRecords],
                }}
              >
                <div className="group-57">
                  <div className="overlap-group4-patient">
                    <img className="view-4" src={view_your_record_img} alt="" />
                    <div className="view-your-records poppins-medium-amethyst-16px">
                      {viewYourRecords}
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/requests",
                  state: this.state.address,
                }}
                onClick={this.test}
              >
              
                <div className="group-patient">
                  <div className="overlap-group2-patient">
                    <img
                      className="share-1"
                      src={share_your_record_img}
                      alt=""
                    />

                    <div className="newnoticlass">
                      {this.state.newTag && (
                        <img
                          className="new-noti"
                          src={label}
                          alt=""
                        />
                      )}
                    </div>
                    
                    <div className="share-record-newrequests poppins-medium-amethyst-16px">
                      {shareRecord}
                    </div>
                  </div>
                </div>
              </Link>
              <Rodal
                visible={this.state.visible}
                onClose={() => this.props.history.push("/loginAs")}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>
                <Link to='/loginAs'>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Go to Login page</div>
                  </div>
                  </Link>
              </Rodal>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Patient);
