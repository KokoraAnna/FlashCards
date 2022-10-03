import React from "react";

const RowOfTable = (props) => {
  return (
    <tr>
      <td>{props.term}</td>
      <td>{props.definition}</td>
      <td>{props.isLearned}</td>
    </tr>
  );
};

export default RowOfTable;
