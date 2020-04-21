import React from "react";

const Display = ({ strikes, balls, fouls }) => {
    return (
        <section className = 'scoreboard'>
            <div className = "topRow">
            <div className = "home">
                <h2 className = "home__name" > Cubs </h2>
                <div className = "home__score" > 0 </div>
            </div>
            <div className = "timer" > 00:03 </div>
            <div className = "away" >
                <h2 className = "away__name"> Yankees </h2>
                <div className = "away__score"> 0 </div>
            </div>
        </div> 
    <>
    <div className="bottomRow">
        <div className="down">
        <h3 className="down__title">Strike</h3>
        <div className="down__value">{strikes}</div>
        </div>

        <div className="toGo">
        <h3 className="toGo__title">Ball</h3>
        <div className="toGo__value">{balls}</div>
        </div>

        <div className="ballOn">
        <h3 className="ballOn__title">Foul</h3>
        <div className="ballOn__value">{fouls}</div>
        </div>

        <div className="quarter">
        <h3 className="quarter__title">Inning</h3>
        <div className="quarter__value">2</div>
        </div>
    </div>
    </>
    </section>
    );
};

export default Display;