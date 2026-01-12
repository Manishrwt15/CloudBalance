import axiosInstance from "../utils/axiosInstance";


export const getCosts = () => {
  return  axiosInstance.get("/dashboard/costs");
}