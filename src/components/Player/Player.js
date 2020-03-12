import React from 'react'
import './Player.scss'

const Player = (props) => {

  const addScore = () => {
    props.increment(props.id)
  }

  return (
    <ul className="Player">
      <li><strong>Player:</strong> {props.name} (<strong>Score: </strong>{props.score})<br></br></li>
      <button onClick={addScore}>Click to add score</button>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}/>
    </ul>
  );
}

export default Player