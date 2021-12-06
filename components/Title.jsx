import React from "react";

export default function Title(props) {
  if (props.small) {
    return (
      <React.Fragment>
        <h3>{props.main}</h3>
        <h4>{props.subtitle}</h4>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>{props.main}</h1>
        <h2>{props.subtitle}</h2>
      </React.Fragment>
    );
  }
}
