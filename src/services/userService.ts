// services/userService.js
import axios from 'axios';


export const fetchUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://192.168.0.35:3000/api/users/${userId}/profile`);
    return { profile: response.data, error: null };
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return { profile: null, error: error.message };
  }
};
