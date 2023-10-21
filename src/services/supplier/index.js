import axios from "axios";

const token = localStorage.getItem("authToken");
const role = localStorage.getItem("userRole");
const baseUrl = "http://144.126.219.21:8001/api/v1/order/approval";

const getPendingOrders = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/status?approvalStatus=PENDING",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

const getAllAutoApprovedOrders = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/status?approvalStatus=AUTO_APPROVED",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// approved
const getAllApprovedOrders = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/status?approvalStatus=APPROVED",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// declined
const getAllDeclinedOrders = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/status?approvalStatus=DECLINED",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// get request by id
const getARequest = async (id) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// approve a request
const approveARequest = async (id) => {
  const reqBody = {
    approvalStatus: "APPROVED",
  };
  const response = await axios({
    method: "patch",
    url: `${baseUrl}/${id}`,
    data: reqBody,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

// decline a request
const declineARequest = async (id) => {
  const reqBody = {
    approvalStatus: "DECLINED",
  };
  const response = await axios({
    method: "patch",
    url: `${baseUrl}/${id}`,
    data: reqBody,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

const SupplierService = {
  getPendingOrders,
  getAllAutoApprovedOrders,
  getAllApprovedOrders,
  getAllDeclinedOrders,
  getARequest,
  approveARequest,
  declineARequest,
};

export default SupplierService;
