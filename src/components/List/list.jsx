import { useState } from "react";
import { Card } from "../Card/card";
import "./style.css";

export const List = ({ listTransactions, setListTransactions }) => {
  const [filter, setFilter] = useState("todos");

  const handleTodos = (event) => {
    event.preventDefault();
    const btns = event.target.parentElement.children;

    event.target.classList.add("btn-color");
    btns[1].classList.remove("btn-color");
    btns[2].classList.remove("btn-color");

    setFilter("todos");
  };

  const handleEntries = (event) => {
    event.preventDefault();
    const btns = event.target.parentElement.children;

    event.target.classList.add("btn-color");
    btns[0].classList.remove("btn-color");
    btns[2].classList.remove("btn-color");

    setFilter("Entrada");
  };

  const handleExpenses = (event) => {
    event.preventDefault();
    const btns = event.target.parentElement.children;

    event.target.classList.add("btn-color");
    btns[0].classList.remove("btn-color");
    btns[1].classList.remove("btn-color");

    setFilter("Despesa");
  };

  return (
    <section className="list">
      <div className="header_list">
        <h2>Resumo financeiro</h2>
        <div className="btn_filtro">
          <button onClick={handleTodos}>Todos</button>
          <button onClick={handleEntries}>Entradas</button>
          <button onClick={handleExpenses}>Despesas</button>
        </div>
      </div>
      {listTransactions.length !== 0 ? (
        <ul className="container_card">
          {listTransactions.map((transaction, index) => {
            if (filter === "todos") {
              return (
                <Card
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  key={index}
                  transaction={transaction}
                />
              );
            } else if (filter === transaction.type) {
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
        <div>
          <h2>Você ainda não possui nenhum lançamento</h2>
        </div>
      )}
    </section>
  );
};
