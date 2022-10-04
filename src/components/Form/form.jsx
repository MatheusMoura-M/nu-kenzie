import { useState } from "react";
import { TotalMoney } from "../TotalMoney/money";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectTipo, setSelectTipo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectVazio =
      event.target.children[1].children[1].children[1].children[0];

    selectTipo === "Entrada"
      ? setListTransactions([
          ...listTransactions,
          {
            id: uuidv4(),
            description: inputDescription,
            type: selectTipo,
            value: inputValue,
          },
        ])
      : setListTransactions([
          ...listTransactions,
          {
            id: uuidv4(),
            description: inputDescription,
            type: selectTipo,
            value: inputValue * -1,
          },
        ]);

    setInputDescription("");
    setInputValue("");
    setSelectTipo(selectVazio);
  };

  return (
    <section className="section_form">
      <form onSubmit={handleSubmit} className="form">
        <div className="label-description">
          <input
            type="text"
            id="inputDescription"
            value={inputDescription}
            placeholder="Digite"
            onChange={(event) => {
              setInputDescription(event.target.value);
            }}
            required
          />
          <label className="labelDescription">Descrição:</label>
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="box-inputValue">
          <div className="label-value">
            <input
              type="number"
              value={inputValue}
              placeholder="Digite"
              onChange={(event) => {
                setInputValue(+event.target.value);
              }}
              required
            />
            <label>Valor:</label>
            <p>R$</p>
          </div>
          <div className="box-select">
            <h3>Tipo de valor:</h3>
            <select
              value={selectTipo}
              onChange={(event) => {
                setSelectTipo(event.target.value);
              }}
              required
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
