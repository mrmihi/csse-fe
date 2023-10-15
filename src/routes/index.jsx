import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Example } from "../pages";
import { StaffExample, AdminExample, Supplier } from "../dashboards";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/example" element={<Example />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/admin" element={<AdminExample />} />
      <Route path="/staff" element={<StaffExample />} />
    </Routes>
  );
};

export default AnimatedRoutes;
