import React from 'react';
import './patientStyling.scss';
import { Link, withRouter } from "react-router-dom";
import view_your_record_img from './view_record.png';
import grant_img from './grant.png';
import view_external_img from './view external.png';
import share_your_record_img from './share.png';
import PatientCreator from '../../ethereum/patient';
import web3 from "../../ethereum/web3";
import { Details } from '../index.js' ;

const detailsData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609cab0d2e5b4db0132e7a2a/img/rectangle-51@2x.svg",
    spanText: "Name:",
    spanText2: <> Vysakh G Nair<br /></>,
    spanText3: "Age: ",
    spanText4: <>21 years<br /></>,
    spanText5: "Gender: ",
    spanText6: <>M<br /></>,
    spanText7: "Blood group: ",
    spanText8: "AB+",
  };

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
            viewYourRecords,
            name,
            shareRecord,
            text2,
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
                <div className="details-comp"> <Details {...detailsData} /> </div>
                <div className="overlap-group-patient">
                <div className="flex-row">
                    <Link to="/patientview">
                    <div className="group-57">
                        <div className="overlap-group4-patient">
                        <img className="view-4" src={view_your_record_img} alt=""/>
                        <div className="view-your-records poppins-medium-amethyst-16px">{viewYourRecords}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientgrant">
                    <div className="group-patient">
                        <div className="overlap-group3-patient">
                        <img className="grant-1" src={grant_img} alt=""/>
                        <div className="name poppins-medium-amethyst-16px">{name}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientshare">
                    <div className="group-patient">
                        <div className="overlap-group2-patient">
                        <img className="share-1" src={share_your_record_img} alt=""/>
                        <div className="share-record poppins-medium-amethyst-16px">{shareRecord}</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/patientexternalview">
                    <div className="group-patient">
                        <div className="overlap-group1-patient">
                        <img className="view-external-1" src={view_external_img} alt=""/>
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