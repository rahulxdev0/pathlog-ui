import React, { useState, useEffect } from 'react';
import { getUsers, createUser, assignLabRole } from '../services/api';

function UserManagement({ user }) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', role: 'lab_user', labId: 1 });
  const [roleAssignment, setRoleAssignment] = useState({ userId: '', section: '', subsection: '', permissions: { insert: false, update: false, delete: false } });

  useEffect(() => {
    if (user.role === 'lab_admin' || user.role === 'bde') {
      getUsers().then((response) => setUsers(response.data));
    }
  }, [user]);

  const handleCreateUser = async () => {
    await createUser(newUser);
    setNewUser({ username: '', role: 'lab_user', labId: 1 });
    getUsers().then((response) => setUsers(response.data));
  };

  const handleAssignRole = async () => {
    await assignLabRole(1, roleAssignment);
    setRoleAssignment({ userId: '', section: '', subsection: '', permissions: { insert: false, update: false, delete: false } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      {user.role === 'lab_admin' && (
        <>
          <h3>Create User</h3>
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            placeholder="Username"
            className="p-2 border rounded mb-2"
          />
          <button onClick={handleCreateUser} className="p-2 bg-[#388697] text-white rounded">
            Create User
          </button>
        </>
      )}
      {user.role === 'bde' && (
        <>
          <h3>Assign Permissions</h3>
          <select
            value={roleAssignment.userId}
            onChange={(e) => setRoleAssignment({ ...roleAssignment, userId: e.target.value })}
            className="p-2 border rounded mb-2"
          >
            <option value="">Select User</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>{u.username}</option>
            ))}
          </select>
          <select
            value={roleAssignment.section}
            onChange={(e) => setRoleAssignment({ ...roleAssignment, section: e.target.value })}
            className="p-2 border rounded mb-2"
          >
            <option value="">Select Section</option>
            <option value="front_desk">Front Desk</option>
            <option value="lab_desk">Lab Desk</option>
            <option value="finance">Finance</option>
            <option value="data_analysis">Data Analysis</option>
            <option value="admin_desk">Admin Desk</option>
            <option value="marketing">Marketing</option>
            <option value="subscription">Subscription</option>
          </select>
          <input
            type="text"
            value={roleAssignment.subsection}
            onChange={(e) => setRoleAssignment({ ...roleAssignment, subsection: e.target.value })}
            placeholder="Subsection (e.g., billing_b2c)"
            className="p-2 border rounded mb-2"
          />
          <label>
            <input
              type="checkbox"
              checked={roleAssignment.permissions.insert}
              onChange={(e) => setRoleAssignment({
                ...roleAssignment,
                permissions: { ...roleAssignment.permissions, insert: e.target.checked }
              })}
            />
            Insert
          </label>
          <label>
            <input
              type="checkbox"
              checked={roleAssignment.permissions.update}
              onChange={(e) => setRoleAssignment({
                ...roleAssignment,
                permissions: { ...roleAssignment.permissions, update: e.target.checked }
              })}
            />
            Update
          </label>
          <button onClick={handleAssignRole} className="p-2 bg-[#388697] text-white rounded">
            Assign Permissions
          </button>
        </>
      )}
      <h3 className="mt-4">Users:</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username} - {u.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;