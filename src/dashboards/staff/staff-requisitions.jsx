import { useState } from 'react';
import StaffSidebar from './components/sidebar';
import RequisitionPendingOrder from './components/orders/req-pending-table';
import RequisitionApprovedOrder from './components/orders/req-approved-table';
import RequisitionDeclinedOrder from './components/orders/req-declined-table';
import { Button } from '@/components/ui/button';

const StaffRequisition = () => {
    const [activeTable, setActiveTable] = useState('pending');
    const showPendingTable = () => setActiveTable('pending');
    const showApprovedTable = () => setActiveTable('approved');
    const showDeclinedTable = () => setActiveTable('declined');

    return (
        <>
            <StaffSidebar />
            <div>
                <Button className="mx-2" onClick={showPendingTable}>Pending</Button>
                <Button className="mx-2" onClick={showApprovedTable}>Approved</Button>
                <Button className="mx-2" onClick={showDeclinedTable}>Declined</Button>
            </div>
            {activeTable === 'pending' && <RequisitionPendingOrder />}
            {activeTable === 'approved' && <RequisitionApprovedOrder />}
            {activeTable === 'declined' && <RequisitionDeclinedOrder />}
        </>
    );
};

export default StaffRequisition;
