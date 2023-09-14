import React from 'react';
import { useState } from 'react';
import '../styles/PartQuestion.css'
import Timer from './Timer';
import PicOnee from '../images/image1.png';

function PartQuestion() {

    
    // var QuestionBank = [
    //     {
    //         Image : <img src={PicOnee} alt="" className='img-fluid mb-3' />,
    //         Timer: <Timer />,
    //         Question: "A period of 1,000 years is called?",
    //         Answers: [
    //             {Answer: "Century", isCorrect: false },
    //             {Answer: "Millennium", isCorrect: true },
    //             {Answer: "Decade", isCorrect: false }
    //         ],
    //         Indicator: <DotIndicator />
    //     },

    //     {
    //         Question: "What is the 5th book of the Bible?",
    //         Answers: [
    //             {Answer: "Deuteronomy", isCorrect: true },
    //             {Answer: "Numbers", isCorrect: false },
    //             {Answer: "Joshua", isCorrect: false }
    //         ]
    //     }
    // ]


    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const tryy = {QuestionBank};
          


    return (
        
        <div className='row justify-content-center'> 
            {/* <p className="fs-4 text-center text-white my-2">{QuestionBank[currentQuestion].Question}</p> */}
            <div className="col-12">
                {/* <div className="mt-3 text-center ms-0 ms-lg-4 d-lg-flex  gap-lg-2 ">
                    {QuestionBank[currentQuestion].Answers.map((answer) => (
                        <button className='answer-btn fw-normal m-2 m-lg-0 outline-none px-3 py-2'>
                            {answer.Answer}
                        </button>
                    )
                    )}
                </div> */}

            </div>  

        
            <div className="col-12 mt-1 mt-md-5">
                {/* <DotIndicator /> */}
                {/* {first.Indicator} */}
            </div> 



        </div>    
        
    );
}

export default PartQuestion;