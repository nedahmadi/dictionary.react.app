import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              <br />
              <strong> Definition : </strong> {definition.definition}
              <br />
              <strong> EXAMPLE : </strong>
              <br />
              <em> {definition.example}</em>
              <br />
              <Synonyms synonym={definition.synonym} />
            </h6>
          </div>
        );
      })}
    </div>
  );
}
