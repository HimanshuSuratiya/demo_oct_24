import axiosInstance from "@/api/axiosInstance";

export const fetchUser = async () => {
  return axiosInstance.get('https://www.googleapis.com/oauth2/v2/userinfo')
};