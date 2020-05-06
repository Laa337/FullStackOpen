import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Popular = (props) => {
	let votes = [...props.votes]
	let sum = votes.reduce((a, b) => a + b, 0)

	console.log('Sum: ', sum)
	if(sum>0) {
		let max = Math.max( ...votes )  
		console.log('Max: ',max)
	        let popular =0
		for(let i=0;i<votes.length;i++) {
			console.log('Votes[i]: ', votes[i])
			if(votes[i]===max){
				 popular = i
				 break
			}
		}
		console.log('Popular', popular)
		return (<div><h3>The most popular anecdote is</h3><p>{anecdotes[popular]}</p>has {votes[popular]} vote</div>)
	}
	else {return (<></>)}
}

const Button = ({text,handleClick}) => {
	console.log('Text', text)
	console.log('HandleClick', handleClick)
	return <button onClick = { handleClick }>{text}</button>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( Array.from(Array(10), (_,x) => 0)  )


  const selectAnAnecdote = () => {
	let newSelect = Math.floor(Math.random() * anecdotes.length);
	while(newSelect===selected) {
		newSelect = Math.floor(Math.random() * anecdotes.length);
	}
		setSelected(newSelect)					
  }
	console.log('Selected:  ', selected)
	console.log('votes',votes)

  const vote = () => { 
	const copy = [...votes]
	copy[selected]	+=1
	setVotes(copy)
 }
  return (
    <div>
      <h2>Anecdote of the day </h2>
      {props.anecdotes[selected]}
	<br />
		has{votes[selected] } votes
	<br />
      <Button text='Vote!' handleClick={vote } />
      <Button text='Give another!' handleClick={selectAnAnecdote } />
      <br />
      <Popular votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)