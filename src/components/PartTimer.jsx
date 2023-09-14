import React from 'react';
import { useState, useEffect } from 'react';
import picOne from '../images/image1.png';
import Timer from './Timer.jsx';

function PartTimer() {


   
    return (
        <div>
           <img src={picOne}  alt="" className='img-fluid mb-3 '/>
           <Timer />
           
           {/* <ProgressBar /> */}
            {/* <p className="h1 fw-bold text-white text-center mt-2">{seconds}</p>
            <ProgressBar bgcolor={' #79c9fe'} completed={() => setIsRunning(true)} /> */}
        </div>
    );
}

export default PartTimer;