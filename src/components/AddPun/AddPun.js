import './AddPun.css'
const AddPun = () => {
  return (
    <>
      <h1>Adicionar Trocadilho</h1>
      <form className="form">
        <label htmlFor="data">Data<input className="form__input form__input--half" type="date" name="data" id="data" /></label>
        <label htmlFor="dev">Dev<input className="form__input form__input--half" type="text" name="dev" id="dev" /></label>
        <label htmlFor="contexto">Contexto<input className="form__input" type="text" name="contexto" id="contexto" /></label>
        <label htmlFor="trocadilho">Trocadilho<input className="form__input" type="text" name="trocadilho" id="trocadilho" /></label>
        <button type="submit">Adicionar</button>
      </form>
    </>
  )
}

export default AddPun