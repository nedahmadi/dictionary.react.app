import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${Keyword} definition`);
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
