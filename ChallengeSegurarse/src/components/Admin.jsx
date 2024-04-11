import React from 'react';
import NavMenu from './NavMenu';
import ItemUser from './ItemUser';
import { useUserStore } from "../store/userStore";

const Admin = () => {
  
  const { users } = useUserStore();
console.log (users);



  return (

    <>
      <ul role="list" className="divide-y divide-gray-100 px-4">
      {users.map((person) => (
        <ItemUser key={person.email} person={person}/>
      ))}
      </ul>
    </>

  );
};

export default Admin;
