import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text,value}) => { return  (<div>{text} : {value} </div>) }

const Statistics = ( props ) => {	
		
		let [good,neutral,bad,all,av,positive] = props.stats
		console.log('All: ',all)
		if (all>0) {  
			return (
			<div>
				<h2>Statistic</h2>
		  	   <Statistic text="good" value ={good} />
     		   	   <Statistic text="neutral" value ={neutral} />
     		    	   <Statistic text="bad" value ={bad} />
			   <br />
			   <Statistic text="all" value ={all} />
			   <Statistic text="av" value ={av} />
			   <Statistic text="positive" value ={positive} />
			</div> 
			)
		}
		return (
		<div>
			<h3>No statistic to show</h3>
		</div>
		)
}

const Button = ({text,handleClick}) => {
	console.log('Text', text)
	console.log('HandleClick', handleClick)
	return <button onClick = { handleClick }>{text}</button>
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
			    console.log('good',handlers['good'])
				return { 'all':all, 'av':av, 'positive':positive}
  		}

  const handlers = { 'good' : () => { setGood(good+1);  setStat(calcStat(good+1,neutral,bad)) }, 
		     'neutral' : () => { setNeutral(neutral+1);  setStat(calcStat(good,neutral+1,bad)) }, 
		     'bad' : () => { setBad(bad+1);  setStat(calcStat(good,neutral,bad+1)) } 
		 };

  return (
    <div>
      <h2>Give Feedback</h2>
     {/*  <button onClick={()=> { setGood(good + 1); setStat(calcStat(good+1,neutral,bad));  } }>Good</button>  */}
     {/*	<button onClick= { handlers['good']  }>Good</button>						*/}
	<Button text='Good' handleClick={handlers['good']} />
	<Button text='Neutral' handleClick={handlers['neutral']} />
	<Button text='Bad' handleClick={handlers['bad']} />
	

        <br/><br/>
        <Statistics stats = {[good,neutral,bad,stats.all,stats.av,stats.positive]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))