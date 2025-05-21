import React, { useState, useEffect } from 'react';
import { createLab, getLabs, createSection, createSubsection } from '../services/api';

function LabManagement({ user }) {
  const [labs, setLabs] = useState([]);
  const [newLab, setNewLab] = useState({ name: '', location: '' });
  const [newSection, setNewSection] = useState('');
  const [newSubsection, setNewSubsection] = useState({ name: '', permissions: { insert: true, update: false, delete: false } });

  useEffect(() => {
    if (user.role === 'bde') {
      getLabs().then((response) => setLabs(response.data));
    }
  }, [user]);

  const handleCreateLab = async () => {
    await createLab(newLab);
    setNewLab({ name: '', location: '' });
    getLabs().then((response) => setLabs(response.data));
  };

  const handleCreateSection = async (labId) => {
    await createSection(labId, { name: newSection });
    setNewSection('');
  };

  const handleCreateSubsection = async (sectionId) => {
    await createSubsection(sectionId, newSubsection);
    setNewSubsection({ name: '', permissions: { insert: true, update: false, delete: false } });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lab Management (BDE)</h2>
      {user.role === 'bde' && (
        <>
          <input
            type="text"
            value={newLab.name}
            onChange={(e) => setNewLab({ ...newLab, name: e.target.value })}
            placeholder="Lab Name"
            className="p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={newLab.location}
            onChange={(e) => setNewLab({ ...newLab, location: e.target.value })}
            placeholder="Location"
            className="p-2 border rounded mb-2"
          />
          <button onClick={handleCreateLab} className="p-2 bg-[#388697] text-white rounded">
            Create Lab
          </button>
          <h3 className="mt-4">Add Section</h3>
          <select
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
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
          <button onClick={() => handleCreateSection(1)} className="p-2 bg-[#388697] text-white rounded">
            Add Section
          </button>
        </>
      )}
      <h3 className="mt-4">Labs:</h3>
      <ul>
        {labs.map(lab => (
          <li key={lab.id}>{lab.name} - {lab.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default LabManagement;