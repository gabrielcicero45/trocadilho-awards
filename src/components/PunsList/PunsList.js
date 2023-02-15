import Pun from "../Pun/Pun";

const PunsList = ({ puns }) => {
  return (
    <>
      <h1>Lista de Trocadilhos</h1>
      <table>
        <thead>
          <th>Data</th>
          <th>Votos</th>
          <th>Dev</th>
          <th>Contexto</th>
          <th>Trocadilho</th>
          <th>Votar</th>
        </thead>
        <tbody>
          {puns.length > 0 ? (
            puns.map(({ date, votes, dev, context, message }) => {
              return (
                <Pun
                  key={date}
                  date={date}
                  initialVotes={votes}
                  dev={dev}
                  context={context}
                  message={message}
                />
              );
            })
          ) : (
            <h1>Lista vazia!</h1>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PunsList;
