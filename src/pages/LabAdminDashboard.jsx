import React from 'react';
import UserManagement from '../components/UserManagement';
import { useSelector } from 'react-redux';

function LabAdminDashboard() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lab Admin Dashboard</h1>
      <UserManagement user={user} />
    </div>
  );
}

export default LabAdminDashboard;