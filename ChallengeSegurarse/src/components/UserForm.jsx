import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useUserStore } from "../store/userStore";
import { v4 as uuidv4 } from 'uuid';

function UserForm({ userData, onSubmit }) {
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm();
  const { users, addUser, updateUser, removeUsers } = useUserStore();

  const idimg = useUserStore((state) => state.users.length)
  const id = uuidv4();

  const gender = watch("gender");

  useEffect(() => {
    console.log("Estado actual del store usersStore:", users);
  }, [users])

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("surname", userData.surname);
      setValue("phone", userData.phone);
      setValue("gender", userData.gender);
      setValue("rol", userData.rol);
    }
  }, [userData, setValue]);

  const handleFormSubmit = (data) => {
    if (userData) {
      // Editar usuario existente
      const updatedUserData = { ...userData, ...data };
      updateUser(userData.id, updatedUserData);
    } else {
      // Crear nuevo usuario
      const newUser = { ...data, src: `https://randomuser.me/api/portraits/${data.gender}/${idimg}.jpg`, id: id };
      addUser(newUser);
    }
    onSubmit();
  };

  return (
    <>
      <div className=" flex min-h-full flex-1 flex-col justify-center px-3 py-2 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
              <input type="text" {...register("name", { required: true })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.name && <span className="text-red-500 text-xs block">Nombre es requerido</span>}
            </div>
            {/* Apellido */}
            <div>
              <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
              <input type="text" {...register("surname", { required: true })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.surname && <span className="text-red-500 text-xs block">Apellido es requerido</span>}
            </div>
            {/* Teléfono */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Teléfono</label>
              <input type="number" {...register("phone", { required: true })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              {errors.phone && <span className="text-red-500 text-xs block">Teléfono es requerido</span>}
            </div>
            {/* Género */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Género</label>
              <select {...register("gender", { required: true })} className="select select-bordered w-full max-w-xs">
                <option disabled value="">Seleccione una opción</option>
                <option value="men">Hombre</option>
                <option value="women">Mujer</option>
              </select>
              {errors.gender && <span className="text-red-500 text-xs block">Género es requerido</span>}
            </div>
            {/* Rol */}
            <div>
              <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">Rol</label>
              <select {...register("rol", { required: true })} className="select select-bordered w-full max-w-xs">
                <option disabled value="">Seleccione una opción</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Gerente de ventas">Gerente de ventas</option>
                <option value="Atencion al cliente">Atencion al cliente</option>
                <option value="Gerente de Atencion al cliente">Gerente de Atencion al cliente</option>
              </select>
              {errors.rol && <span className="text-red-500 text-xs block">Rol es requerido</span>}
            </div>
            {/* Avatar */}
            <div className="flex justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Avatar</label>
              <div className="avatar">
                <div className="w-24 mask mask-hexagon">
                  <img src={`https://randomuser.me/api/portraits/${gender}/${idimg}.jpg`} />
                </div>
              </div>
            </div>
            {/* Botón */}
            <div className="flex justify-center">
              <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{userData ? "Guardar Cambios" : "Crear Usuario"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
