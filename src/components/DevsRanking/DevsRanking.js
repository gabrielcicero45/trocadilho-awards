const DevsRanking = ({ devsRanking }) => {
  return (
    <>
      {devsRanking.length  > 0 ? (
        <>
          <h2 className="ranking__title">Dev criativo</h2>
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
      ) : (
        <h2>Lista Vazia!</h2>
      )}
    </>
  );
};

export default DevsRanking;
