import React from "react";
import "../App.css";

class BottomRow extends React.Component {

    render() {

    return (
    <div className="bottomRow">
        <div className="down">
        <h3 className="down__title">Ball</h3>
        <div data-testid="balls">{this.props.balls}</div>
    </div>
        <div className="toGo">
        <h3 className="toGo__title">Strike</h3>
        <div data-testid="strikes">{this.props.strikes}</div>
    </div>
        <div className="ballOn">
        <h3 className="ballOn__title">Hit</h3>
        <div data-testid="hits">{this.props.hits}</div>
    </div>
    
    <div className="inning">
        <h3 className="quarter__title">Inning</h3>
        <div className="quarter__value">{this.props.inning}</div>
    </div>
    </div>
    );
    }
}

export default BottomRow;
