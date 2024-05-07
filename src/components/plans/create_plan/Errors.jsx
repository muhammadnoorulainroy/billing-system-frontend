import React from "react";

export default function Errors(props) {
  return (
    <div className="alert alert-danger mt-3">
      <ul>
        {props.err.map((error, i) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    </div>
  );
}
