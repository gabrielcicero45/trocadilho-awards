
const TabNavigation = ({renderTab}) => {
  return (
    <div>
      <button className="button" onClick={() => {renderTab('punsList')}}>
        Lista de Trocadilhos
      </button>
      <button className="button" onClick={() =>{renderTab('addPuns')}}>
        Adicionar Trocadilho
      </button>
      <button className="button" onClick={() =>{renderTab('rankings')}}>
        Rankings
      </button>
    </div>
  );
};

export default TabNavigation;
