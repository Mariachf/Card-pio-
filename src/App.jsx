import { useState } from "react";
import ImgRestaurante from "./assets/restaurante.png";
import Cards from "./Components/Cards/cards"; 
import Navegacao from "./Components/Navegação/navegação";
import "./Styles/global.css";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  return (<>
      <div className="container">
        <div className="banner">
          <img src={ImgRestaurante} alt="Imagem do Hashtaurante" />
        </div>

        <Navegacao
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />

       <Cards categoriaSelecionada={categoriaSelecionada} /> 
      </div>
    </>
  );
}

export default App;
