import React from 'react';
import './Referral.css';


class Referral extends React.Component{
    constructor(props){
        super(props);
        this.state = { textToCopy: '' }
    }

    render(){
        return(
            <div className="referral">
                <div className="head">
                    <p> Refer Your friends and win points!!!</p>
                </div>
                <div className="referrallink">
                    <input className="link" type="text" value="Some Text to Copy" readOnly></input>
                    <button className="linkcopy" onClick={""}>Copy</button>
                </div>
            </div>
        )
    }
}

export default Referral;