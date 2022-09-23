import { Card } from "../Card/card";
import "./style.css";

export const List = ({ listTransactions }) => {
  return (
    <section className="list">
      <div className="header_list">
        <h2>Resumo financeiro</h2>
        <div className="btn_filtro">
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <ul className="container_card">
        {listTransactions.map((transaction, index) => (
          <Card transaction={transaction} index={index} />
        ))}
      </ul>
    </section>
  );
};
