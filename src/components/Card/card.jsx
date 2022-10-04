import "./style.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  const deleted = (event, transactionDel) => {
    event.preventDefault();
    const filtered = listTransactions.filter(
      (transaction) => transaction !== transactionDel
    );
    setListTransactions(filtered);
  };

  return transaction.type === "Entrada" ? (
    <li className="card" id="li_entrada">
      <div className="description">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="box-price">
        <p>{`R$ ${transaction.value},00`}</p>
        <FaTrash
          id={transaction.id}
          onClick={(event) => deleted(event, transaction)}
          className="lixeira"
        />
      </div>
    </li>
  ) : (
    <li className="card" id="li_saida">
      <div className="description">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="box-price">
        <p>{`R$ ${transaction.value},00`}</p>
        <FaTrash
          id={transaction.id}
          onClick={(event) => deleted(event, transaction)}
          className="lixeira"
        />
      </div>
    </li>
  );
};
