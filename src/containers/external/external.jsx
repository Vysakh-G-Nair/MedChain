import React from "react";
import "./externalStyling.scss";
import { Link, withRouter } from "react-router-dom";
import view_record_img from "./view_record.png";
import ExternalCreator from "../../ethereum/external";
import web3 from "../../ethereum/web3";
import { Details } from "../index.js";
import { Header } from "../index.js";

class External extends React.Component {
  state = {
    address: "",
    addressOwner: "",
    name: "",
    designation: "",
  };

  componentWillMount() {
    const { state } = this.props.location;
    this.getExtSummary(state);
  }

  async getExtSummary(state) {
    const external = ExternalCreator(state);
    console.log("Deployed address: " + external.options.address);

    const accounts = await web3.eth.getAccounts();

    const summary = await external.methods.getExtSummary().call({
      from: accounts[0],
    });

    this.setState({
      address: state,
      addressOwner: summary[0],
      name: summary[1],
      designation: summary[2],
    });
  }

  render() {
    const { hospital, viewRecord } = this.props;

    const headerData = {
      inputPlaceholder: "Enter Ethereum Address",
      check: "Check",
      inputType: "/external",
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
      spanText3: "Designation: ",
      spanText4: (
        <>
          {this.state.designation}
          <br />
        </>
      ),
    };

    return (
      <div class="container-center-horizontal">
        <form
          className="external screen"
          style={{ backgroundImage: `url(${hospital})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className=""> 
            <Header {...headerData} />
          </div>
          <div className="details-comp-external">
            {" "}
            <Details {...detailsData} />{" "}
          </div>
          <div className="overlap-group-external">
            <div className="flex-row-external">
              <Link
                to={{ pathname: "/externalView", state: this.state.address }}
              >
                <div className="view-record-group smart-layers-pointers">
                  <div className="overlap-group2-external">
                    <img className="view-3" src={view_record_img} alt="" />
                    <div className="view-record poppins-medium-amethyst-16px">
                      {viewRecord}
                    </div>
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

export default withRouter(External);
