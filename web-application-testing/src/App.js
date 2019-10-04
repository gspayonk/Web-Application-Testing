import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


class App extends React.Component {

state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0,
}

addStrike = (event) => {
    event.preventDefault();
    if (this.state.strike < 2) {
        this.setState({
        strike: this.state.strike + 1
        })
    } else {

        this.setState({
        strike: 0,
        ball: 0
        })
    }
}
    
    addBall = (event) => {
    event.preventDefault();
    if (this.state.ball < 3) {
        this.setState({
        ball: this.state.ball + 1
        })
    } else {
        this.setState({
        strike: 0,
        ball: 0
        })
    }
    }

    addFoul = (event) => {
    event.preventDefault();
    if (this.state.strike < 2) {
        this.setState({
        strike: this.state.strike + 1
        })
    } else {
        this.setState({
        ...this.state
        })
    }
    }

    addHit = (event) => {
    event.preventDefault();
    this.setState({
        hit: this.state.hit + 1,
        strike: 0,
        ball: 0
    })
    }

    render() {
    return ( 
        <div>
        <Display strikes = {
        this.state.strike
        }

        balls = {
        this.state.ball
        }
        /> 
        
        <Dashboard 
        
        addStrike = {
        this.addStrike
        }

        addBall = {
        this.addBall
        }

        addFoul = {
        this.addFoul
        }

        addHit = {
        this.addHit
        }

        /> 

        </div>
    );
    }
}
export default App;