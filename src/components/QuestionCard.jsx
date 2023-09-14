import React from 'react';
import {useState,useEffect} from 'react';
import PartTimer from './PartTimer';
import PartQuestion from './PartQuestion';
import Timer from './Timer';
import PicOnee from '../images/image1.png';
import PicTwo from '../images/image 2.png';
import PicThree from '../images/image3.png';
import PicFour from '../images/imagecalculate.png';
import PicFive from '../images/imagemusic.png';
import PicSix from '../images/football.png';
import PicSeven from '../images/imagetiktok.png';
import PicEight from '../images/octopus.png';
import PicNine from '../images/centaur.png';
import PicTen from '../images/mt.png';
import PicEleven from '../images/ban.png';
import PicTwelve from '../images/bone.png';
import PicThirteen from '../images/face.png';
import PicFourteen from '../images/tink.png' 




function QuestionCard() {

        
    var QuestionBank = [
        {
            Image : <img src={PicOnee} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question: "A period of 1,000 years is called?",
            Answers: [
                {Answer: "Century", isCorrect: false },
                {Answer: "Millennium", isCorrect: true },
                {Answer: "Decade", isCorrect: false }
            ],

        },

        {    
            Image : <img src={PicTwo} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question: "What is the 5th book of the Bible?",
            Answers: [
                {Answer: "Deuteronomy", isCorrect: true },
                {Answer: "Numbers", isCorrect: false },
                {Answer: "Joshua", isCorrect: false }
            ],
            
        },
        

        {    
            Image : <img src={PicThree} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question: "The name for a group of Pandas?",
            Answers: [
                {Answer: "Mock", isCorrect: false },
                {Answer: "Shame", isCorrect: false },
                {Answer: "Embarassment", isCorrect: true }
            ],

        },

        {    
            Image : <img src={PicFour} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question: "What is the value of [Sqrt(36) + 6] ? ",
            Answers: [
                {Answer: "Two", isCorrect: false },
                {Answer: "Twelve", isCorrect: true },
                {Answer: "Twenty_Two", isCorrect: false }
            ],
                      
        },

        {    
            Image : <img src={PicFive} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   '"I will make a man out of you" was a song in?' ,
            Answers: [
                {Answer: "WomanKing", isCorrect: false },
                {Answer: "Mulan", isCorrect: true },
                {Answer: "MonkeyKing", isCorrect: false }
            ],
            
        },

        {    
            Image : <img src={PicSix} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'What country won the most world cups ?' ,
            Answers: [
                {Answer: "Germany", isCorrect: false },
                {Answer: "Argentina", isCorrect: false },
                {Answer: "Brazil", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicSeven} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'Who is the founder of TikTok ?' ,
            Answers: [
                {Answer: "Elon_Musk", isCorrect: false },
                {Answer: "Zhang_Yiming", isCorrect: true },
                {Answer: "Evan_Spiegel", isCorrect: false }
            ],
            
        },

        {    
            Image : <img src={PicEight} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'How many heart(s) have an Octopus ?' ,
            Answers: [
                {Answer: "One_Heart", isCorrect: false },
                {Answer: "Two_Hearts", isCorrect: false },
                {Answer: "Three_Hearts", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicNine} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'Mythological creature with half-horse human?' ,
            Answers: [
                {Answer: "Horse_Man", isCorrect: false },
                {Answer: "Centaur", isCorrect: true },
                {Answer: "Apollorse", isCorrect: false }
            ],
            
        },

        {    
            Image : <img src={PicTen} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'In which country will you find Mt Killimanjaro?' ,
            Answers: [
                {Answer: "Zimbabwe", isCorrect: false },
                {Answer: "South_Afica", isCorrect: false },
                {Answer: "Tanzania", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicEleven} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'Someone from Bangladesh is called...?' ,
            Answers: [
                {Answer: "Bangladeshian", isCorrect: false },
                {Answer: "Bengali", isCorrect: false },
                {Answer: "Bangladeshi", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicTwelve} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'Where is the strongest bone in humans located?' ,
            Answers: [
                {Answer: "Thigh_bone", isCorrect: false },
                {Answer: "Knee_Cap", isCorrect: false },
                {Answer: "Jaw", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicFourteen} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'What is the opposite of "invaluable" ?' ,
            Answers: [
                {Answer: "Valuable", isCorrect: false },
                {Answer: "Vital", isCorrect: false },
                {Answer: "Useless", isCorrect: true }
            ],
            
        },

        {    
            Image : <img src={PicThirteen} alt="" className='img-fluid mb-3 shadow' />,
            Timer: <Timer />,
            Question:   'The study of the human face is called...?' ,
            Answers: [
                {Answer: "Physiognomy", isCorrect: true },
                {Answer: "Faciology", isCorrect: false },
                {Answer: "Phynology", isCorrect: false }
            ],
            
        },

       

    ]



       
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const [chosenAnswer, setChosenAnswer] = useState(null);
    const [dotStatus, setDotStatus] = useState(Array(QuestionBank.length).fill(null));


    //    progress bar and timer  

    const [progress, setProgress] = useState(10);

    useEffect(() => {
       
        const interval = setInterval(() => {
        setProgress((prevProgress) => {
            if (prevProgress === 100) {
            clearInterval(interval);
            return 0;
            }
            return prevProgress + 10;
        });
        }, 1200);

        return () => {
          clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        if (progress === 100 && chosenAnswer === null) {
            handleNextQuestion();
        }
    }, [progress]);




    const test = progress / 10; 
       const percent =  `${progress}%` ; 


   
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [score, setScore] = useState(0);
    // const [showScore, setShowScore] = useState(false);

    // const [chosenAnswer, setChosenAnswer] = useState(null);
    // const [dotStatus, setDotStatus] = useState(Array(QuestionBank.length).fill(null));

  
   
    const handleAnswerResponse = (answerIndex) =>{
        // setChosenAnswer(answerIndex)
        const isCorrect = QuestionBank[currentQuestion].Answers[answerIndex].isCorrect;
        const updatedDotStatus = [...dotStatus];
        updatedDotStatus[currentQuestion] = isCorrect ? 'correct' : 'incorrect';
        setDotStatus(updatedDotStatus);
        
        setChosenAnswer(null);

        if(chosenAnswer === null){
           const updatedDotStatus = [...dotStatus];
           updatedDotStatus[currentQuestion] = 'incorrect';
           setDotStatus(updatedDotStatus);

            const nextQuestion = currentQuestion + 1;
            if(nextQuestion  < QuestionBank.length){
                setProgress(0)
                setCurrentQuestion(nextQuestion );

            } else{
                setShowScore(true);
            }

        }
   

      
        if(isCorrect){
            const updatedDotStatus = [...dotStatus];
            updatedDotStatus[currentQuestion] = 'correct';
            setDotStatus(updatedDotStatus);
            setScore(score + 1/ QuestionBank.length * 100);
            setProgress(0)
           
   
        } 

        if(!isCorrect){
            setProgress(0);
          
        }

       const nextQuestion = currentQuestion + 1;
       if(nextQuestion < QuestionBank.length){
            setCurrentQuestion(nextQuestion);
    
       } else{
        setShowScore(true);
       }


     
    }

    
    const  handleNextQuestion = () =>{
        setChosenAnswer(null);

        if(chosenAnswer === null){
           const updatedDotStatus = [...dotStatus];
           updatedDotStatus[currentQuestion] = 'incorrect';
           setDotStatus(updatedDotStatus);

            const nextQuestion = currentQuestion + 1;
            if(nextQuestion  < QuestionBank.length){
                setProgress(0)
                setCurrentQuestion(nextQuestion );

            } else{
                setShowScore(true);
            }

        }

  
    };

    // Reset Quiz
    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setProgress(0);
        setDotStatus(Array(QuestionBank.length).fill(null));
  
    }

    let resultImage;
    if (score <= 30) {
        resultImage = 'EyesUp.png'
    } else if(score > 30 && score < 50 ) {
        resultImage =  'Sadd.png'
    } 
    else if (score >= 50 && score < 60){
        resultImage = 'OpenMout.png'
    }
      else if (score >= 60 && score < 70){
        resultImage = 'SmileLau.png'
    } 
     else if (score >= 70 && score < 80){
        resultImage = 'SmileBri.png'
    } 
    else if (score >= 80 && score < 85){
        resultImage = 'SmileBlus.png'
    }  
    else if (score >= 85 && score <= 100 ){
        resultImage = 'loveEyes.png'
    } 
   




   


    return (
        <div className='row justify-content-center align-items-center'>
            <div className="col-11 col-md-8 col-lg-6">
                <div className="start-card px-3 py-4 py-lg-4">
                    <div className="row g-3 align-items-center justify-content-around">

                        {showScore ? (
                            
                            <div className='score-section col-12 '>
                                <div className="d-flex justify-content-center">
                                   <img src={resultImage} alt="score" className=' mt-4  emoji'/>
                                </div>
  
                                <p className="text-white h3 text-center mt-1">You scored {score.toFixed(1)}%</p> 
                                
                                <div className="d-flex justify-content-center mt-3">
                                   <button onClick={resetQuiz} className='btn fw-bold start-btn text-center px-4 py-2'>Restart</button>
                                </div>
                                                    
                            </div>
                        ) : 
                         

                        (
                            <>

                            <div className="col-12 col-md-4">
                                <div className="first-part">
                                    <div className="image-container">
                                        {QuestionBank[currentQuestion].Image}
                                    </div>
                                    <div className="mt-2">
                                       <Timer seconds = {test} progressFill = {percent} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-8">
                                <div className="second-part  px-2">
                                    {/* <PartQuestion /> */}
                                    <div className="question mt-2">
                                        <p className="text-white h2 text-center">{QuestionBank[currentQuestion].Question}</p>
                                    </div>

                                    <div className="my-4 text-center ms-0 justify-content-center ms-lg-4 d-lg-flex  gap-lg-2 ">
                                        {QuestionBank[currentQuestion].Answers.map((answer,index) => (
                                            <button className='answer-btn fw-normal m-2 mb-3 m-lg-0 outline-none px-3 py-2 ' onClick={()=>handleAnswerResponse(index)}>

                                                {answer.Answer}
                                            </button>
                                        )
                                        )}
                                        
                                </div>

                                <div className="dots-section d-flex gap-2 mt-3 mt-lg-5 justify-content-center align-items-center">
                                    {dotStatus.map((status,index) =>(
                                        <div key={index}
                                         className={`dot ${status === 'correct' ? 'dot-correct' : status === 'incorrect' ? 'dot-incorrect' : ''}`}
                                        >

                                        </div>
                                    ))}
                                        

                                        
                                </div>
                                </div>
                            </div>

                            </>
                        ) }    
                    </div>

                </div>
            </div>
         
        </div>
    );
}

export default QuestionCard;