import { useState } from "react";
import StaffSidebar from "./components/sidebar";
import PaymentAll from "./components/payment/payment-all.jsx";
import PaymentPending from "./components/payment/payment-pending.jsx";
import MakePayment from "./components/payment/make-payment.jsx";
import { Tabs } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";

const StaffPayment = () => {
  const HISTORY = "history";
  const PENDING = "pending";
  const PAYMENT = "payment";

  const [activeTable, setActiveTable] = useState(HISTORY);
  const showPaymentHistoryTable = () => setActiveTable(HISTORY);
  const showPendingPaymentsTable = () => setActiveTable(PENDING);
  const showMakePaymentTab = () => setActiveTable(PAYMENT);

  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 lg:border-l mt-10 mr-10 pl-8">
          <div>
            <Tabs defaultValue={HISTORY} className="w-[1080px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value={HISTORY} onClick={showPaymentHistoryTable}>
                  Payment History
                </TabsTrigger>
                <TabsTrigger value={PENDING} onClick={showPendingPaymentsTable}>
                  Pending Payments
                </TabsTrigger>
                <TabsTrigger value={PAYMENT} onClick={showMakePaymentTab}>
                  Make Payment
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {activeTable === HISTORY && <PaymentAll />}
          {activeTable === PENDING && <PaymentPending />}
          {activeTable === PAYMENT && <MakePayment />}
        </div>
      </div>
    </>
  );
};

export default StaffPayment;
