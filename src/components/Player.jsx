import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function changeHandler(event) {
    setIsSubmit(false);
    setPlayerName(event.target.value);
  }

  function submitHandler() {
    setIsSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmit ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={changeHandler} value={playerName} />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
