
import { Link } from 'react-router-dom';


function Breadcrumb({deckName}){

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