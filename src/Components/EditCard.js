import React, { useEffect, useState } from 'react'
import { readDeck, readCard, updateCard } from '../utils/api'
import { Link, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function EditCard(){
    const params= useParams()

    // Initialize state for deck and card using useState hook
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({ front: "", back: "" });

    useEffect(() => {
        // Fetch the deck and card data when the component mounts
        readDeck(params.deckId)
            .then(deckData => setDeck(deckData));

        readCard(params.cardId)
            .then(cardData => setCard(cardData));
    }, [params.deckId, params.cardId]);

    const history = useHistory()
  
    function handleDone(){
      history.goBack();
    }

    // Define handleChange function to update card state when input values change
    const handleChange = ({ target }) => {
      setCard({
        ...card,
        [target.name]: target.value,
      });
    };
  
    // Define handleSubmit function to create new card when form is submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard(card.id, card)
            .then(() => {
                // back to the previous page
                handleDone();
            })
    }

    return(
        <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/deck/${params.deckId}`}>
            {deck.name}
            </Link>
          </li>
          <li>
            <p>
                {`/ Edit Card ${card.id}`}
            </p>
          </li>
        </ol>
      </nav>
             {/* Display deck name in heading */}
      <h3>{deck.name}: Add Card</h3>
      {/* Form for new card */}
      <form onSubmit={handleSubmit}>
          
            <label htmlFor="front">Front</label>
            <textarea
              className="form-control "
              id="front"
              name="front"
              onChange={handleChange}
              value={card.front}
            />
       
            <label htmlFor="back">Back</label>
            <textarea
              className="form-control "
              id="back"
              name="back"
              onChange={handleChange}
              value={card.back}
            />
         
     
        {/* Save button to submit form */}
        <button onSubmit={handleSubmit} className="btn btn-primary mt-2" >
          Save
        </button>
      </form>
      {/* Done button outside form */}
      <button className="btn btn-secondary mt-2" onClick={handleDone}>Cancel</button>
        </>
    )

}
export default EditCard
