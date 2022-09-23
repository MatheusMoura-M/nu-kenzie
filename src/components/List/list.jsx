import { useState } from "react";
import { Card } from "../Card/card";
import "./style.css";

export const List = ({ listTransactions, setListTransactions }) => {
  const [filter, setFilter] = useState("todos");

  const handleTodos = (event) => {
    event.preventDefault();
    // event.target.classList.add("btn-color");
    setFilter("todos");
  };

  const handleEntries = (event) => {
    event.preventDefault();
    // event.target.classList.add("btn-color");

    setFilter("Entrada");
  };

  const handleExpenses = (event) => {
    event.preventDefault();
    // event.target.classList.add("btn-color");

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
    </section>
  );
};
