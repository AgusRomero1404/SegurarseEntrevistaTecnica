import React, { useState } from 'react';
import { useUserStore } from "../store/userStore";
import UserForm from '../components/UserForm';

function ItemUser({ person }) {
  const { users, addUser, updateUser, removeUsers } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = () => {
    removeUsers(person.id);
    console.log("borrando");
  };

  const handleVisualize = () => {
    const selectedUser = users.find(user => user.id === person.id);
    console.log("Visualizando usuario:", selectedUser);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditModalOpen(true);
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
        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{person.rol}</p>
        </div>
        <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:items-end gap-y-2 md:gap-y-0 md:gap-x-2">
          <>
            <button className="btn btn-xs" onClick={handleEdit}>Editar</button>
            <button className="btn btn-xs" onClick={handleDelete}>Borrar</button>
            <button className="btn btn-xs" onClick={handleVisualize}>Visualizar</button>
          </>
        </div>
      </li>

      {/* Modal de edición */}
      {editModalOpen && (
        <dialog id="edit_modal" className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setEditModalOpen(false)}>✕</button>
            </form>
            <h3 className="font-bold text-lg">Editar Usuario</h3>
            <div className="flex justify-end">
              <UserForm userData={person} onSubmit={() => { setIsEditing(false); setEditModalOpen(false); }} />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ItemUser;
