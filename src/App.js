import React, { useState, useEffect } from "react";
import TwilioVideo from "twilio-video";

import StartForm from "./components/StartForm";

import "./App.css";

const Video = ({ token }) => {
  useEffect(() => {
    TwilioVideo.connect(token, {
      video: true,
      audio: true,
      name: "test",
    }).then(() => console.log("succesfully joined room!"));
  }, [token]);

  return <p>video</p>;
};

function App() {
  const [token, setToken] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {!token ? <StartForm storeToken={setToken} /> : <Video token={token} />}
      </header>
    </div>
  );
}

export default App;
