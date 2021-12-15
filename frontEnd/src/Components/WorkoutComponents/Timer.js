import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {

        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
        
    }, [isActive, seconds]);


    return (

        <>
        <h1 className="rest-timer-title">Rest Timer</h1>
            <div className="timer-container">

                <div className="display-time">
                    {seconds}s
                </div>

                <div className="row">

                    <button className={`timer-button timer-button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                        {isActive ? 'Pause' : 'Start'}
                    </button>

                    <button className="timer-button" onClick={reset}>
                        Reset
                    </button>

                </div>
            </div>
        </>
    );
};

export default Timer;