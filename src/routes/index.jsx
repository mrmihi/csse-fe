import { Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  Example
} from "../pages";
import {
  AdminExample,
  SupplierExample
} from "../dashboards"
import { StaffPage } from "@/dashboards/staff";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
      <Routes location={location}>
        <Route path= "*" element={<Login />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/example" element={<Example />} />
        <Route path= "/supplier" element={<SupplierExample />} />
        <Route path= "/admin" element={<AdminExample />} />
        <Route path= "/staff" element={<StaffPage />} />
      </Routes>
  );
};

export default AnimatedRoutes;