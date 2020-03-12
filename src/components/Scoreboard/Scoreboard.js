import React, {useState} from 'react'
import Player from '../Player/Player.js'
import AddPlayerForm from '../AddPlayerForm'
import './Scoreboard.scss'

const Scoreboard = () => {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  
  const compare = (player_a, player_b) => {
    if(sort_by === 'score') {
    return player_b.score - player_a.score
    } else {
      return player_a.name.localeCompare(player_b.name)
    }
  }

  const increment = (id) => {
    const addedScore = sortedPlayers.map(player => {
      if(id === player.id) {
        player.score += 1
        return player
      } return player
    }) 
    set_players(addedScore)
  }

  const reset = () => {
    const noScores = sortedPlayers.map(player => {
      player.score = 0
      return player
    }) 
    set_players(noScores)
  }

  const randomise = () => {
    const randomScores = sortedPlayers.map(player => {
      player.score = Math.round(Math.random()*100)
      return player
    })
    set_players(randomScores)
  }

  const [sort_by, set_sort_by] = useState("score")

  const sortedPlayers = [...players].sort(compare)
 
  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const addPlayer = (nameToAdd) => {
    const newPlayer = {id: players.length+1, name: nameToAdd, score: 0}
    set_players([...players, newPlayer])
  }

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
          <p> Sort order:{" "}
            <select onChange={change_sorting}>
              <option value="score">Sort by score</option>
              <option value="name">Sort by name</option>
            </select>
          </p>
          <button onClick={reset}>Reset Scores</button>
          <button onClick={randomise}>Go Crazy</button>
          {sortedPlayers.map(player => 
          <Player id ={player.id} name={player.name} score={player.score} increment={increment}/>)}
          <AddPlayerForm addPlayer={addPlayer}/>
    </div>
  )
}

export default Scoreboard