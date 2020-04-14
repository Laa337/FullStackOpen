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
			<p> {props.name} : {props.exercises }  </p>
		</>
	)
}

const Content = (props) => {
	return (
		<main>
			console.log("Content:  " + )
			<Part  name = {props.exercises[0]}   exercises = {props.exercises[1]} />
			<Part  name = {props.exercises[2]}   exercises = {props.exercises[3]} />
			<Part  name = {props.exercises[4]}   exercises = {props.exercises[5]} />
		
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content exercises = {propsToArray(course.parts)} />
      <Total sum= {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    
      
    </>
  )
}

const propsToArray = (p) => {
   let t = []
   for (let i = 0; i < p.length; i++) {
	 t = t.concat(Object.keys(p[i]).map(j => p[i][j]))
	 
   }
return t;
} 

ReactDOM.render(<App />, document.getElementById('root'))