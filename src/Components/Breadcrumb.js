import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { listDecks } from '../utils/api';

function Breadcrumb({deckName}){

  // console.log(deckName,"*****")
    return(
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="btn btn-link">Home</Link>
              <Link to="/decks/:deckId/study" className="btn btn-link">{deckName} </Link>
              <Link to="/decks/:deckId/study" className="btn btn-link">Study</Link>
            </li>
          </ol>
        </nav>
    );
}

export default Breadcrumb