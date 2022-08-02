import React from "react";
import Header from "../../components/header";
import ProductList from "../../components/product/list";

import "./styles.css";

const Checkout = () => {
  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4 pb-5">
        <div className="row">
          <div className="col-6 col-sm-5 col-md-6 col-lg-6">
            <span className="section-title">Dados de entrega</span>
            <div className="row mb-2">
              <div className="col-12 mb-2">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-6 col-md-12 mb-2">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-6 col-md-12 mb-2 ">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-5 col-md-6 mb-2">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-5 col-md-6 mb-2">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-2 col-md-3 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-2">
              <div className="col-12 mb-2">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8 col-10 mb-2">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-lg-6 col-md-12 mb-2">
                <input
                  type="text"
                  placeholder="CPF"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-lg-8 col-md-12 mb-2">
                <input
                  type="text"
                  placeholder="Nome do Titular"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ 30,00</h3>
              </div>
              <div className="col-12">
                <button className="btn btn-lg btn-block w-100 btn-primary">
                  {" "}
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-7 col-md-6 col-lg-6">
            <div className="box col mb-4 box-sidebar">
              <h4>Minha Sacola (5)</h4>
              <div className="row products">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
                  <ProductList />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
