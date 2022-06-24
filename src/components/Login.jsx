import { Link } from "react-router-dom";
import React from "react";
import IMG from "../img/logo_inah.png";


const Login = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <img src={IMG} href="Logo" />

            <p class="py-6">
              Esta entrando al Sistema de gestion y control de bienes e Inmuebes
              del Instituto Nacional de Antropologia e Historia
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Correo</span>
                </label>
                <input
                  type="text"
                  placeholder="correo"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label" >
                  <span class="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="conraseña"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="Forgot.jsx" class="label-text-alt link link-hover">
                    ¿No recuendas tu contraseña?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-secondary btn-outline" href="Table.jsx">
                  <Link to="/Inventario">Iniciar Sesion</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
