import { useState } from "react";
import "./App.css";
import "./reset.css";
import { HomePage } from "./components/HomePage/home";
import { LandingPage } from "./components/LandingPage/landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
