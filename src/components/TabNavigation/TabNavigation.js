
const TabNavigation = ({renderPunsList,renderAddPun, renderRankings}) => {
  return (
    <div>
      <button onClick={renderPunsList}>
        Lista de Trocadilhos
      </button>
      <button onClick={renderAddPun}>
        Adicionar Trocadilho
      </button>
      <button onClick={renderRankings}>
        Rankings
      </button>
    </div>
  );
};

export default TabNavigation;
