import React from 'react';
import LabManagement from '../components/LabManagement';
import UserManagement from '../components/UserManagement';
import { useSelector } from 'react-redux';

function BDEDashboard() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">BDE Dashboard</h1>
      <LabManagement user={user} />
      <UserManagement user={user} />
    </div>
  );
}

export default BDEDashboard;