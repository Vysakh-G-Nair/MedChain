import React from "react";
import "./hospitalAddCheckStyling.scss";
import { Link, withRouter } from "react-router-dom";
import { Requests } from "../index.js";
import web3 from "../../ethereum/web3";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import HospitalCreator from '../../ethereum/medicalpro';


class PatientGrant extends React.Component {

  state = {
    pataddress:"",
    visible: false,
    errorMessage: "",
    state1:"",
    loading:false
  }

  componentWillMount() {
    const { state } = this.props.location;
    this.setState({state1:state});
  }
  
  checkPermission = async(event) =>{
    event.preventDefault();
    const {pataddress} = this.state;
    console.log(pataddress);
    this.setState({ loading: true, errorMessage: "" });
   
    try {
        const accounts = await web3.eth.getAccounts();
        const hospital = HospitalCreator(this.state.state1);
        console.log("hospital"+hospital.options.address);
        await hospital.methods.canCreateRec(pataddress).call({
          from: accounts[0]
      });
     
      this.props.history.push({
        pathname: "/hospitaladd",
        state: [this.state.state1,this.state.pataddress]
 
      });
     }
      catch (error) {
        this.setState({ errorMessage: error.message, visible: true });
        console.log(this.state.errorMessage);
      }
  
      this.setState({ loading: false });
    };

    addRequest = async(event) => {
      event.preventDefault();
      this.setState({ loading: true, errorMessage: "" });
      try {
        const accounts = await web3.eth.getAccounts();
        const hospital = HospitalCreator(this.state.state1);
        await hospital.methods.requestPermission(this.state.pataddress,0,false).send({
        from: accounts[0]});
      this.props.history.push({
        pathname: "/hospital",
        state: this.state.state1
      }); 
      } catch (error) {
        this.setState({ errorMessage: error.message, visible: true });
        console.log(this.state.errorMessage);
      }
      this.setState({ loading: false });
    
    }
  

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

    const{loading}=this.state

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-grant screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-patient-grant poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-grant poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-grant" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-grant"
                name="2212"
                placeholder={inputPlaceholder}
                value={this.state.pataddress}
                type={inputType}
                onChange={(event) =>
                  this.setState({ pataddress: event.target.value })
                }
                required
              />
            </div>
          </div>
      
          <div className="group-54">
            <div className="overlap-group-patient-grant">
              <a onClick={this.checkPermission}>
                <div className="rectangle-94">
                <div className="view-patient-grant">{view}</div>
                </div>
              </a>

              <Rodal 
              visible={this.state.visible} 
              onClose={()=>this.setState({visible:false})}>
                  <div className="text-1-rodal">{this.state.errorMessage}</div>
            
                  <a onClick = {this.addRequest}>

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
                    {!loading && <div className="view-rodal">Request Permission</div>}
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
