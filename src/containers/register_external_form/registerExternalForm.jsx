import React from 'react';
import './registerExternalFormStyling.scss';
import { Link, withRouter } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import Rodal from "rodal";
import "rodal/lib/rodal.css";


  
class RegisterExternalForm extends React.Component {

  state = {
    errorMessage: "",
    loading: false,
    externalName: "",
    designation: "",
    visible: false
  };

 // fetchData = () => {
 //   this.setState({ loading: true });

 //   setTimeout(() => {
//   this.setState({ loading: false });
 //   }, 2000);
 // };

  registerExtUser = async (event) => {
    event.preventDefault();

    const { externalName, designation } = this.state;

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .registerExtUser( externalName,designation )
        .send({
          from: accounts[0],
        });

      const externalInstance = await factory.methods.loginExtUser().call({
        from: accounts[0]
      });

      this.props.history.push({
        pathname: "/external",
        state: externalInstance
      }); 
    } catch (error) {
      this.setState({ errorMessage: error.message,visible: true });
      console.log(this.state.errorMessage);
    }

    this.setState({ loading: false });
  };

  

  render () { 
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

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital-view screen"
          style={{ backgroundImage: `url(${hospitalView})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-externalregister poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-hospitalview poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-hospitalview" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-hospitaladd"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                value={this.state.externalName}
                onChange={event => this.setState({ externalName: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-53">
            <div className="record-name poppins-normal-baby-powder-18px">{recordName}</div>
            <div className="overlap-group1-hospitalview" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <input
                className="enter-record-name-hospitaladd"
                name="2215"
                placeholder={inputPlaceholder2}
                type={inputType2}
                value={this.state.designation}
                onChange={event => this.setState({ designation: event.target.value })}
                required
              />
            </div>
          </div>
          <div className="group-54">
            <div className="overlap-group-hospitalview">
              <a onClick={this.registerExtUser} disabled={loading} >
                <div className="rectangle-94">
                {loading && (
                  <i
                    className="fa fa-refresh fa-2x fa-spin"
                    style={{ marginRight: "0px", color: '#B080FF', marginTop: "12px", marginLeft: "205px" }}
                  />
                )}
                {!loading && <div className="view-hospitalview">{view}</div>}
                {loading && <div className="view-hospitalview">Wait...</div>}
                </div>
              </a>
              <Rodal
                visible={this.state.visible}
                onClose={() => this.setState({ visible: false })}
              >
                <div className="text-1-rodal">
                  {this.state.errorMessage}
                </div>
                <a onClick={() => this.setState({ visible: false })}>
                  <div className="rectangle-94-rodal">
                    <div className="view-rodal">Close</div>
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

export default withRouter(RegisterExternalForm);


        