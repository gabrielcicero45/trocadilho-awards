import React, { useState } from "react";

export const Trocadilho = ({date,initialVotes,dev,context,message}) => {

  const [votes, setVotes] = useState(initialVotes)
  return (
    <tr>
      <td>{date}</td>
      <td>{votes}</td>
      <td>{dev}</td>
      <td>
        {context}
      </td>
      <td>{message}</td>
      <td>
        <button onClick={()=>{setVotes(votes => votes+=1)}}>Votar</button>
      </td>
    </tr>
  );
};
