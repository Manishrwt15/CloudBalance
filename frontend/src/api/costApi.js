import axiosInstance from "../utils/axiosInstance";

export const getCosts = (data) => {
  return axiosInstance.post("/dashboard/grouped", data);
}