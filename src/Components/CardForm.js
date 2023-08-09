import React, { useEffect, useState } from 'react';
import { readDeck, readCard, updateCard, createCard } from '../utils/api';
import { Link, useParams, useHistory } from 'react-router-dom';

function CardForm() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({ front: "", back: "" });

  useEffect(() => {
    readDeck(deckId)
      .then(data => setDeck(data))
      .catch(error => console.error("Error fetching deck:", error));
    if (cardId) {
      readCard(cardId)
        .then(data => setCard(data));
    }
  }, [deckId, cardId]);

  const history = useHistory();

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleDone = () => {
    history.goBack();
  };

  const handleCardAction = (event) => {
    event.preventDefault();
    const actionType = cardId ? 'update' : 'create';
    const cardAction = actionType === 'update' ? updateCard : createCard;

    cardAction(deckId, card)
      .then((data) => {
        if (actionType === 'update') {
          setCard(data);
          history.push(`/decks/${deckId}`);
        } else {
          setCard({ front: "", back: "" });
        }
      })
      .catch(error => {
        console.error(`Error ${actionType}ing card:`, error);
        if (error.json) {
          return error.json().then(err => {
            console.log("Error details:", err);
          });
        } else {
          console.log("Error details:", error.message);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleCardAction}>
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          onChange={handleChange}
          value={card.front}
        />
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          onChange={handleChange}
          value={card.back}
        />
        <button type="submit" className="btn btn-primary mt-2">Save</button>
        <button className="btn btn-secondary mt-2" onClick={handleDone}>{cardId ? "Done" : "Cancel"}</button>
      </form>
    </>
  );
}

export default CardForm;
