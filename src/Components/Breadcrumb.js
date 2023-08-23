import React from 'react';
import { Link } from 'react-router-dom';


function Breadcrumb({deckName,deckId}){
console.log(deckId,"!!!!!!!!!!!")
    return(
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="btn btn-link">Home</Link>
              <Link to={`/decks/${deckId}/`} className="btn btn-link">{deckName} </Link>
              <p className="breadcrumb-item active">Study</p>

            </li>
          </ol>
        </nav>
    );
}

export default Breadcrumb