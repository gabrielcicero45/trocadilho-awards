import { useState } from "react";

const Pun = ({date,initialVotes,dev,context,message}) => {

  const [votes, setVotes] = useState(initialVotes)
  return (
    <tr className="puns-list__row">
      <td className="puns-list__data">{date}</td>
      <td className="puns-list__data">{votes}</td>
      <td className="puns-list__data">{dev}</td>
      <td className="puns-list__data">{context}</td>
      <td className="puns-list__data">{message}</td>
      <td className="puns-list__data">
        <button className="button" onClick={()=>{setVotes(votes => votes+=1)}}>Votar</button>
      </td>
    </tr>
  );
};

export default Pun;
