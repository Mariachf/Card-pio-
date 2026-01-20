import React from "react";
import './navegação.css' 

const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {

  
  const categorias = ["Pratos Principais", "Sobremesas", "Bebidas"];
  
 
  console.log(categoriaSelecionada);


  return (
    <div className="categorias">
      {categorias.map((categoria, index) => (
        <button
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`categoria${
            index === categoriaSelecionada ? " categoria--selecionada" : ""
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
 
};

export default Navegacao;