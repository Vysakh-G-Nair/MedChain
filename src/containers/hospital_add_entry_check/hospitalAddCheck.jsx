import React from "react";
import "./hospitalAddCheckStyling.scss";
import { withRouter } from "react-router-dom";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import HospitalCreator from "../../ethereum/medicalpro";

class PatientGrant extends React.Component {
  state = {
    patAddress: "",
    visible: false,
    errorMessage: "",
    address: "",
    loading: false,
  };

  checkPermission = async (event) => {
    event.preventDefault();
    const { state } = this.props.location;
    const { patAddress } = this.state;
    // console.log(patAddress);
    this.setState({ loading: true, errorMessage: "", address: state });

    try {
      const accounts = await web3.eth.getAccounts();
      const hospital = HospitalCreator(this.state.address);
      console.log("Hospital deployed at: " + hospital.options.address);
      await hospital.methods.canCreateRec(patAddress).call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/hospitaladd",
        state: [this.state.address, this.state.patAddress],
      });
    } catch (error) {
      const er = error.message;
      if (er.indexOf("!") === -1) {
        // console.log(er);
        this.setState({ errorMessage: error.message, visible: true });
      } else {
        this.setState({
          errorMessage: er.slice(er.indexOf("Y"), er.indexOf("!") + 1),
          visible: true,
        });
      }
      console.log(error.message);
    }

    this.setState({ loading: false });
  };

  addRequest = async (event) => {
    event.preventDefault();
    const { state } = this.props.location;
    this.setState({
      loading: true,
      errorMessage: "Requesting..",
      address: state,
    });
    try {
      const accounts = await web3.eth.getAccounts();
      const hospital = HospitalCreator(this.state.address);
      await hospital.methods
        .requestPermission(this.state.patAddress, 0, false)
        .send({
          from: accounts[0],
        });
      this.props.history.push({
        pathname: "/hospital",
        state: this.state.address,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      patientShareRecord,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      view,
    } = this.props;

    const { loading } = this.state;

    return (
      <div className="container-center-horizontal">
        <form
          className="patient-grant screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-patient-grant poppins-medium-white-20px">
            {text1}
          </div>
          <div className="group-52">
            <div className="text-2-patient-grant poppins-normal-baby-powder-18px">
              {text2}
            </div>
            <div
              className="overlap-group2-patient-grant"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <input
                className="enter-ethereum-address-grant"
                name="2212"
                placeholder={inputPlaceholder}
                value={this.state.patAddress}
                type={inputType}
                onChange={(event) =>
                  this.setState({ patAddress: event.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="group-54">
            <div className="overlap-group-patient-grant">
              <a onClick={this.checkPermission}>
                <div className="rectangle-94">
                  {!loading && <div className="view-patient-grant">{view}</div>}
                  {loading && <div className="view-patient-grant">Wait..</div>}
                  {loading && (
                    <i
                    className="fa fa-refresh fa-2x fa-spin"
                    style={{
                      marginRight: "50px",
                      color: "#B080FF",
                      marginTop: "12px",
                      marginLeft: "305px",
                    }}
                  />
                  )}
                </div>
              </a>

              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>

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

export default withRouter(PatientGrant);
