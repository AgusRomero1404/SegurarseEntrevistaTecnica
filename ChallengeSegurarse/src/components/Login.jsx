import React, { useState } from "react";
import "../App.css";
import { useForm } from 'react-hook-form';
import { useLoginStore } from "../store/loginStore";
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user: usuarioFijo, password: contraseñaFija, login, isLoggedIn } = useLoginStore(); // Obtiene el usuario y contraseña fijos del store
  const [showError, setShowError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (data) => {
    if (data.user === usuarioFijo && data.password === contraseñaFija) {
      console.log("Inicio de sesión exitoso");
      login(data.user, data.password);
      setRedirect(true);
    } else {
      setShowError(true);
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://segurarse.com.ar/ContentS/img/Segurarse_LogoNuevo.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Frontend Challenge
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Usuario
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("user", { required: true })}
              />
              {errors.user && <span className="text-red-500 text-xs block">Usuario es requerido</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500 text-xs block">Contraseña es requerida</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Ingresar
            </button>
          </div>
        </form>
        {showError &&
          <div role="alert" className="alert alert-error mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="inline-block">Error! Usuario o Contraseña incorrectos</span>
            <button className="inline-block ml-2 p-1 text-red-500 hover:text-red-700" onClick={() => setShowError(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        }

      </div>
    </div>
  );
};

export default Login;
