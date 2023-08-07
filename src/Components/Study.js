import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";

function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        readDeck(deckId).then(data => setDeck(data));
    }, [deckId]);

    const handleNext = () => {
        if (currentIndex < deck.cards.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setFlip(false);
        }
    };

    if (!deck.cards) return <p>Loading...</p>;

    const card = deck.cards[currentIndex];

    return (
        <div>
            <Breadcrumb deckName={deck.name} />
            <h2>Study: {deck.name}</h2>
            <div className="card p-5">
                {flip ? <div className="d-block">
                    <h3>{currentIndex + 1} of {deck.cards.length}</h3>
                    {card.back}
                    <div className="d-block">
                        <button className="btn btn-primary ml-3" onClick={handleNext}>Next</button>
                        <button className="btn btn-secondary m-3" onClick={() => setFlip(!flip)}>Flip</button>
                    </div>
                </div> :
                    <div className="d-block">
                        <h3>Card {currentIndex + 1} of {deck.cards.length}</h3>
                        {card.front}
                        <div className="d-block">
                            <button className="btn btn-secondary m-3" onClick={() => setFlip(!flip)}>Flip</button>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Study;
