import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Example } from "../pages";
import { AdminExample, Supplier, StaffPage } from "../dashboards";
import StaffOrders from "@/dashboards/staff/staff-orders";
import StaffRequisition from "@/dashboards/staff/staff-requisitions";
import StaffRequisitionView from "@/dashboards/staff/staff-requisition-view";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/example" element={<Example />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/admin" element={<AdminExample />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/staff/orders" element={<StaffOrders />} />
      <Route path="/staff/requisition" element={<StaffRequisition />} />
      <Route path="/staff/requisition/:id" element={<StaffRequisitionView />} />
    </Routes>
  );
};

export default AnimatedRoutes;
