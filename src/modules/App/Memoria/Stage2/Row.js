import React from "react";

const row = () => {
  return (
    <tr>
      <td>{props.correct}</td>
      <td>{props.answer}</td>
    </tr>
  );
};
