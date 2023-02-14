import React from "react";
import { Trocadilho } from "../Trocadilho/Trocadilho";
const TrocadilhoList = ({trocadilhos}) => {
  
  return (
    <>
      <h1>Lista de Trocadilhos</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Votos</th>
            <th>Dev</th>
            <th>Contexto</th>
            <th>Trocadilho</th>
            <th>Votar</th>
          </tr>
        </thead>
        <tbody>
          {trocadilhos.length > 0 ? trocadilhos.map(({date,votes,dev,context,message})=>{
          return <Trocadilho date={date} initialVotes={votes} dev={dev} context={context} message={message}/>}) : <h1>Lista vazia!</h1>}
        </tbody>
      </table>
    </>
  );
};

export default TrocadilhoList;
