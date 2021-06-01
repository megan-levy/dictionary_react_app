import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded]=useState(false);


    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse (response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function load() {
        setLoaded(true);
        search();
       }


    function search () {
      
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiURL).then(handleDictionaryResponse);

        const pexelsAPIKey = "563492ad6f91700001000001d1cde53528d142e6bb8c5b5e263b203a";
        let pexelsAPIUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

        let headers = {Authorization:`Bearer ${pexelsAPIKey}`};
        axios.get(pexelsAPIUrl, {headers: headers}).then(handlePexelsResponse).catch((error) => {
            alert("not found, please try again");
        })
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    if (loaded) {
    return (
        <div className = "Dictionary">
               
                    <form onSubmit = {handleSubmit}>
                            <input 
                            type = "search" 
                            text = "type a word then enter..."
                            autoFocus = {true} 
                            onChange = {handleKeywordChange}
                            defaultValue = {props.defaultKeyword}
                            placeholder="What word do you want to look up?"
                            />
                        
                    </form>
                    <Results results = {results}/>
               
                    <Photos photos = {photos}/>
        </div>
    );
 } else {
     load();
     return "loading..."
 }
}