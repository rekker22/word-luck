import React from 'react';
import './Navbar.css';
import {Navbarmenu} from './Navbarmenu';
import open from './open.png';
import close from './close.png';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.changestate = this.changestate.bind(this);
        this.state = {isopen: false};
      }

    changestate(){
        this.setState({
            isopen: !this.state.isopen
        });
        
    }
    render(){
        let menutype;
        let logotype = open;
        if(this.state.isopen === true){
            menutype = <Navbarmenu />;
            logotype = close;
        }
        return(
            <div>
            <div className="navbar">
                <p class="navbar-brand"> Word Luck</p>
                <img src={logotype} alt="logo" onClick={this.changestate} class="nav-btn">
                </img>
            </div>
            {menutype}
            </div>
        )
    }
}

export default Navbar;