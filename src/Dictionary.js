import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("")
    function search (event) {
        event.preventDefault();
        alert (`searching for '${keyword}' definition`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className = "Dictionary">
            <form onSubmit = {search}>
                <input 
                type = "search" 
                autoFocus = {true} 
                onChange = {handleKeywordChange}
                />
                <button 
                type="button"
                 className="btn btn-outline-secondary btn-sm">
                     search
                </button>
            </form>
        </div>
    );
}