import "./style.css";

export const Card = ({ transaction, index }) => {
  return transaction.type === "Entrada" ? (
    <li className="card" id="li_entrada" key={index}>
      <div className="description">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="box-price">
        <p>R$ {transaction.value}</p>
        <img src="../../../public/assets/trash.svg" alt="" />
      </div>
    </li>
  ) : (
    <li className="card" id="li_saida" key={index}>
      <div className="description">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="box-price">
        <p>R$ {transaction.value}</p>
        <img src="../../../public/assets/trash.svg" alt="" />
      </div>
    </li>
  );
};
