import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
	return (
	    <header>
      		<h1>{props.course}</h1>
    	    </header>
	)
}

const Content = (props) => {
	return (
		<main>
			<p>{props.exercise[0]} : {props.exercise[1] }  </p>
			<p>{props.exercise[2]} : {props.exercise[3] }  </p>
			<p>{props.exercise[4]} : {props.exercise[5] }  </p>
		</main>
	)	
	
}

const Total = (props) => {
	return (
		<footer>
			<p>Number of exercises:  {props.sum} </p>
		</footer>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content exercise = {[part1,exercises1,part2,exercises2,part3,exercises3]}/>
      <Total sum= {exercises1 + exercises2 + exercises3} />
    
      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))