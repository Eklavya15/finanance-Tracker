import axiosClient from "./axiosClient";

const transactionApi = {
  list: (page = 1, limit = 20) =>
    axiosClient
      .get("/transactions", { params: { page, limit } })
      .then((r) => r.data),
  create: (data) => axiosClient.post("/transactions", data).then((r) => r.data),
};

export default transactionApi;
