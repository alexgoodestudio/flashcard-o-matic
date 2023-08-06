import React from "react";
import { readDeck } from "../utils/api";


function NewCard({id}){


return(
    <>
        <h3>{id}</h3>
        <form>

            <div className="form-group">
            <label htmlFor="front"> Front</label>
            <textarea className="form-control" name="front" placeholder="Front Side of Card"></textarea>
            </div>

            <div className="form-group">
            <label htmlFor="back"> Back</label>
            <textarea className="form-control" name="back" placeholder="Back Side of Card"></textarea>
            </div>

        </form>
        <button className="btn btn-secondary mr-2">Done</button>
        <button className="btn btn-primary">Save</button>
    </>
)
}

export default NewCard