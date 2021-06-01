import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary () {
    let [keyword, setKeyword] = useState("")
    let [results, setResults] = useState(null)
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse (response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search (event) {
        event.preventDefault();

        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiURL).then(handleDictionaryResponse);

        const pexelsAPIKey = "563492ad6f91700001000001d1cde53528d142e6bb8c5b5e263b203a";
        let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

        let headers = {Authorization:`Bearer ${pexelsAPIKey}`};
        axios.get(pexelsAPIUrl, {headers: headers}).then(handlePexelsResponse);

    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    


    return (
        <div className = "Dictionary">
               
                    <form onSubmit = {search}>
                        <input 
                        type = "search" 
                        text = "type a word then enter..."
                        autoFocus = {true} 
                        onChange = {handleKeywordChange}
                        />
                        
                    </form>
                    <Results results = {results}/>
               
                    <Photos photos = {photos}/>
        </div>
    );
}