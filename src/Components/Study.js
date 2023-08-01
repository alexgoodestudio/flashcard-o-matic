import React from "react";
import Breadcrumb from "./Breadcrumb";
import { readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Study(){

    const {deckId} = useParams()
    const [deckName, setDeckName]=useState({})

    useEffect(()=>{
      readDeck(deckId).then(data => setDeckName(data))
    },[])

    return(
        <div>
            <h4>Study</h4>
            <Breadcrumb deckName={deckName.name}/>
            <div>
                
            </div>
        </div>
    )
}

export default Study;