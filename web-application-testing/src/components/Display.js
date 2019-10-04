import React from 'react';

class Display extends React.Component {

    render() {

    return (
        <div className = "topRow">

        <div className = "home">
            <h2 className = "home__name" > Home </h2>
            <div className = "home__score" > { this.props.home } </div>
        </div>

        <div className = "timer" > 00:03 </div>

        <div className = "away" >
            <h2 className = "away__name"> Guest </h2>
            <div className = "away__score"> { this.props.away }</div>
        </div>

    </div> 
    )
    }
}

export default Display; 
