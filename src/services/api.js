import axios from 'axios';
import { store } from '../store';
import { setUser, setPermissions, logout } from '../store/slices/authSlice';

const dummyData = {
  login: {
    bde: {
      access: 'jwt-token-bde',
      user: { id: 1, username: 'bde_user', role: 'bde', isAuthenticated: true },
      permissions: [
        'front_desk:*',
        'lab_desk:*',
        'finance:*',
        'data_analysis:*',
        'admin_desk:*',
        'marketing:*',
        'subscription:*',
        'user_management'
      ]
    },
    lab_admin: {
      access: 'jwt-token-labadmin',
      user: { id: 2, username: 'lab_admin1', role: 'lab_admin', isAuthenticated: true },
      permissions: [
        'front_desk:billing_b2c:read',
        'lab_desk:clinical_master:read'
      ]
    }
  },
  labs: [
    { id: 1, name: 'City Pathology', location: 'Downtown', sections: [] }
  ],
  users: [
    { id: 3, username: 'lab_user1', role: 'lab_user', labId: 1 }
  ]
};

const API_URL = 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (credentials) => {
  const role = credentials.username === 'bde_user' ? 'bde' : 'lab_admin';
  const response = dummyData.login[role];
  localStorage.setItem('token', response.access);
  store.dispatch(setUser(response.user));
  store.dispatch(setPermissions(response.permissions));
  return response;
};

export const getLabs = async () => ({ data: dummyData.labs });
export const createLab = async (labData) => {
  const newLab = { id: dummyData.labs.length + 1, ...labData, sections: [] };
  dummyData.labs.push(newLab);
  return { data: newLab };
};
export const createSection = async (labId, sectionData) => {
  const lab = dummyData.labs.find(l => l.id === labId);
  lab.sections.push(sectionData);
  return { data: sectionData };
};
export const createSubsection = async (sectionId, subsectionData) => ({ data: subsectionData });
export const getUsers = async () => ({ data: dummyData.users });
export const createUser = async (userData) => {
  const newUser = { id: dummyData.users.length + 1, ...userData };
  dummyData.users.push(newUser);
  return { data: newUser };
};
export const assignLabRole = async (labId, roleData) => ({ data: roleData });
export const logoutUser = () => {
  localStorage.removeItem('token');
  store.dispatch(logout());
};

export default api;