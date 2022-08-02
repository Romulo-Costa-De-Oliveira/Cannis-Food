import React from "react";
import Header from "../../components/header";

import Illustration from "../../assets/illustration.png";

const Register = () => {
  return (
    <div className="container-fluid bg-primary">
      <Header whiteVersion hideCart />
      <div className="row d-flex">
        <div className="col-6 col-sm-6 col-md-5 col-lg-6 my-auto text-end">
          <img src={Illustration} className="img-fluid" alt="PetFood" />
        </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-6 mb-4">
          <div className="box col-12 col-sm-12 col-md-10 col-lg-8">
            <h2 className="text-center">Falta pouco pro seu pet ser feliz.</h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de nascimento"
            />

            <button className="btn btn-lg btn-block w-100 btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
