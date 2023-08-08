import React, { useEffect, useState } from 'react';

const SessionChecker = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Comprobar si hay algún token o información relevante en el almacenamiento local
    const token = localStorage.getItem('token');
    if (token) {
      // Si hay token, establecer el estado de autenticación en verdadero
      setAuthenticated(true);
    } else {
      // Si no hay token, redirigir al usuario a la página de inicio de sesión
      window.location.href = '/login';
    }
  }, []);

  return authenticated ? <div>{/* Renderiza aquí tus componentes protegidos */}</div> : null;
};

export default SessionChecker;
