// import React, { useState, useEffect } from 'react';
// import {  useHistory, useParams } from 'react-router-dom';
// import { readDeck, createCard } from "../utils/api";

// function NewCard() {
//   // Get deckId from useParams hook
//   const { deckId } = useParams();

//   const history = useHistory()

//   function handleDone(){
//     history.goBack();
// }

//   // Initialize state for deck and card using useState hook
//   const [deck, setDeck] = useState({});
//   const [card, setCard] = useState({ front: "", back: "" });

//   // useEffect hook to fetch deck data when component mounts
//   useEffect(() => {
//     // Call readDeck function and handle promise
//     readDeck(deckId)
//       .then(response => {
//         // When promise resolves, set deck state
//         setDeck(response);
//       })

//   }, [deckId]);

//   // update card state when input values change
//   const handleChange = ({ target }) => {
//     setCard({
//       ...card,
//       [target.name]: target.value,
//     });
//   };



//   const handleSubmit = (event) => {
    
//     event.preventDefault();
  
//     // create new card using createCard function
//     createCard(deckId, card)
//       .then(() => {
//         // Reset card state to initial state
//         setCard({ front: "", back: "" });
//       })
//       .catch((error) => {
//         // Catch any errors
//         console.error(error);
//       });
//   };

//   return (
//     <React.Fragment>

//       <h3>{`${deck.name}`} </h3>
//       <h3> Add Card </h3>
 
//       {/* Form for new card */}
//       <form onSubmit={handleSubmit}>
       
//           {/* Two columns for front and back inputs */}
          
//             <label htmlFor="front">Front</label>
//             <textarea
//               className="form-control "
//               id="front"
//               name="front"
//               onChange={handleChange}
//               value={card.front}
//             />
       
//             <label htmlFor="back">Back</label>
//             <textarea
//               className="form-control "
//               id="back"
//               name="back"
//               onChange={handleChange}
//               value={card.back}
//             />
         
     
//         {/* need save button to submit form */}
//         <button type="submit" className="btn btn-primary mt-2">
//           Save
//         </button>
//       </form>
//       {/* Done button outside form */}
//       <button className="btn btn-secondary mt-2" onClick={handleDone}>Done</button>
//     </React.Fragment>
//   );
// }

// export default NewCard;
