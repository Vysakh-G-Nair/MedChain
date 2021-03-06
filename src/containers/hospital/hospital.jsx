import React from "react";
import "./hospitalStyling.scss";
import { Link, withRouter } from "react-router-dom";
import add_record_img from "./add_record.png";
import registry from "./registry.png";
import register from "./register.png";
import view_record_img from "./view_record.png";
import { Details } from "../index.js";
import web3 from "../../ethereum/web3";
import HospitalCreator from "../../ethereum/medicalpro";
import { Header } from "../index.js";
import QRCode from "qrcode";
import Rodal from "rodal";



class Hospital extends React.Component {
  state = {
    address: "",
    addressOwner: "",
    hosname: "",
    category: "",
    lisenceNo: "",
    location: "",
    visible: false,
    qrCode: "",
    errorMessage:""
  };

  componentDidMount() {
    const { state } = this.props.location;
    this.getMedSummary(state);
  }

  async getMedSummary(state) {
    this.setState({errorMessage:""});
    try{
        const hospital = HospitalCreator(state);
        console.log("Hospital deployed at: " + hospital.options.address);

        const accounts = await web3.eth.getAccounts();

        const summary = await hospital.methods.getMedProSummary().call({
          from: accounts[0],
        });

    this.setState({
      address: state,
      addressOwner: summary[0],
      hosname: summary[1],
      category: summary[2],
      location: summary[3],
      lisenceNo: summary[4],
      noOfPatients: summary[5],
      qrCode: await QRCode.toDataURL(summary[0], { scale: 8 }),
    });
    // console.log(this.state.qrCode);
  }catch(error)
  {
    let er = error.message;
    if (er.indexOf(":") !== -1) {
      er = er.slice(er.indexOf(":") + 1, er.indexOf("!") + 1)
    }
    this.setState({ errorMessage: er, visible: true });
    console.log(error.message);

  }
}

  render() {
    const { hospital, viewRecord, addRecord, regPatient, PatientRegistry } =
      this.props;

      const headerData = {
        inputPlaceholder: "Enter Ethereum Address",
        check: "Check",
        logoLink: "/hospital",
        inputType: "text",
        logOut: "Log Out",
        address:this.state.address
      };

    const detailsData = {
      overlapGroup:
        "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609cab0d2e5b4db0132e7a2a/img/rectangle-51@2x.svg",
      spanText: "Center: ",
      spanText2: (
        <>
          {" "}
          {this.state.hosname}
          <br />
        </>
      ),
      spanText3: "Category: ",
      spanText4: (
        <>
          {this.state.category}
          <br />
        </>
      ),
      spanText5: "Lisence No.: ",
      spanText6: (
        <>
          {this.state.lisenceNo}
          <br />
        </>
      ),
      spanText7: "Location: ",
      spanText8: (
        <>
          {this.state.location}
          <br />
        </>
      ),
      qr_img: this.state.qrCode,
    };

    return (
      <div className="container-center-horizontal">
        <form
          className="hospital screen"
          style={{ backgroundImage: `url(${hospital})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="">
            <Header {...headerData} />
          </div>
          <div className="details-comp">
            {" "}
            <Details {...detailsData} />{" "}
          </div>
          <div className="overlap-group-hospital">
            <div className="flex-row-hospital">
              <Link
                to={{ pathname: "/hospitalview", state: this.state.address }}
              >
                <div className="view-record-group smart-layers-pointers">
                  <div className="overlap-group2-hospital">
                    <img className="view-3" src={view_record_img} alt="" />
                    <div className="view-record poppins-medium-amethyst-16px">
                      {viewRecord}
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/hospitaladdcheck",
                  state: this.state.address,
                }}
              >
                <div className="add-record-group smart-layers-pointers">
                  <div className="overlap-group1-hospital">
                    <img className="edit-5" src={add_record_img} alt="" />
                    <div className="add-record poppins-medium-amethyst-16px">
                      {addRecord}
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/registerpatienthospital",
                  state: this.state.address,
                }}
              >
                <div className="add-record-group smart-layers-pointers">
                  <div className="overlap-group1-hospital">
                    <img className="edit-5" src={register} alt="" />
                    <div className="add-record poppins-medium-amethyst-16px">
                      {regPatient}
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={{
                  pathname: "/registry",
                  state: [this.state.address, this.state.noOfPatients],
                }}
              >
                <div className="add-record-group smart-layers-pointers">
                  <div className="overlap-group1-hospital">
                    <img className="edit-5" src={registry} alt="" />
                    <div className="add-record poppins-medium-amethyst-16px">
                      {PatientRegistry}
                    </div>
                  </div>
                </div>
              </Link>
              <Rodal
                visible={this.state.visible}
                onClose={()=>this.props.history.push("/loginAs")}
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

export default withRouter(Hospital);
