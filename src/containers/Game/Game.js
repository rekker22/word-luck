import React from 'react';
import './Game.css';

class Game extends React.Component {
    constructor() {
        super()
        var today = new Date();
        var secs = today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds();
        var rem = 300*(Math.floor(secs/300)+1) - secs;
        this.state = {
          currentTime: rem
        }
      }

      

    render(){
        return(
            <div className = 'game'>
                <p className='timer'>
                { this.state.currentTime }
                </p>
                <div className='words'>
                    <button className='btn-word A'>A</button>
                    <button className='btn-word B'>B</button>
                    <button className='btn-word C'>C</button>
                </div>
                <button className='btn-word bet'>Bet</button>
                <div className='players'>

                </div>
            </div>


        )
    }


    tick() {
        if(this.state.currentTime === 0){
            this.setState(state => ({
                currentTime: 300
              }));
        }
        this.setState(state => ({
          currentTime: state.currentTime - 1
        }));
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Game;