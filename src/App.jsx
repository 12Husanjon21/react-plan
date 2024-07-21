import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Today from "./components/today/Today";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Aside from "./components/common/Aside";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";



function App() {
  return (
    <div className="container">
      <Aside />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/today' element={<Today />} />
          </Route>

          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
