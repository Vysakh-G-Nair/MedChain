import React from "react";
import "./patientStyling.scss";
import { Link, withRouter } from "react-router-dom";
import view_your_record_img from "./view_record.png";
// import grant_img from "./grant.png";
// import view_external_img from "./view external.png";
import share_your_record_img from "./share.png";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import { Details } from "../index.js";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

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
      });
    } catch (error) {
      let er = error.message;
      if (er.indexOf(":") != -1) {
        er = er.slice(er.indexOf(":") + 1, er.indexOf("!") + 1)
      }
      this.setState({ errorMessage: er, visible: true });
      console.log(error.message);
    }

    this.setState({ loading: false });
  }

  render() {
    const { patient, viewYourRecords, name, shareRecord, text2 } = this.props;

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
          {this.state.age} years
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
      spanText9: "No of records: ",
      spanText10: (
        <>
          {this.state.noOfRecords}
          <br />
        </>
      ),
    };

    return (
      <div class="container-center-horizontal">
        <form
          className="patient screen"
          style={{ backgroundImage: `url(${patient})` }}
          name="form4"
          action="form4"
          method="post"
        >
          <div className="details-comp">
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
              {/* <Link to="/patientgrant">
                    <div className="group-patient">
                      <div className="overlap-group3-patient">
                        <img className="grant-1" src={grant_img} alt="" />
                        <div className="name poppins-medium-amethyst-16px">
                          {name}
                        </div>
                      </div>
                    </div>
                    </Link> */}
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
                    <div className="share-record poppins-medium-amethyst-16px">
                      {shareRecord}
                    </div>
                  </div>
                </div>
              </Link>
              {/* <Link to="/patientexternalview">
                    <div className="group-patient">
                      <div className="overlap-group1-patient">
                        <img
                          className="view-external-1"
                          src={view_external_img}
                          alt=""
                        />
                        <div className="text-2-patient poppins-medium-amethyst-16px">
                          {text2}
                        </div>
                      </div>
                    </div>
                    </Link>
                </div> */}
              <Rodal
                visible={this.state.visible}
                // onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>
                <Link to='/'>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Go to homepage</div>
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
