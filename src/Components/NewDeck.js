import React from "react";
import { useHistory } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function NewDeck(){
    const history = useHistory()

    function handleCancel(){
        history.goBack();
    }

    function handleSubmit(deck){
        createDeck(deck).then((savedDeck) => history.push(`/decks/${savedDeck.id}`) )
    }

    return(
        <div className="">  
            <Breadcrumb />
            <DeckForm 
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
         </div>
    )
}
export default NewDeck

