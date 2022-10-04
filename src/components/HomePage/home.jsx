import "./style.css";
import ball from "../../../public/assets/illustration.svg";
import titleLogo from "../../../public/assets/Nu Kenzie.svg";
// import { motion } from "framer-motion";

export const HomePage = ({ setIsLoggedIn }) => {
  const Login = () => {
    setIsLoggedIn(true);
  };
  return (
    // <motion.div
    //   className="box"
    //   initial={{ opacity: 0.8 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.7 }}
    // >
      <main className="main_home">
        <div className="div_home">
          <figure>
            {/* <img src={titleLogo} alt="Logo NuKenzie" /> */}
            <h1>Nu <span>Kenzie</span></h1>
          </figure>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={Login}>Iniciar</button>
        </div>

        <div className="ball">
          <img src={ball} alt="" />
        </div>
      </main>
    // </motion.div>
  );
};
