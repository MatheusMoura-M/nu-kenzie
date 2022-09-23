import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="amount">
      <div>
        <h2>Valor total:</h2>
        <p>
          R$
          {listTransactions.reduce((acc, act) => {
            return act.value + acc;
          }, 0)}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
