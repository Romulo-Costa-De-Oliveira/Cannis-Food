import React from "react";

import "./styles.css";

const CardProduct = () => {
  return (
    <div className="cardproduct col-3">
      <div>
        <img
          src="https://cobasi.vteximg.com.br/arquivos/ids/938503-400-400/racao-premier-selecao-natural-gatos-castrados-frango-korin-3946036-Lado-1-5kg.jpg?v=637852968172300000"
          alt=""
          className="img-fluid align-center"
        ></img>
        <button className="btn btn-fluid btn-primary rounded-circle mdi mdi-plus"></button>
      </div>
      <h4>
        <lab className="badge">R$ 90,00</lab>
      </h4>
      <small>
        <b>Ração umida Nestle para cães adultos shache 1.5kg</b>
      </small>
    </div>
  );
};

export default CardProduct;
