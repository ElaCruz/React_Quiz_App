import React from 'react';
import '../styles/StartCard.css';
// import StartMain from './StartMain';

function StartCard({onClick, showQuest}) {
    return (
        <div className='row justify-content-center align-items-center'>
            <div className="col-11 col-md-8 col-lg-6">
                <div className="start-card h-100 px-2 px-lg-3 py-3 py-lg-4">
                    <p className="h1 text-white text-center my-5">
                        Quiz Game
                   </p>
                    <div className="btn-cover d-flex justify-content-center mt-5">
                        <button className="btn outline-none fw-bold start-btn  px-4 py-2" onClick={onClick} >
                            Start Quiz
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartCard;