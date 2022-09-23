import "./style.css";

export const HomePage = ({ setIsLoggedIn }) => {
  const Login = () => {
    setIsLoggedIn(true);
  };

  return (
    <main className="main_home">
      <div className="div_home">
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={Login}>Iniciar</button>
      </div>

      <div className="ball">
        <div>
          <div>
            <img
              src="https://img.freepik.com/vetores-gratis/documentacao-eletronica-homem-com-registro-verificando-o-log-do-repositorio-aprovacao-online-formulario-de-tela-pagina-de-validacao-cronicas-de-despesas-ilustracao-isolada-da-metafora-do-conceito_335657-1222.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};
