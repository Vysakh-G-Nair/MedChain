import React from 'react';
import './patientStyling.scss';
import { Link, withRouter } from "react-router-dom";
import view_your_record_img from './view_record.png';
import grant_img from './grant.png';
import view_external_img from './view external.png';
import share_your_record_img from './share.png';
import PatientCreator from '../../ethereum/patient';
import web3 from "../../ethereum/web3";
  
class Patient extends React.Component {
    static async getInitialProps(props) {
        const { state } = this.props.location;
        const patient = PatientCreator(state);
        console.log(patient);

        const accounts = await web3.eth.getAccounts();

        const addressOwner = await patient.methods.ownerPatient().call({
            from: accounts[0]
        });

        return {
            address: state,
            addressOwner: addressOwner
        };
    }

    render() {
        const {
            patient,
            text1,
            text1sub,
            viewYourRecords,
            name,
            shareRecord,
            text2,
            addressOwner
        } = this.props;
        const { state } = this.props.location;
        console.log("Dep Adrees: " + state);
        // console.log("Owner address: " + this.props.addressOwner);
        
        return (
            <div class="container-center-horizontal">
            <form
                className="patient screen"
                style={{ backgroundImage: `url(${patient})` }}
                name="form4"
                action="form4"
                method="post"
            >
                <div className="overlap-group-patient">
                    <div className="text-new-patient poppins-medium-white-20px">
                        <span className="text-1-patient poppins-medium-white-20px">{text1}
                        <span className="text-1sub-patient ">{addressOwner}</span></span>
                    </div>
                <div className="flex-row">
                    <Link to="/patientview">
                    <div className="group-57">
                        <div className="overlap-group4-patient">
                        <img className="view-4" src={view_your_record_img} />
                        <div className="view-your-records poppins-medium-amethyst-16px">{viewYourRecords}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientgrant">
                    <div className="group-patient">
                        <div className="overlap-group3-patient">
                        <img className="grant-1" src={grant_img} />
                        <div className="name poppins-medium-amethyst-16px">{name}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientshare">
                    <div className="group-patient">
                        <div className="overlap-group2-patient">
                        <img className="share-1" src={share_your_record_img} />
                        <div className="share-record poppins-medium-amethyst-16px">{shareRecord}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientexternalview">
                    <div className="group-patient">
                        <div className="overlap-group1-patient">
                        <img className="view-external-1" src={view_external_img} />
                        <div className="text-2-patient poppins-medium-amethyst-16px">{text2}</div>
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

export default withRouter(Patient);