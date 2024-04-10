import React from 'react';

const UserProfile = (props) => {
  console.log(props)
  const { nombre, apellido, telefono, rol } = props;
  return (
    <div>
      <h1>nombre:{nombre}</h1>
      <h1>apellido{apellido}</h1>
      <h1>telefono{telefono}</h1>
      <h1>rol{rol}</h1>
      {/* Aquí se mostrará la información del usuario */}
    </div>
    
  );
};

export default UserProfile;
