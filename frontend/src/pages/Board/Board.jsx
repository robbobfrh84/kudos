import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import CardForm from "../../components/CardForm/CardForm";

import Header from '../../components/header/Header.jsx';
// @ts-ignore
import Footer from "../../components/footer/Footer.jsx";

import "./Board.css";

const Board = () => {
  const { boardId } = useParams();
  const [ boardTitle, setBoardTitle ] = useState("");
  const [ cards, setCards ] = useState([]);
  const [ showForm, setShowForm ] = useState(false);

  useEffect(() => {
    fetchCards();
    fetchBoardData();
  }, [boardId]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/cards/${boardId}`);
      const data = response.data.cards.sort((a, b) => b.votes - a.votes);
      setCards(response.data.cards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const fetchBoardData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/boards/${boardId}`);
      const title = response.data.board.title;
      setBoardTitle(title);
    } catch (error) {
      console.error("Error fetching board data:", error);
    }
  };

  const handleDelete = async (cardId) => {
    try {
      await axios.delete(`http://localhost:3001/cards/${cardId}/board/${boardId}`);
      fetchCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCreateSuccess = (newCard) => {
    if (newCard && newCard.card_id) {
      setCards([...cards, newCard]);
      setShowForm(false);
    } else {
      console.error("Invalid card data received:", newCard);
    }
  };

  return (
    <div>

      <Link to="/">
        <span className="back-arrow"></span>
      </Link>

      <Header />

      <h2> {boardTitle}</h2>
      <div className="center-create-button">
        <button className="create-card-btn" onClick={toggleForm}>
          Create a Card
        </button>
        {showForm && (
          <CardForm
            boardId={boardId}
            onSuccess={handleCreateSuccess}
            onClose={toggleForm}
          />
        )}
      </div>

      <div className="card-list">
        {cards.map((card) => (
          <div className="card-preview" key={card.card_id}>
            <Card
              key={card.card_id}
              card={card}
              onDelete={() => handleDelete(card.card_id)}
            />
          </div>
        ))}
      </div>

      <Footer />
      
    </div>
  );
};

export default Board;