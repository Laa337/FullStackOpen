import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToValue = value => value + 1

  return (
    <div>
      <h2>Give Feedback</h2>
        <button onClick={()=> setGood(addToValue(good))}>Good</button>
	<button onClick={()=> setNeutral(addToValue(neutral))}>Neutral</button>
	<button onClick={()=> setBad(addToValue(bad))}>Bad</button>

        <br/><br/>
        <h3>Statistic:</h3>
        <div className="statistic" id="statistic" >
	   <p>Good:    {good}    </p>
	   <p>Neutral: {neutral} </p>
	   <p>Bad:     {bad}     </p>
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))