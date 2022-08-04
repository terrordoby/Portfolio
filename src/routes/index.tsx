import { Routes, Route, Navigate } from 'react-router-dom';
import { Projetos } from '../pages/Projetos';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/projetos' element={<Projetos />} />
    </Routes>
  );
};