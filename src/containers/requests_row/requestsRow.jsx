import React from "react";
import "./requestsRowStyling.scss";
import { Link, withRouter } from "react-router-dom";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

class RequestsRow extends React.Component {
  state = {
    gloading: false, // grant loading
    dloading: false, // deny loading
    errorMessage: "",
    visible: false,
  };

  grantPerm = async (event) => {
    // console.log("Inside" + this.props.index);
    event.preventDefault();

    this.setState({ gloading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const patient = PatientCreator(this.props.address);
      console.log("Deployed address: " + patient.options.address);

      await patient.methods.grantRequest(parseInt(this.props.index)).send({
        from: accounts[0],
      });

      this.setState({
        errorMessage: "Successfully granted permission!",
        visible: true,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
    this.setState({ gloading: false });
  };

  denyPerm = async (event) => {
    event.preventDefault();

    this.setState({ rloading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const patient = PatientCreator(this.props.address);

      await patient.methods.revokeRequest(parseInt(this.props.index)).send({
        from: accounts[0],
      });

      this.setState({
        errorMessage: "Successfully revoked permission!",
        visible: true,
      });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
    this.setState({ rloading: false });
  };

  render() {
    const { reject, name, ethAdd, docName, isView, granted } = this.props;

    let { recordID } = this.props;

    if (isView == false && recordID == 0) {
      recordID = "Create";
    } else {
      recordID = "View (" + recordID + ")";
    }

    const { gloading, rloading } = this.state;

    return (
      <div class="container-center-horizontal">
        <div className="requestsRow-requests">
          <div className="rectangle-95-requests"></div>
          <a onClick={this.denyPerm}>
            <div className="group-82-requests">
              <div className="overlap-group1-requests">
                {!rloading && !granted && (
                  <div className="reject-requests poppins-medium-amethyst-15px">
                    Rejected
                  </div>
                )}
                {!rloading && granted && (
                  <div className="reject-requests poppins-medium-amethyst-15px">
                    {reject}
                  </div>
                )}
                {rloading && (
                  <div className="reject-requests poppins-medium-amethyst-15px">
                    Wait..
                  </div>
                )}
                {rloading && (
                    <i
                      className="fa fa-refresh fa-1x fa-spin"
                      style={{
                        marginRight: "0px",
                        color: "#E32C2C",
                        marginTop: "2px",
                        marginLeft: "-2px",
                      }}
                    />
                  )}
              </div>
            </div>
          </a>
          <a onClick={this.grantPerm}>
            <div className="group-83-requests">
              <div className="overlap-group1-requests">
                {!gloading && !granted && (
                  <div className="name-requests poppins-medium-amethyst-15px">
                    {name}
                  </div>
                )}
                {!gloading && granted && (
                  <div className="name-requests poppins-medium-amethyst-15px">
                    Granted
                  </div>
                )}
                {gloading && (
                  <div className="name-requests poppins-medium-amethyst-15px">
                    Wait..
                  </div>
                )}
                {gloading && (
                    <i
                      className="fa fa-refresh fa-1x fa-spin"
                      style={{
                        marginRight: "0px",
                        color: "#9A5BFF",
                        marginTop: "2px",
                        marginLeft: "-2px",
                      }}
                    />
                  )}
              </div>
            </div>
          </a>
          <div className="ag1637-g poppins-normal-baby-powder-18px">
            {recordID}
          </div>
          <div className="text-1-requests poppins-normal-baby-powder-18px">
            {ethAdd}
          </div>
          <div className="record-name1-requests poppins-normal-baby-powder-18px">
            {docName}
          </div>
        </div>
        <Rodal
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          <div className="text-1-rodal">{this.state.errorMessage}</div>
          <Link
            to={{
              pathname: "/patient",
              state: this.props.address,
            }}
          >
            <div className="rectangle-94-rodal">
              <div className="view-rodal">Go to dashboard</div>
            </div>
          </Link>
        </Rodal>
      </div>
    );
  }
}

export default withRouter(RequestsRow);
