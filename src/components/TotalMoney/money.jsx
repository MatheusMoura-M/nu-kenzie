import "./style.css";
import { toast } from "react-toastify"

export const TotalMoney = ({ listTransactions }) => {

  // const totalValue = listTransactions.reduce((acc, act) => {
  //   return act.value + acc;
  // }, 0);
  // totalValue < 0 && toast.dark("🚫Cuidado... Saldo negativoo ❗");

  return (
    <div className="amount">
      <div>
        <h2>Valor total:</h2>
        <p id="paragraphValue">
          R$
          <span>
            {listTransactions.reduce((acc, act) => {
              return act.value + acc;
            }, 0)}
            ,00
          </span>
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
