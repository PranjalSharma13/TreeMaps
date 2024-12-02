import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, LoginCredentials, SignupCredentials, AuthError } from '../types/auth';
import * as authService from '../services/authService';
import { AxiosError } from 'axios';

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      localStorage.setItem('token', response.token);
      return response;
    }  catch (error: unknown) {
        // Type guard to check if error is an AxiosError
        if (error instanceof AxiosError) {
          // Safe to access AxiosError properties
          return rejectWithValue({
            message: error.response?.data?.message || 'Login failed'
          } as AuthError);
        } else if (error instanceof Error) {
          // Handling generic errors (non-Axios) with a fallback message
          return rejectWithValue({
            message: error.message || 'Login failed'
          } as AuthError);
        }
        // Handling case where the error is neither AxiosError nor generic Error
        return rejectWithValue({
          message: 'Login failed'
        } as AuthError);
      }
    }
  );

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials: SignupCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.signup(credentials);
      localStorage.setItem('token', response.token);
      return response;
    }  catch (error: unknown) {
        // Type guard to check if error is an AxiosError
        if (error instanceof AxiosError) {
          // Safe to access AxiosError properties
          return rejectWithValue({
            message: error.response?.data?.message || 'SignUp failed'
          } as AuthError);
        } else if (error instanceof Error) {
          // Handling generic errors (non-Axios) with a fallback message
          return rejectWithValue({
            message: error.message || 'SignUp failed'
          } as AuthError);
        }
        // Handling case where the error is neither AxiosError nor generic Error
        return rejectWithValue({
          message: 'SignUp failed'
        } as AuthError);
      }
    }
  );
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem('token');
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthError;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as AuthError;
      });
  }
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;