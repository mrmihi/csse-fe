import StaffSidebar from "./components/sidebar";

const StaffPage = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 mt-10 mr-10">
          <h1>Hello World from staff page</h1>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
