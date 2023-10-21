import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import StaffSidebar from "./components/sidebar";
import PageTitle from "./components/page-title";
import OrderViewTable from "./components/orders/order-view-table";
import { Button } from "@/components/ui/button";
import SupplierService from "@/services/supplier";
import Swal from "sweetalert2";

const RequestDetails = ({ request }) => {
  const handleApprove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to approve this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await SupplierService.approveARequest(request.id);
          Swal.fire("Approved!", "The request has been confirmed.", "success");
          window.location.href = "/staff/requisition";
        } catch (error) {
          console.error("Error:", error);
          Swal.fire(
            "Error",
            "There was an error while confirming the request.",
            "error",
          );
        }
      }
    });
  };

  const handleDecline = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to decline this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, decline it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await SupplierService.declineARequest(request.id);
          Swal.fire("Declined!", "The request has been confirmed.", "success");
          window.location.href = "/staff/requisition";
        } catch (error) {
          console.error("Error:", error);
          Swal.fire("Declined!", "The request has been declined.", "success");
        }
      }
    });
  };
  return (
    <div>
      <PageTitle title={"View Requisition - More Details"} />
      <p className="pl-10 pt-10">Requisition ID: {request.id}</p>
      <p className="pl-10 pt-10">
        Name: {request.placedBy.firstName} {request.placedBy.lastName}
      </p>
      <OrderViewTable items={request.orderedItems} />
      {request.approvalStatus === "PENDING" ? (
        <div className="float-right mr-60">
          <Button
            className="bg-green-600 m-2"
            style={{ float: "right" }}
            onClick={handleApprove}
          >
            Approve
          </Button>
          <Button
            className="bg-red-600 m-2"
            style={{ float: "right" }}
            onClick={handleDecline}
          >
            Decline
          </Button>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const StaffRequisitionView = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SupplierService.getARequest(id);
        if (response.status === 200) {
          setRequest(response.data.results[0]);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="grid lg:grid-cols-6">
      <div>
        <StaffSidebar />
      </div>
      <div className="col-span-3 lg:col-span-5 mt-10 mr-10">
        {request ? (
          <RequestDetails request={request} />
        ) : (
          <p className="m-200">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default StaffRequisitionView;
