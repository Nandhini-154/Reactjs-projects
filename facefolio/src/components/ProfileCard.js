import React, { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, role, image }) => {
  const [likes, setLikes] = useState(0);
  const [followed, setFollowed] = useState(false); // 💡 Follow state

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleFollowToggle = () => {
    setFollowed(!followed);
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
      <button className="like-btn" onClick={handleLike}>
        ❤️ Like {likes}
      </button>
      <button
        className={followed ? "follow-btn followed" : "follow-btn"}
        onClick={handleFollowToggle}
      >
        {followed ? "✔ Following" : "+ Follow"}
      </button>
    </div>
  );
};

export default ProfileCard;
