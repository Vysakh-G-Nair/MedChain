import React from 'react';
import './recordStyling.scss';
import { Link, withRouter } from "react-router-dom";
import PatientCreator from '../../ethereum/patient';
import web3 from "../../ethereum/web3";
import { Details } from '../index.js' ;

class Record extends React.Component {
    
    render() {
        const {
          recordID,
          creatorEth,
          recordName,
          docName,
          recDate,
          docNote,
          recordIDVal,
          creatorEthVal,
          recordNameVal,
          docNameVal,
          recDateVal,
          docNoteVal,
          patientShareRecord,
        } = this.props;
        
        return (
            <div class="container-center-horizontal">
                <form
                    className="patient-share-record screen"
                    style={{ backgroundImage: `url(${patientShareRecord})`, backgroundSize: '100% 100%' }}>
                        <div className="boxposition">
                        <div className="overlap-group-record-record" >
                        <p className="text-1-record-record poppins-normal-white-16px">
                            <span className="span-record poppins-normal-white-16px">{recordID}</span>
                            <span className="span-1-record poppins-medium-white-18px">{recordIDVal}</span>
                            <span className="span-record poppins-normal-white-16px">{creatorEth}</span>
                            <span className="span-1-record poppins-medium-white-18px">{creatorEthVal}</span>
                            <span className="span-record poppins-normal-white-16px">{recordName}</span>
                            <span className="span-1-record poppins-medium-white-18px">{recordNameVal}</span>
                            <span className="span-record poppins-normal-white-16px">{docName}</span>
                            <span className="span-1-record poppins-medium-white-18px">{docNameVal}</span>
                            <span className="span-record poppins-normal-white-16px">{recDate}</span>
                            <span className="span-1-record poppins-medium-white-18px">{recDateVal}</span>
                            <span className="span-record poppins-normal-white-16px">{docNote}</span>
                            <span className="span-1-record poppins-medium-white-18px">{docNoteVal}</span>
                        </p>
                        </div>
                        </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Record);