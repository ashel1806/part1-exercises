import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({text}) => <p>{text}</p>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Best = ({ points, anecdotes }) => {
  let max = 0;
  let index = 0;

  for(let i = 0; i < points.length; i++){
    if(points[i] > max){
      max = points[i]
      index = i;
    }
  }

  if(max === 0) {
    return (
      <div>
        <Display text="You need to vote first" />
      </div>
    )
  }

  // console.log(points)

  return (
    <div>
      <Display text={anecdotes[index]} />
      <Display text={`has ${points[index]} votes`} />
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(6).fill(0)
  )  

  const handleSelectClick = () => {
    setSelected(Math.floor(Math.random() * (6 - 0) + 0));
  }

  const handleCountClick = () => {
    let copy = [...points];
    copy[selected] += 1
    setPoints(copy);
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <Display text={props.anecdotes[selected]} />
      <Display text={`has ${points[selected]} votes`} />
      <Button 
        onClick={handleSelectClick}
        text="next anecdote"
      />
      <Button 
        onClick={handleCountClick}
        text="vote"
      />
      <h1>Anecdote with most votes</h1>
      <Best 
        points={points} 
        anecdotes={anecdotes}  
      />
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