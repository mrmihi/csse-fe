import StaffOrderTable from "./components/orders/order-table";
import StaffSidebar from "./components/sidebar";

const StaffOrders = () => {
    return (
        <>
            <StaffSidebar/>
            <h1>Staff Orders</h1>
            <StaffOrderTable/>
        </>
    );
}

export default StaffOrders;
