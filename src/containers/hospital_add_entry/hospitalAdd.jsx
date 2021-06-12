import React from "react";
import "./hospitalAddStyling.scss";
import { withRouter } from "react-router-dom";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import web3 from "../../ethereum/web3";
import HospitalCreator from "../../ethereum/medicalpro";
import { Header } from "../index.js";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const headerData = {
  inputPlaceholder: "Enter Ethereum Address",
  check: "Check",
  inputType: "/hospital",
  logOut: "Log Out",
};

class HospitalAdd extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    doctorName: "",
    recordName: "",
    date: "",
    doctorNote: "",
    visible: false,
    buffer: "",
    fileName: "",
  };

  addRecord = async (event) => {
    event.preventDefault();
    const { state } = this.props.location;
    // console.log(state);
    const { doctorName, recordName, date, doctorNote, recordID } = this.state;
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const hospital = HospitalCreator(state[0]);
      // console.log("hospital"+hospital.options.address);
      console.log("Submiting the form..");
      ipfs.add(this.state.buffer, async (error, result) => {
        console.log("IPFS result: ", result);
        if (error) {
          console.error(error);
          return;
        }
        const fileHash = result[0].hash;
        await hospital.methods
          .createRecord(
            state[1],
            recordID,
            recordName,
            doctorName,
            date,
            doctorNote,
            fileHash
          )
          .send({
            from: accounts[0],
          });
        this.props.history.push({
          pathname: "/hospital",
          state: state[0],
        });
        this.setState({ loading: false });
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
  };

  capturefile = (event) => {
    event.preventDefault();
    console.log("filecaptured");
    const file = event.target.files[0];
    this.setState({ fileName: file.name });
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
    };
  };
  render() {
    const {
      hospitalView,
      text1,
      text2,
      overlapGroup2,
      overlapGroup3,
      recordID,
      // doctorEthAddr,
      symptoms,
      inputType,
      inputPlaceholder,
      recordName,
      overlapGroup1,
      inputType2,
      inputPlaceholder2,
      inputPlaceholder3,
      // inputPlaceholder4,
      inputPlaceholder5,
      inputPlaceholder6,
      entryDate,
      view,
    } = this.props;

    const { loading } = this.state;

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
          <div className="group-52-addrecord">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">
              {text2}
            </div>
            <div
              className="overlap-group2-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <input
                className="enter-ethereum-address-hospitaladd"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                value={this.state.doctorName}
                onChange={(event) =>
                  this.setState({ doctorName: event.target.value })
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
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                value={this.state.recordName}
                onChange={(event) =>
                  this.setState({ recordName: event.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {recordID}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder3}
                type={inputType2}
                value={this.state.recordID}
                onChange={(event) =>
                  this.setState({ recordID: event.target.value })
                }
                required
              />
            </div>
          </div>
          {/* <div className="group-53">
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
          </div> */}
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">
              {entryDate}
            </div>
            <div
              className="overlap-group1-hospitalview"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder6}
                type={inputType2}
                value={this.state.date}
                onChange={(event) =>
                  this.setState({ date: event.target.value })
                }
                required
              />
              {/* <Calendar
                onChange={(event) =>
                  this.setState({ date: event.target.value })}
                value={this.state.date}
              /> */}
            </div>
          </div>
          <div className="group-53-notes">
            <div className="record-name-notes poppins-normal-baby-powder-18px">
              {symptoms}
            </div>
            <div
              className="overlap-group20-notes"
              style={{ backgroundImage: `url(${overlapGroup3})` }}
            >
              <input
                className="enter-record-name-hospitaladd-notes"
                name="2215"
                placeholder={inputPlaceholder5}
                type={inputType2}
                value={this.state.doctorNote}
                onChange={(event) =>
                  this.setState({ doctorNote: event.target.value })
                }
                required
              />
            </div>
          </div>

          {/* <div className="group-53-attach">
              <input className="attach" type='file' onChange={this.capturefile} />
          </div> */}

          <div class="inputfile-box">
            <input
              type="file"
              id="file"
              class="inputfile"
              onChange={this.capturefile}
            />
            <label for="file">
              <span id="file-name" class="file-box">
                {this.state.fileName}
              </span>
              <span class="file-button">
                <i class="fa fa-upload" aria-hidden="true"></i>
                Select File
              </span>
            </label>
          </div>

          <div className="group-54">
            <div className="overlap-group-hospitalview">
              {/* eslint-disable-next-line */}
              <a onClick={this.addRecord}>
                {/* <div className="rectangle-94">
                <div className="view-hospitaladd">{view}</div>
                </div> */}
                <div className="rectangle-94-addrecord">
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
                  {!loading && <div className="view-hospitaladd">{view}</div>}
                  {loading && <div className="view-hospitaladd">Wait...</div>}
                </div>
              </a>

              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>
                {/* <a>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Request Permission</div>
                  </div>
                </a> */}
              </Rodal>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(HospitalAdd);
