import "./style.css";

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
        <p>R$ {transaction.value}</p>
        <img
          id={transaction.id}
          onClick={(event) => deleted(event, transaction)}
          className="lixeira"
          src="../../../public/assets/trash.svg"
          alt=""
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
        <p>R$ {transaction.value}</p>
        <img
          id={transaction.id}
          onClick={(event) => deleted(event, transaction)}
          className="lixeira"
          src="../../../public/assets/trash.svg"
          alt=""
        />
      </div>
    </li>
  );
};
