import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";
import "../Layout/header.css"

function Home() {
    let [error, setError] = useState(null);
    let [decks, setDecks] = useState([]);
    let [isLoaded, setIsLoaded]=useState(true)
//set a boolean called isLoaded
useEffect(() => {
    // after listDecks is loaded flip value of "isLoaded" via setIsLoaded
    getDecks()

}, []);

    async function getDecks(){
        const abortController = new AbortController()
        try{
            const response = await listDecks()
            console.log(response,"response")
            setDecks(response)
            setIsLoaded(false)
        }catch(error){
            console.log(error)
            setError(error);
        }
        return () => {
            AbortController.abort()
        }
    }

    function handleDelete(deckIdToDelete) {
        const confirmed = window.confirm(
          "Delete this deck?"
        );
        if (confirmed) {
            deleteDeck(deckIdToDelete)
            .then(() => listDecks())
            .then(data => setDecks(data))
        }
    }
    const displayDeck = decks.map((d) => {
        return (
            
            <div className="p-4 card full" key={d.id}>
                <h4 className="full2">{d.name}</h4>
                <p className="text-muted d-flex">
  {d.cards.length === 1 ? `${d.cards.length} card` : `${d.cards.length} cards`}
</p>
                <p> {d.description}</p>
                <div className="d-flex ">
                    <Link to={`/decks/${d.id}`} className="p-2"><button className=" btn btn-secondary">View</button></Link>
                    <Link to={`/decks/${d.id}/study`} className="p-2"><button className=" btn btn-primary">Study</button></Link>

                    {/* onClick of this button, we pass the handleDelete function the id of the corresponding deck that was clicked */}

                    <div className="ml-auto p-2"><button className=" btn btn-danger fa fa-trash" onClick={() => handleDelete(d.id)} ></button></div>
                </div>
            </div>
        )
    })



    return (
        //if "loaded", displayDeck else: display "loading"
        <article >
        {isLoaded ? (
            <p>Loading.</p>
          ) : (
            <>
            <Link to={`/decks/new`}><button className="btn btn-secondary mb-1 " >+ Create Deck</button></Link>
            {displayDeck}
            </>
          )}

        </article>
    )
}

export default Home;