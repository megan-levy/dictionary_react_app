import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("")
    let [results, setResults] = useState(null)

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search (event) {
        event.preventDefault();

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiURL).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    


    return (
        <div className = "Dictionary">
            <div className = "row">
                <div className = "col-7">
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
                    <Results results = {results}/>
                </div>
                <div className = "col-5">
                    This columm will be the photos
                </div>
            </div>
        </div>
    );
}