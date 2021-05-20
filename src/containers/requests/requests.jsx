import React from 'react';
import './requestsStyling.scss';
import { withRouter } from "react-router-dom";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

class Requests extends React.Component {
  state = {
    address: "",
    request: {},
    loading: false,
    errorMessage: "",
    visible: false,
    request2: {}
  };

  componentWillMount() {
    const { state } = this.props.location;
    this.getInstance(state);
  }

  async getInstance(state) {
    const accounts = await web3.eth.getAccounts();
    const patient = PatientCreator(state);
    // console.log("Deployed address: " + patient.options.address);
    console.log("Passed address: " + state);
    // const requestCount = await patient.methods.getRequestsCount().call(); 
    const request = await patient.methods.requests(0).call({
      from: accounts[0]
    });
    const request2 = await patient.methods.requests(1).call({
      from: accounts[0]
    });

    // console.log(request);

    if (request.isView == false && request.recordID == 0) {
      request.recordID = "Create";
    }

    this.setState({
      address: state,
      request: request,
      request2: request2
    });

    // const requests = await Promise.all(
    //   Array(parseInt(requestCount))
    //   .fill()
    //   .map((element, index) => {
    //       return patient.methods.requests(index).call();
    //   })
    // );
  }

  grantPerm = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const patient = PatientCreator(this.state.address);
      console.log("Deployed address: " + patient.options.address);

      await patient.methods.grantRequest(1).send({
        from: accounts[0],
      });

      this.setState({ errorMessage: "Successfully granted", visible: true });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
    this.setState({ loading: false });
  };

  denyPerm = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      const patient = PatientCreator(this.state.address);

      await patient.methods.revokeRequest(0).send({
        from: accounts[0],
      });

      this.setState({ errorMessage: "Successfully revoked", visible: true });
    } catch (error) {
      this.setState({ errorMessage: error.message, visible: true });
      console.log(this.state.errorMessage);
    }
    this.setState({ loading: false });
  };

    render() {
      const {
        incomingRequests,
        personName,
        personEth,
        takeAction,
        recordID,
        // name1,
        // eth1,
        grant,
        // recID1,
        reject,
        patientShareRecord,
      } = this.props;
  
      return (
        <div class="container-center-horizontal">
          <form
            className="requests screen"
            style={{ backgroundImage: `url(${patientShareRecord})`, backgroundSize: '100% 100%' }}>
            <div className="overlap-group-requests" >
              <div className="incoming-requests poppins-semi-bold-white-20px">{incomingRequests}</div>
              <div className="flex-row-2-requests">
                <div className="docters-name-requests poppins-medium-baby-powder-18px">{personName}</div>
                <div className="doc-eth-requests poppins-medium-baby-powder-18px">{personEth}</div>
                <div className="text-2-requests poppins-medium-baby-powder-18px">{recordID}</div>
                <div className="take-action-requests poppins-medium-baby-powder-18px">{takeAction}</div>
              </div>
              <div className="flex-row-requests">
                <div className="rectangle-5-requests"></div>
                <div className="rectangle-89-requests"></div>
                <div className="rectangle-90-requests"></div>
              </div>
              <div className="flex-row-1-requests">
                <div className="docname1-requests poppins-normal-baby-powder-18px">{this.state.request.nameDoc}</div>
                <div className="docether1-requests poppins-normal-baby-powder-18px">{this.state.request.viewer}</div>
                <div className="recID1-requests poppins-normal-baby-powder-18px">
                  {this.state.request.recordID}
                  </div>
                <a onClick={this.grantPerm}>
                  <div className="grant-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="name-requests poppins-medium-amethyst-15px">{grant}</div>
                    </div>
                  </div>
                </a>
                <a onClick={this.denyPerm}>
                  <div className="reject-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="reject-requests poppins-medium-alizarin-crimson-15px">{reject}</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="rectangle-95-requests"></div>
              <div className="flex-row-1-requests">
                <div className="docname1-requests poppins-normal-baby-powder-18px">{this.state.request2.nameDoc}</div>
                <div className="docether1-requests poppins-normal-baby-powder-18px">{this.state.request2.viewer}</div>
                <div className="recID1-requests poppins-normal-baby-powder-18px">
                  {this.state.request2.recordID}
                  </div>
                <a onClick={this.grantPerm}>
                  <div className="grant-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="name-requests poppins-medium-amethyst-15px">{grant}</div>
                    </div>
                  </div>
                </a>
                <a onClick={this.denyPerm}>
                  <div className="reject-button-requests">
                    <div className="overlap-group-1-requests">
                      <div className="reject-requests poppins-medium-alizarin-crimson-15px">{reject}</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="rectangle-95-requests"></div>
              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">{this.state.errorMessage}</div>
              </Rodal>
            </div>
          </form>
        </div>
      );
    }
  }

  export default withRouter(Requests);

  