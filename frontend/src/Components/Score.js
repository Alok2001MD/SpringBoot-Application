import React from 'react'
import Question from './Question'

function Score({scoreData}) {
  return (
    <div>
     <h1> Your Score is</h1>
     <h3>{scoreData}</h3>
    </div>
  )
}

export default Score
