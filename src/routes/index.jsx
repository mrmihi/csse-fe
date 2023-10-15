import { Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  Example
} from "../pages";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (

      <Routes location={location}>
        <Route path="/csse-fe/login" element={<Login />} />
        <Route path="/csse-fe/example" element={<Example />} />
      </Routes>

  );
};

export default AnimatedRoutes;