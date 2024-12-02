
import { LocationData } from '../types/location';

// const API_URL = '/api/trees';

export const saveTreeLocation = async (locationData: LocationData) => {
  try {
    // const response = await axios.post(API_URL, locationData);
    // return response.data;
    console.log('saved tree location:',locationData);
  } catch (error) {
    console.error('Error saving tree location:', error);
    throw error;
  }
};