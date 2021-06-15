import React from "react";
import "./externalViewStyling.scss";
import { withRouter } from "react-router-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ExternalCreator from "../../ethereum/external";
import web3 from "../../ethereum/web3";
import { Header } from "../index.js";

class ExternalView extends React.Component {
  state = {
    errorMessage: "",
    address: "",
    loading: false,
    patientAddr: "",
    recordid: "",
    visible: false,
  };

  checkPermission = async (event) => {
    event.preventDefault();
    const { state } = this.props.location;
    this.setState({ loading: true, errorMessage: "", address: state });

    try {
      const accounts = await web3.eth.getAccounts();
      const external = ExternalCreator(this.state.address);
      console.log("External deployed: " + external.options.address);
      const recordinstance = await external.methods
        .viewRecord(this.state.patientAddr, this.state.recordid)
        .call({
          from: accounts[0],
        });
      this.props.history.push({
        pathname: "/record",
        state: recordinstance,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  addRequest = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      const external = ExternalCreator(this.state.address);
      await external.methods
        .requestPermission(this.state.patientAddr, this.state.recordid)
        .send({
          from: accounts[0],
        });
      this.props.history.push({
        pathname: "/external",
        state: this.state.address,
      });
    } catch (error) {
      const er = error.message;
      // console.log(er);
      this.setState({
        errorMessage: er.slice(er.indexOf(""), er.indexOf("!") + 1),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  render() {
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

    const { loading } = this.state;

    const headerData = {
      inputPlaceholder: "Enter Ethereum Address",
      check: "Check",
      logoLink: "/external",
      logOut: "Log Out",
      address: this.props.location.state
    };    

    return (
      <div className="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="header-hospitaladd"> 
            <Header {...headerData} />
          </div>
          <div className="text-1-hospitalview poppins-medium-white-20px">
            {text1}
          </div>
          <div className="group-52">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">
              {text2}
            </div>
            <div
              className="overlap-group2-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <input
                className="enter-ethereum-address-hospitalview"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                value={this.state.patientAddr}
                onChange={(event) =>
                  this.setState({ patientAddr: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {recordName}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitalview"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                value={this.state.recordid}
                onChange={(event) =>
                  this.setState({ recordid: event.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              {/* eslint-disable-next-line */}
              <a onClick={this.checkPermission}>
                <div className="rectangle-94">
                  {loading && (
                    <i
                      className="fa fa-refresh fa-2x fa-spin"
                      style={{
                        marginRight: "0px",
                        color: "#B080FF",
                        marginTop: "12px",
                        marginLeft: "205px",
                      }}
                    />
                  )}
                  {!loading && <div className="view-hospitalview">{view}</div>}
                  {loading && <div className="view-hospitalview">Wait...</div>}

                  {/*<div className="view-hospitalview">{view}</div>*/}
                </div>
              </a>

              <Rodal
                visible={this.state.visible}
                onClose={() =>
                  this.props.history.push({
                    pathname: "/external",
                    state: this.state.address,
                  })
                }
              >
                <div className="text-1-rodal">
                  You don’t have permission to view this record
                </div>
                {/* eslint-disable-next-line */}
                <a onClick={this.addRequest}>
                  <div className="rectangle-94-rodal">
                    {loading && (
                      <i
                        className="fa fa-refresh fa-2x fa-spin"
                        style={{
                          marginRight: "0px",
                          color: "#B080FF",
                          marginTop: "12px",
                          marginLeft: "205px",
                        }}
                      />
                    )}
                    {!loading && (
                      <div className="view-rodal">Request Permission</div>
                    )}
                    {loading && <div className="view-rodal">Wait...</div>}
                    {/*<div className="view-rodal">Request Permission</div>*/}
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

export default withRouter(ExternalView);
