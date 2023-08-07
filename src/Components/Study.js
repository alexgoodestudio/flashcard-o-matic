import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import { readDeck } from "../utils/api";
import { useParams,  useHistory } from "react-router-dom";

function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    const history = useHistory()
    const initialState = {
        index:0,
        flipped: false,
        viewed: false
    }
    const [session, setSession] = useState({...initialState})
    
    const handleFlipped = event => {
        setSession({
            ...session,
            flipped: !session.flipped,
            viewed: true
        })
    }
    
    const handleNext = event => {
        setSession({
            ...session,
            index:session.index + 1,
            flipped:false,
            viewed: false
        })
    }

    const handleReset = () => {
        window.confirm(`Reset?`)
        ? setSession(initialState)
        : history.push("/")
    }


    useEffect(() => {
        readDeck(deckId).then(data => setDeck(data));
    }, [deckId]);


    if (!deck.cards) return <p>Loading...</p>;

    const card = deck.cards[session.index];

    return (
        <div>
            <Breadcrumb deckName={deck.name} />
            <div className="card-deck justify-content-center  mt-4 w-100">
      
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Card {session.index + 1} of {deck.cards.length}
            </h4>
            <p className="card-text">
              {session.flipped
                ? deck.cards[session.index].back
                : deck.cards[session.index].front}
            </p>
          </div>
          <div className="card-footer">
            <div className="btn-wrapper">
              <button
                className="btn btn-secondary mx-1 float-left"
                style={{ width: "5rem" }}
                onClick={handleFlipped}
              >
                Flip
              </button>
              {session.viewed && session.index < deck.cards.length - 1 ? (
                <button
                  className="btn btn-primary mx-1 float-right"
                  style={{ width: "5rem" }}
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                session.viewed && (
                  <button
                    className="btn btn-primary mx-1 float-right"
                    style={{ width: "5rem" }}
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
  
    </div>
    )
}

export default Study;
