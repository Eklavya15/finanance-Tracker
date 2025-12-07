import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => axiosClient.post("/auth/login", data).then((r) => r.data),
  register: (data) =>
    axiosClient.post("/auth/register", data).then((r) => r.data),
};

export default authApi;
