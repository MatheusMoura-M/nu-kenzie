import { useState } from "react";
import { TotalMoney } from "../TotalMoney/money";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [inputDescription, SetInputDescription] = useState("");
  const [inputValue, SetInputValue] = useState("");
  const [selectTipo, SetSelectTipo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      {
        id: uuidv4(),
        description: inputDescription,
        type: selectTipo,
        value: inputValue,
      },
    ]);
  };

  return (
    <section className="section_form">
      <form onSubmit={handleSubmit} className="form">
        <div className="label-description">
          <input
            type="text"
            id="inputDescription"
            placeholder=" "
            onChange={(event) => {
              SetInputDescription(event.target.value);
            }}
          />
          <label className="labelDescription">Descrição:</label>
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="box-inputValue">
          <div className="label-value">
            <input
              type="number"
              placeholder=" "
              onChange={(event) => {
                SetInputValue(+event.target.value);
              }}
            />
            <label>Valor:</label>
            <p>R$</p>
          </div>
          <div className="box-select">
            <h3>Tipo de valor:</h3>
            <select
              onChange={(event) => {
                SetSelectTipo(event.target.value);
              }}
            >
              <option value=""></option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
      <TotalMoney listTransactions={listTransactions} />
    </section>
  );
};
