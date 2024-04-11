import React from "react";
import { useForm } from 'react-hook-form';

function UserForm() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  return (
    <>
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> 
 
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit((data) => {console.log(data)})}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("name", {required: true})}
                />
                {errors.name && <span class="text-red-500 text-xs block">Nombre es requerido</span>}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("surname", {required: true})}
                />
                {errors.surname && <span class="text-red-500 text-xs block">Apellido es requerido</span>}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("phone", {required: true})}
                />
                {errors.phone && <span class="text-red-500 text-xs block">Telefono es requerido</span>}
              </div>
            </div>
            <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rol
            </label>
            <select className="select select-bordered w-full max-w-xs"
            {...register("rol", {required: true})}
            >
              <option disabled selected>Elija un Rol</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Gerente de ventas">Gerente de Ventas</option>
              <option value="Atencion al cliente">Atencion al cliente</option>
              <option value="Gerente de Atencion al cliente" >Gerente de Atencion al cliente</option>
            </select>
            {errors.rol && <span class="text-red-500 text-xs block">Rol requerido</span>}
            </div>
            <div className="flex justify-between space-x-1">
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Foto
              </label>
              <div class="avatar">
                <div class="w-24 mask mask-hexagon">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <button className="btn">🔄</button>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Crear Usuario</button>
            </div>
            
          </form>
        </div>
      </div>
      </>
  );
}

export default UserForm;
