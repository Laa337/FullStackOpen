import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({all,av,positive}) => {
	return (
		<div>
			<h2>Statistic</h2>
			<p>All: {all}	        </p>
			<p>Average:  {av} 	</p>
			<p>Positive: {positive*100}% </p>
		</div>
	)

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStat] = useState({'all':0, 'av':0, 'positive':0})

  

  

  const calcStat = (good,neutral,bad) => {
			    let	all = good+neutral+bad
			    let	av =  (good-bad)/(good+bad+neutral)
			    let positive = good /(good+bad+neutral)
			    console.log('good',good)
				return { 'all':all, 'av':av, 'positive':positive}
  		}

  return (
    <div>
      <h2>Give Feedback</h2>
        <button onClick={()=> { setGood(good + 1); setStat(calcStat(good+1,neutral,bad)); console.log('Stats: ',stats)  } }>Good</button>
	<button onClick={()=> { setNeutral(neutral +1); setStat(calcStat(good,neutral+1,bad)) } }>Neutral</button>
	<button onClick={()=> { setBad(bad +1); setStat(calcStat(good,neutral,bad+1))      } }>Bad</button>

        <br/><br/>
        <h3>Statistic:</h3>
        <div className="statistic" id="statistic" >
	   <p>Good:    {good}    </p>
	   <p>Neutral: {neutral} </p>
	   <p>Bad:     {bad}     </p>
 	   <Statistic all={stats.all} av={stats.av} positive={stats.positive} />
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))