import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, userRoutes } from './routes';
import UserLayout from './components/layouts';

function App() {
  return (
    <>
      <Routes>
        {authRoutes.map((authRoute, index) => (
          <Route key={index} path={authRoute.path} element={authRoute.page} />
        ))}

        <Route element={<UserLayout />}>
          {userRoutes.map((userRoute, index) => (
            <Route key={index} path={userRoute.path} element={userRoute.page} />
          ))}
        </Route>
        <div className="overlay-app"></div>
      </Routes>
    </>
  );
}

export default App;