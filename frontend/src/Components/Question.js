import React, { useState, useEffect } from 'react';
import "../index.css"
import axios from 'axios';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [scoreData, setScoreData] = useState();

  useEffect(() => {
    fetchQuestions();
  }, []);
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Quiz/get/8');
      setQuestions(response.data);

    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleOptionSelect = (option) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = option;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length + 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setShowScore(true);
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    const questionIds = questions.map(question => question.id);
    const requestData = questionIds.map((id, index) => ({
      id: id,
      response: responses[index] 
    }));
  
    try {
      const response = await axios.post("http://localhost:8080/Quiz/submit/8", requestData);
  
      console.log("Score",response.data)
      setScoreData(response.data);
      setShowScore(true);
      console.log(scoreData)

    } catch (error) {
      console.error('Error submitting quiz:', error);
    }

  }
  return (
    
    <div className='main'>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div>
          <h2>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].questionTitle}`}</h2>
          <p>{questions[currentQuestionIndex].questionText}</p>
         <form className='form'>
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option1} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option1} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option1)} 
            />
            <label>{questions[currentQuestionIndex].option1}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option2} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option2} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option2)} 
            />
            <label>{questions[currentQuestionIndex].option2}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option3} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option3} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option3)} 
            />
            <label>{questions[currentQuestionIndex].option3}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option4} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option4} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option4)} 
            />
            <label>{questions[currentQuestionIndex].option4}</label><br/>
          </form>
         
          {currentQuestionIndex>0 &&<button onClick={handlePrevious} className='previous'>previous</button>}

          {currentQuestionIndex < questions.length - 1 &&<button onClick={handleSubmit} className='next'>Next</button>}
          
          {currentQuestionIndex === questions.length - 1 && <button onClick={submit}>Submit</button>}
          {
          showScore && scoreData && (

            <div>
            
              <h2>Your Score:</h2>
              <h3>{scoreData}</h3>

            </div>
          )}  
        </div>
      )}
    </div>
  );
}

export default Question;
