import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
	return (
	    <header>
      		<h1>{props.course}</h1>
    	    </header>
	)
}

const Part = (props) => {
	return (
		<>
			<p> {props.part} : {props.exercises }  </p>
		</>
	)
}

const Content = (props) => {
	return (
		<main>
			<Part part={props.exercise[0]} exercises={props.exercise[1] } />
			<Part part={props.exercise[2]} exercises={props.exercise[3] } />
			<Part part={props.exercise[4]} exercises={props.exercise[5] } />
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