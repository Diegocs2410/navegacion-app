import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = (props) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    localStorage.getItem('user') === 'true' ? setLogin(true) : setLogin(false);
  }, []);
  const value = {
    login,
    setLogin,
  };

  return <UserContext.Provider value={value} {...props} />;
};
export const ContextUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      'Contexto de usuario debe estar dentro del provider, verifique que este dentro de el'
    );
  }
  return context;
};
