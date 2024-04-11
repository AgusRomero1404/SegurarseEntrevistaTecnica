import React from 'react';
import { useUserStore } from "../store/userStore";
import UserForm from '../components/UserForm'


function ItemUser({person}) {

    const { users, addUser, updateUser, removeUsers} = useUserStore();
    
    const handleDelete = () => {
        removeUsers (person.id)
        console.log("borrando")
    };
        const handleVisualize = () => {
        const selectedUser = users.find(user => user.id === person.id);
        console.log("Visualizando usuario:", selectedUser);
        // Aquí puedes hacer lo que necesites con la información del usuario seleccionado
    };


  return (
    <>
        <li key={person.id} className="flex flex-col md:flex-row justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="w-24 mask mask-hexagon" src={person.src} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name} {person.surname}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Telefono: {person.phone}</p>
            </div>
          </div>
          <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.rol}</p>
          </div>
            <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:items-end gap-y-2 md:gap-y-0 md:gap-x-2">
            <button className="btn btn-xs">Editar</button>
            <button className="btn btn-xs" onClick={handleDelete}>Borrar</button>
            <button className="btn btn-xs" onClick={()=>document.getElementById('my_modal_3').showModal()}>Visualizar</button>
         </div>
        </li>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 className="font-bold text-lg">Crear Usuario</h3>
              <UserForm />
            </div>
          </dialog>
    </>
  )
}

export default ItemUser