import "./style.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  return (
    <section className="section_form">
      <form className="form">
        <div className="label-description">
          <input type="text" id="inputDescription" placeholder=" " />
          <label className="labelDescription">Descrição:</label>
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="box-inputValue">
          <div className="label-value">
            <input type="text" placeholder=" " />
            <label>Valor:</label>
            <p>R$</p>
          </div>
          <div className="box-select">
            <h3>Tipo de valor:</h3>
            <select>
              <option value=""></option>
              <option value="Entrada">Entrada</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button type="button">Inserir valor</button>
      </form>
      <div className="amount">
        <div>
          <h2>Valor total:</h2>
          <p>R$</p>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    </section>
  );
};
