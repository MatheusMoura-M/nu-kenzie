import { Form } from "../Form/form";
import { List } from "../List/list";
import logoTitle from "../../../public/assets/Nu Kenzie (1).svg";
import "./style.css";
import { motion } from "framer-motion";

export const LandingPage = ({
  listTransactions,
  setListTransactions,
  setIsLoggedIn,
}) => {
  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    // <motion.div
    //   className="box"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.7 }}
    // >
      <>
        <header className="cabecalho">
          <figure className="logo">
            {/* <img src={logoTitle} alt="Logo NuKenzie" /> */}
            <h2>Nu <span>Kenzie</span></h2>
          </figure>
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
    // </motion.div>
  );
};
