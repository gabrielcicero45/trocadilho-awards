import Pun from "../Pun/Pun";
import "./PunsList.css";

const PunsList = ({ puns }) => {
  const updateVote = (id,changes) => {
    puns.handleUpdate(id, changes)
  }
  return (
    <>
      <h2 className="puns-list__title">Lista de Trocadilhos</h2>
      {puns.value.length > 0 ? (
        <table className="puns-list__table">
          <thead className="puns-list__head">
            <th>Data</th>
            <th>Votos</th>
            <th>Dev</th>
            <th>Contexto</th>
            <th>Trocadilho</th>
            <th>Votar</th>
          </thead>
          <tbody>
            {puns.value.map(({ id, date, votes, dev, context, message }) => {
              return (
                <Pun
                  key={id}
                  id={id}
                  date={date}
                  initialVotes={votes}
                  dev={dev}
                  context={context}
                  message={message}
                  updateVote = {updateVote}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>Lista vazia!</h3>
      )}
    </>
  );
};

export default PunsList;
