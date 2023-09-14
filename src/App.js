import { useState } from 'react';
import './App.css';
import StartCard from './components/StartCard';
import QuestionCard from './components/QuestionCard';



function App() {
  
  // Hide and show start quiz and questions

  const [showFirst, setShowFirst] = useState(true);
  const [showQuestions, setShowQuestions] = useState(false);

  const questClick = () =>{
    setShowQuestions(true);
  }

  // Questions Array

  

  


  return (
    <div className="App container-fluid">
      <div className='app-content '>
         { !showQuestions && (<StartCard onClick={questClick} />) }
         { showQuestions && <QuestionCard /> }
      </div>
    </div>
  );
}

export default App;
