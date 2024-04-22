import React, { useState, useEffect } from 'react';
import "../index.css"
import axios from 'axios';
import Score from './Score';
import { useNavigate } from 'react-router-dom';


function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [scoreData, setScoreData] = useState();
  
  const navigate = useNavigate();
  //This UseEffect makes sure that it fetch the data only once when the component render it prevents refetching of data
  useEffect(() => {
    fetchQuestions();
  }, []);

  //Method to fetch questions
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Quiz/get/8');
      setQuestions(response.data);

    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
//to fetch info from option which we have selected
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
      navigate("/score");
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }

  }
  return (
    
    <div className=' p-20 pt-20'>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div>
          <h1 className='text-2xl font-bold'>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].questionTitle}`}</h1>
          <p>{questions[currentQuestionIndex].questionText}</p>
         <form className='text-lg pt-5'>
          <div className='mb-20'>
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option1} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option1} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option1)} 
              className='mb-6'
            />
            <label>{questions[currentQuestionIndex].option1}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option2} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option2} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option2)} 
              className='mb-6'
            />
            <label>{questions[currentQuestionIndex].option2}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option3} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option3} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option3)} 
              className='mb-6'
            />
            <label>{questions[currentQuestionIndex].option3}</label><br/>
            
            <input 
              type='radio' 
              name='option' 
              value={questions[currentQuestionIndex].option4} 
              checked={responses[currentQuestionIndex] === questions[currentQuestionIndex].option4} 
              onChange={() => handleOptionSelect(questions[currentQuestionIndex].option4)} 
              className='mb-6'
            />
            <label>{questions[currentQuestionIndex].option4}</label><br/>
            </div>
          </form>
         
          {currentQuestionIndex>0 &&<button onClick={handlePrevious} className="bg-blue-700 text-white rounded-md py-2 px-2">previous</button>}

          {currentQuestionIndex < questions.length - 1 &&<button onClick={handleSubmit} className="mt-18 ml-10 bg-blue-700 text-white py-2 px-4 rounded-md">Next</button>}
       
          
          {currentQuestionIndex === questions.length - 1 && <button onClick={submit} className="mt-18 ml-10 bg-blue-700 text-white py-2 px-4 rounded-md">Submit</button>}
        

          {showScore && scoreData && <Score data={scoreData}/>}  
        </div>
      )}
    </div>
  );
}

export default Question;
