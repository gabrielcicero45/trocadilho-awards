import { useState } from "react";

const Pun = ({ id, date, initialVotes, dev, context, message, updateVote }) => {
  const [votes, setVotes] = useState(initialVotes);

  const addVote = () => {
    setVotes((votes) => (votes += 1));
    updateVote(id,{votes: votes+1});
  };
  return (
    <tr className="puns-list__row">
      <td className="puns-list__data">{date}</td>
      <td className="puns-list__data">{votes}</td>
      <td className="puns-list__data">{dev}</td>
      <td className="puns-list__data">{context}</td>
      <td className="puns-list__data">{message}</td>
      <td className="puns-list__data">
        <button className="button" onClick={addVote}>
          Votar
        </button>
      </td>
    </tr>
  );
};

export default Pun;
