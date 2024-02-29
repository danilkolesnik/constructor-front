import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogged } from './redux/toolSlice';

export default function PrivateRoute({ component: Component }) {
  const isLogged = useSelector(selectIsLogged);
  return isLogged === true ? <Component /> : <Navigate to='/' replace />;
}
