import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { UseUser } from '../context/UserContext';

export const Login = () => {
  const history = useHistory();
  const { setLogin } = UseUser();
  const [userData, setUserData] = useState({
    user: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.user === 'Diego' && userData.password === '1234') {
      setLogin(true);
      alert('Bienvenido don Diego');
      history.push('/root');
    } else {
      alert('Usuario/Contraseña incorrectos, por favor intente nuevamente');
      setLogin(false);
    }
  };

  const handleOnChange = ({ target: { value, name } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <div>
      <h1 className='text-center text-primary my-4'>Login</h1>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div className='border-2 border-primary p-4 shadow rounded-3'>
            <form onSubmit={handleSubmit}>
              <input
                name='user'
                value={userData.user}
                type='text'
                placeholder='Username'
                className='form-control mt-2'
                onChange={handleOnChange}
              />
              <input
                name='password'
                value={userData.password}
                type='password'
                placeholder='Password'
                className='form-control mt-2'
                onChange={handleOnChange}
              />
              <button type='submit' className='btn btn-primary form-control mt-4'>
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
