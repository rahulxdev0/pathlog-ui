import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    permissions: [],
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setPermissions(state, action) {
      state.permissions = action.payload;
    },
    logout(state) {
      state.user = null;
      state.permissions = [];
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setPermissions, logout } = authSlice.actions;

export const selectHasPermission = (permission) => (state) => {
  if (state.auth.permissions.includes('*')) return true;
  if (permission.endsWith('*')) {
    const prefix = permission.slice(0, -2);
    return state.auth.permissions.some(p => p === permission || p.startsWith(prefix));
  }
  return state.auth.permissions.includes(permission);
};

export default authSlice.reducer;