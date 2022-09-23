import { Form } from "../Form/form";
import { List } from "../List/list";
import "./style.css";

export const LandingPage = ({
  listTransactions,
  setListTransactions,
  setIsLoggedIn,
}) => {
  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="cabecalho">
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <button onClick={Logout}>Iniciar</button>
      </header>
      <main className="main_landing">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </>
  );
};
