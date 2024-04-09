import React from 'react';
import "../App.css"; 
import segurarselogo from '../assets/Segurarse_LogoNuevo.svg'
const Login = () => {
  return (
    <>
    <header>
      <img scr ={segurarselogo}></img>
    </header>
 <div class="card">
  <h1>Login</h1>
    <section>
      <label for="name-with-label" class="text-gray-700">
          Email
      </label>
      <input type="text" id="user" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Usuario"/>
      <label for="name-with-label" class="text-gray-700">
          Contraseña
      </label>
      <input type="password" id="pass-" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Contraseña"/>
    </section>
    <section>
      <button className='button'>Ingresar</button>
      <button className='button'>Crear Usuario</button>
    </section>
  </div>
  </>
  );
};

export default Login;
