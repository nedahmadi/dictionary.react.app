import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${Keyword} definition`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordsearch(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordsearch} />
      </form>
    </div>
  );
}
