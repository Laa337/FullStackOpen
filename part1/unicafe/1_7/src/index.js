import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStat] = useState({'all':0, 'av':0, 'pos':0})

  

  const addToValue = value => value + 1

  const calcStat = (good,neutral,bad) => {
			    let	all = good+neutral+bad
			    let	av =  (good-bad)/(good+bad+neutral)
			    let pos = good /(good+bad+neutral)
			    console.log('good',good)
				return { 'all':all, 'av':av, 'pos':pos}
  		}

  return (
    <div>
      <h2>Give Feedback</h2>
        <button onClick={()=> { setGood(addToValue(good)); setStat(calcStat(addToValue(good),neutral,bad)); console.log('Stats: ',stats)  } }>Good</button>
	<button onClick={()=> { setNeutral(addToValue(neutral)); setStat(calcStat(good,addToValue(neutral),bad)) } }>Neutral</button>
	<button onClick={()=> { setBad(addToValue(bad)); setStat(calcStat(good,neutral,addToValue(bad)))      } }>Bad</button>

        <br/><br/>
        <h3>Statistic:</h3>
        <div className="statistic" id="statistic" >
	   <p>Good:    {good}    </p>
	   <p>Neutral: {neutral} </p>
	   <p>Bad:     {bad}     </p>
 	   <p><br/> All: {stats.all}</p>
	   <p>Average: {stats.av}</p>
	   <p>Positive: {stats.pos*100}%</p>
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))