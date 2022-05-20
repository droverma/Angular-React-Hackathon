import React, { useEffect, useState } from 'react';

const Timer = (props) => {
    const { initialHours = 0, initialMinute = 0, initialSeconds = 0, setExpired } = props;
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                setExpired(true,props.index);
                clearInterval(myInterval);
            }
            else {
                setSeconds(seconds - 1);
                if (seconds === 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                    if (minutes === 0) {
                        setMinutes(59);
                        setHours(hours - 1)
                    }
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
            {hours === 0 && minutes === 0 && seconds === 0
                ? <h1 style={{ color: 'red' }}>Expired !!!</h1>
                : <h1>
                    {hours < 10 ? `0${hours}` : hours}
                    :{minutes < 10 ? `0${minutes}` : minutes}
                    :{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            }
        </div>
    )
}

export default Timer;
