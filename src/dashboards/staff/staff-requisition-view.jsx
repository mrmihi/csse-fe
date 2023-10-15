import { useParams } from "react-router-dom";
import StaffSidebar from "./components/sidebar";

const StaffRequisitionView = () => {
    const {id} = useParams();

    return (
        <>
            <StaffSidebar />
            <h1>View Requisition</h1>
            <p>Requisition ID: {id}</p>
        </>
    );
}

export default StaffRequisitionView;
