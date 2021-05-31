import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {

    if (props.results) {
        return (
            <div className = "Results">
                    
                    <div className = "WordSearched">
                    <div className = "row">
                        <div className = "col-5">
                            <h1>{props.results.word}</h1>
                        </div>
                        <div className = "col-1">
                        {props.results.phonetics.map(function(phonetic, index){
                        return (
                            <div key = {index}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        )
                    })}
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-play-circle-fill"
                            viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                    </div>
                    </div>
                </div>
                   
        
                {props.results.meanings.map(function(meaning, index){
                    return (
                        <div key = {index}>
                            <Meaning meaning = {meaning} />
                        </div>
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
    
}