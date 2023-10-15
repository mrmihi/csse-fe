import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Example } from "../pages";
<<<<<<< HEAD
import { AdminExample, SupplierExample } from "../dashboards";
import { StaffPage } from "@/dashboards/staff";
=======
import { StaffExample, AdminExample, SupplierExample } from "../dashboards";
>>>>>>> 00c1858bf99a0288206632d2ed4b2d97b92365b1

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/example" element={<Example />} />
      <Route path="/supplier" element={<SupplierExample />} />
      <Route path="/admin" element={<AdminExample />} />
<<<<<<< HEAD
      <Route path="/staff" element={<StaffPage />} />
=======
      <Route path="/staff" element={<StaffExample />} />
>>>>>>> 00c1858bf99a0288206632d2ed4b2d97b92365b1
    </Routes>
  );
};

export default AnimatedRoutes;
