const PunsRanking = ({ punsRanking }) => {
  return (
    <>
      {punsRanking.length > 0 ? (
        <>
          <h2 className="ranking__title">Melhores Trocadilhos</h2>
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
        </>
      ) : (
        <h2>Lista Vazia!</h2>
      )}
    </>
  );
};

export default PunsRanking;
