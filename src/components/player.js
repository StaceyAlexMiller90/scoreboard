import React from 'react'

const Player = (props) => {

  const addScore = () => {
    props.increment(props.id)
  }

  return (
    <ul className="Player">
      <li><strong>Player:</strong> {props.name} (<strong>Score: </strong>{props.score})</li>
      <button onClick={addScore}>Click to add score</button>
    </ul>
  );
}

export default Player