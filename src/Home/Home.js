import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";

function Home() {

    let [decks, setDecks] = useState([]);

    useEffect(() => {
        listDecks().then(dataFromApi => setDecks(dataFromApi));
    }, [])


    const displayDeck = decks.map((d) => {
        return (
            <div className="p-4 card" key={d.id}>
                <h4>{d.name}</h4>
                <p> {d.description}</p>
                <div className="d-flex bd-highlight">
                    <Link to={`/decks/${d.id}`} className="p-2 bd-highlight"><button className=" btn btn-secondary">View</button></Link>
                    <Link to={`/decks/${d.id}/study`} className="p-2 bd-highlight"><button className=" btn btn-primary">Study</button></Link>
                    <div className="ml-auto p-2 bd-highlight "><button className=" btn btn-danger fa fa-trash"></button></div>
                </div>
            </div>
        )
    })

    return (
        <article className="">
            <Link to={`/decks/new`}><button className="btn btn-secondary mb-1 ">+ Create Deck</button></Link>
            {displayDeck}
        </article>
    )
}

export default Home;