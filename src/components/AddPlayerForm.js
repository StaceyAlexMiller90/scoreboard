import React, {useState} from 'react'

const AddPlayerForm = (props) => {
  const [name, set_name] = useState("");

  const addNewPlayer = () => {
    props.addPlayer(name)
    set_name("")
  }

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input value={name} onChange={e => set_name(e.target.value)} type="text" placeholder="Name" />{" "}
        <button onClick={addNewPlayer}>Add</button>
      </p>
    </div>
  );
}

export default AddPlayerForm