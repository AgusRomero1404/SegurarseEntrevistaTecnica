import  React, { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import Admin from "../components/Admin";
import UserForm from '../components/UserForm';
import { Navigate } from 'react-router-dom';
import { useLoginStore } from '../store/loginStore';


function Dashboard() {
  const { isLoggedIn } = useLoginStore();

  if (!isLoggedIn) {
    return <Navigate to="/init" />;
  }
  return(
    <>
        <header>
        <NavMenu />
        </header>
        <div>
            <Admin />
        </div>
        <footer class="flex justify-center items-center">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-gray-400 hover:bg-gray-500 text-gray-900 hover:text-white px-3 py-1 rounded" onClick={()=>document.getElementById('my_modal_3').showModal()}>Crear Usuario</button>
        </footer>
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

export default Dashboard;
