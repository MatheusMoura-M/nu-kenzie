import { useState } from "react";
import "./App.css";
import "./reset.css";
import { HomePage } from "./components/HomePage/home";
import { LandingPage } from "./components/LandingPage/landing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    // {
    //   id: 22,
    //   description: "Salário recebido",
    //   type: "Entrada",
    //   value: 2500,
    // },
    // { id: 1, description: "Conta de luz", type: "Despesa", value: -150 },
  ]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <LandingPage
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
