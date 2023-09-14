import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/Timer.css'

function Timer({seconds, progressFill}) {

    // const [progress, setProgress] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setProgress((prevProgress) => {
    //         if (prevProgress === 100) {
    //         clearInterval(interval);
    //         return 0;
    //         }
    //         return prevProgress + 10;
    //     });
    //     }, 1200);

    //     return () => {
    //       clearInterval(interval);
    //     };
    // }, []);

    // const test = progress / 10;  
    // const percent =  `${progress}%` ; 

    return (
        <div>
            <div>
                <p className="h1 text-white text-center">{seconds}</p>
            </div> 

            <div className='incomplete-bar'>
                <div className="progress-bar" style={{ width: progressFill }}></div>
          
            </div>

        </div>    
    );
}

export default Timer;