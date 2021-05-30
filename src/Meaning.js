import React from "react";

export default function Meaning(props) {
    return (
        <div className = "Definition">
        <h3>
            <small>
            {props.meaning.partOfSpeech}
            </small>
        </h3>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key = {index}>
                <p>
                 - {definition.definition}
                <br/>
                 <em>{definition.example}</em>
                </p>
                </div>
            );
        })}
        </div>
    )
}