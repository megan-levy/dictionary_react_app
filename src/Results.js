import React, {useState} from "react";

export default function Results(props) {
    //let word = (props.results.word);
    //let phoenetics = (props.results.phoenetics[0])

    if (props.results) {
        return (
            <div className = "Results">
                <div className = "row">
                    <div className = "col-5">
                        <h1>{props.results.word}</h1>
                    </div>  
                    <div className = "col-2">
                        <h2><small>phoenetics</small></h2>
                    </div>
                </div>
                <h2>Definition</h2>
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