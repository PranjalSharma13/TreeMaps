import axios from 'axios';
import { LoginCredentials, SignupCredentials, AuthResponse } from '../types/auth';

const API_URL = 'http://localhost:8081/api/auth';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const signup = async (credentials: SignupCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/register`, credentials);
  return response.data;
};