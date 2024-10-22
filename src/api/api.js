import axiosInstance from "@/api/axiosInstance";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance().get('https://www.googleapis.com/oauth2/v2/userinfo');
    const {name, email, picture} = response.data;
    console.log('User Info:', {name, email, picture});
  } catch (error) {
    console.error('Error fetching user info:aaaaaaaaaaa', error);
  }
};