import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Todo from './Todo';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<PrivateRoute>
            <Todo/>
        </PrivateRoute>} />
    </Routes>
  );
}

export default AllRoutes;
