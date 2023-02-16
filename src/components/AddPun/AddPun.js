import "./AddPun.css";
const AddPun = ({pun,handleSubmit,handlePunChange}) => {
  return (
    <>
      <h2 className="add-pun__title">Adicionar Trocadilho</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="date">
          Data
          <input
            className="form__input form__input--half"
            type="date"
            name="date"
            id="date"
            onChange={handlePunChange}
            value={pun.date}
          />
        </label>
        <label htmlFor="dev">
          Dev
          <input
            className="form__input form__input--half"
            type="text"
            name="dev"
            id="dev"
            onChange={handlePunChange}
            value={pun.dev}
          />
        </label>
        <label htmlFor="context">
          Contexto
          <input
            className="form__input"
            type="text"
            name="context"
            id="context"
            onChange={handlePunChange}
            value={pun.context}
          />
        </label>
        <label htmlFor="message">
          Trocadilho
          <input
            className="form__input"
            type="text"
            name="message"
            id="message"
            onChange={handlePunChange}
            value={pun.message}
          />
        </label>
        <button className="button" type="submit">Adicionar</button>
      </form>
    </>
  );
};

export default AddPun;
