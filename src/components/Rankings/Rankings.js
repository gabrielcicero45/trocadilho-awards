import "./Ranking.css";

const Rankings = ({ puns, devs }) => {
  const punsRanking = puns.sort((pun, anotherPun) => {
    return -pun.votes + anotherPun.votes;
  });
  const devsRanking = devs.sort((dev, anotherDev) => {
    return -dev.puns + anotherDev.puns;
  });
  return (
    <>
      <h1>Melhores Trocadilhos</h1>

      <table className="ranking__table">
        <thead>
          <th className="ranking__head">Colocação</th>
          <th className="ranking__head">Votos</th>
          <th className="ranking__head">Dev</th>
          <th className="ranking__head">Contexto</th>
          <th className="ranking__head">Trocadilho</th>
        </thead>
        <tbody>
          {punsRanking.map(({ votes, dev, context, message }, index) => {
            return (
              <tr className="ranking__row">
                <td className="ranking__data">{index + 1}º</td>
                <td className="ranking__data">{votes}</td>
                <td className="ranking__data">{dev}</td>
                <td className="ranking__data">{context}</td>
                <td className="ranking__data">{message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Dev criativo</h1>
      <table className="ranking__table">
        <thead>
          <th className="ranking__head">Colocação</th>
          <th className="ranking__head">Número de trocadilhos</th>
          <th className="ranking__head">Dev</th>
        </thead>
        <tbody>
          {devsRanking.map(({ name, puns }, index) => {
            return (
              <tr className="ranking__row">
                <td className="ranking__data">{index + 1}</td>
                <td className="ranking__data">{name}</td>
                <td className="ranking__data">{puns}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Rankings;
