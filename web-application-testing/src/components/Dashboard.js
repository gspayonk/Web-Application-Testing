import React from 'react';
import { useOnClick } from './useOnClick';
import { Display } from './Display';
import { useState } from 'react';

const Dashboard = () => {

    const [strikes, setStrikes, onClickStrikes] = useOnClick(0);
    const [balls, setBalls, onClickBalls] = useOnClick(0);
    const [fouls, setFouls] = useState(0);

    const onClickFoul = () => {
    if (strikes === 0 || strikes === 1) {
        setStrikes(strikes + 1);
        setFouls(fouls + 1);
    } else {
        setFouls(fouls + 1);
    }
    };

    return (
        
    <>
        <Display strikes={strikes} balls={balls} fouls={fouls} />

        <section className = "buttons" >
        <div className = "homeButtons" >

        <button className='homeButtons__touchdown' onClick={onClickStrikes} data-testid="strikes">
        {strikes >= 3 ? setStrikes(0) : null}
        Strike
        </button>

        <button className="homeButtons__fieldGoal" onClick={onClickBalls} data-testid="balls">
        {balls >= 4 ? setBalls(0) : null}
        Ball
        </button>
        
        <button className="awayButtons__touchdown" onClick={onClickFoul} data-testid="fouls">
        Foul
        </button>

        <button className="awayButtons__fieldGoal" data-testid="hit" onClick={() => {
            setBalls(0);
            setStrikes(0);
        }}
        >
        Hit
        </button>
        </div>
    </section>
    </>

    );
};

export default Dashboard;