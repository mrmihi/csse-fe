import OrderStats from "./payment-stats.jsx";

const PaymentStatsSection = () => {
  return (
    <div style={{ display: "flex" }} className="pb-4">
      <div style={{ flex: 1 }} className="m-2">
        <OrderStats title={"04"} description={"Requisitions"} />
      </div>
      <div style={{ flex: 1 }} className="m-2">
        <OrderStats title={"02"} description={"Above 5 Lakhs"} />
      </div>
      <div style={{ flex: 1 }} className="m-2">
        <OrderStats title={"02"} description={"Below 5 Lakhs"} />
      </div>
      <div style={{ flex: 1 }} className="m-2">
        <OrderStats title={"04"} description={"Unique Orders"} />
      </div>
    </div>
  );
};

export default PaymentStatsSection;
