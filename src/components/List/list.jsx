import { useState } from "react";
import { Card } from "../Card/card";
import "./style.css";
import carrinhoVazio from "../../../public/assets/NoCard.svg";
import { BtnAll } from "./style";

export const List = ({ listTransactions, setListTransactions }) => {
  const [filter, setFilter] = useState("todos");
  const [btnAll, setBtnAll] = useState(false);
  const [btnEntries, setBtnEntries] = useState(false);
  const [btnExpenses, setBtnExpenses] = useState(false);

  const btnBgc = (status) => {
    const bgc = status ? "var(--color-primary)" : "var(--grey-6)";
    return bgc;
  };

  const btnColor = (status) => {
    const color = status ? "var(--grey-6)" : "var(--grey-2)";
    return color;
  };

  const handleTodos = (event) => {
    event.preventDefault();

    setBtnAll(true);
    setBtnEntries(false);
    setBtnExpenses(false);
    setFilter("todos");
  };

  const handleEntries = (event) => {
    event.preventDefault();

    setBtnEntries(true);
    setBtnAll(false);
    setBtnExpenses(false);

    setFilter("Entrada");
  };

  const handleExpenses = (event) => {
    event.preventDefault();

    setBtnExpenses(true);
    setBtnAll(false);
    setBtnEntries(false);

    setFilter("Despesa");
  };

  return (
    <section className="list">
      <div className="header_list">
        <h2>Resumo financeiro</h2>
        <div className="btn_filtro">
          <BtnAll
            onClick={handleTodos}
            bg={btnBgc(btnAll)}
            color={btnColor(btnAll)}
          >
            Todos
          </BtnAll>
          <BtnAll
            onClick={handleEntries}
            bg={btnBgc(btnEntries)}
            color={btnColor(btnEntries)}
          >
            Entradas
          </BtnAll>
          <BtnAll
            onClick={handleExpenses}
            bg={btnBgc(btnExpenses)}
            color={btnColor(btnExpenses)}
          >
            Despesas
          </BtnAll>
        </div>
      </div>
      {listTransactions.length !== 0 ? (
        <ul className="container_card">
          {listTransactions.map((transaction, index) => {
            if (filter === "todos" || filter === transaction.type) {
              return (
                <Card
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  key={index}
                  transaction={transaction}
                />
              );
            }
          })}
        </ul>
      ) : (
        <div className="carrinhoVazio">
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img src={carrinhoVazio} alt="" />
        </div>
      )}
    </section>
  );
};
