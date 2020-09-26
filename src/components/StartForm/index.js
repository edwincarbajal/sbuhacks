import React, { useState } from "react";
import axios from "axios";

const StartForm = ({ storeToken }) => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios({
      method: "post",
      url: "https://bronze-dragonfly-2737.twil.io/create-token",
      data: {
        identity: name,
      },
    });

    const jwt = result.data;
    storeToken(jwt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Display name:
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Room to join:
        <br />
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Join Video Chat</button>
    </form>
  );
};

export default StartForm;
