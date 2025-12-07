import axiosClient from "./axiosClient";

const analyticsApi = {
  overview: () => axiosClient.get("/analytics").then((r) => r.data),
  // if backend exposes category analytics separately, adjust paths accordingly
  byCategory: () =>
    axiosClient
      .get("/analytics/categories")
      .then((r) => r.data)
      .catch(() => []),
};

export default analyticsApi;
