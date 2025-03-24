import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";

function App() {
  return (
    <div className="App">
      <h1>Facefolio</h1>
      <p>
        A minimal React app to showcase profiles with names, roles, photos, and
        follow/unfollow interaction.
      </p>
      <div className="card-container">
        <ProfileCard name="Nandhini" role="Technical Trainer" image={user1} />
        <ProfileCard name="Meera" role="UI/UX Designer" image={user2} />
        <ProfileCard name="Kavin" role="Backend Developer" image={user3} />
      </div>
    </div>
  );
}

export default App;
