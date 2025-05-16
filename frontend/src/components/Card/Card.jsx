import React, { useState } from "react";
import axios from "axios";

import "./Card.css";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const Card = ( { card, onDelete } ) => {
  const [votes, setVotes] = useState(card.votes || 0);

  const { 
    title, 
    description, 
    gif, 
    owner,
    card_id: cardId, 
    board_id: boardId 
  } = card;

  const handleUpvote = async () => {
    try {
      await axios.patch( `${SERVER_URL}/cards/${cardId}/board/${boardId}`,
        { votes: votes + 1, }
      );
      setVotes(votes + 1);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div className="card">

      <h3>{title}</h3>
      <p>{description && ("Message: "+description)}</p>
      <img src={gif} alt="GIF" />
      <p>{owner && ("Author: "+owner)}</p>

      <button className='upvote-button' onClick={handleUpvote}>
        Upvote: {votes}
      </button>
      
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>

    </div>
  );
};

export default Card;