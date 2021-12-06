import React from "react";
import Title from "../components/Title";

export default function addTitle() {
  return (
    <React.Fragment>
      <Title main="Registration" subtitle="Add, Change and Delete" />
      <Title main="Information" subtitle="User delete" small={true} />
    </React.Fragment>
  );
}
