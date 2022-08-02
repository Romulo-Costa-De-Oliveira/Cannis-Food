import React from "react";

const ProductList = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://cobasi.vteximg.com.br/arquivos/ids/938503-400-400/racao-premier-selecao-natural-gatos-castrados-frango-korin-3946036-Lado-1-5kg.jpg?v=637852968172300000"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-success">R$ 30,00</label>
          </h6>
          <small>
            <b>Ração umida Nestle para cães adultos shache 1.5kg</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-fluid btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
