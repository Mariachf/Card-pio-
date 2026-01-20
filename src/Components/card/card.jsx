import React from "react";
import "./card.css";

const Card = ({ itemCategoria }) => {
    const {nome, preco, imagem, descricao} = itemCategoria;

    return(
      
            <div className="card">
                <div className="card-conteudo">
                    <h2 className="card-titulo">{nome}</h2>

                    <p>{descricao}</p>

                    <p className="card-preco">{preco}</p>
                </div>

                <div className="card-img">
                <img src={imagem} alt="Imagem do Produto" />
                </div>
                    
            </div>
       
    );
};

export default Card;