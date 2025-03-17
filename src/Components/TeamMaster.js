import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TeamMaster = () => {
  const [team, setTeam] = useState('');
  const [rowData, setRowData] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [errors, setErrors] = useState({ team: '' });
  const [editingTeam, setEditingTeam] = useState(null); // State to track the team being edited

  useEffect(() => {
    // Fetch initial data from the server
    axios.get('http://localhost:3001/teams')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Fetch team names for the dropdown
    axios.get('http://localhost:3001/api/teams')
      .then(response => {
        setTeamOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching team options:', error);
      });
  }, []);

  const columnDefs = [
    { headerName: "Serial No", field: "id", flex: 1 },
    { headerName: "Teams", field: "user_teams", flex: 1 },
    {
      headerName: "Actions",
      field: 'actions',
      cellRenderer: (params) => (
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:underline" onClick={() => handleEdit(params.data)}>Update</button>
          <button className="text-red-600 hover:underline" onClick={() => handleDelete(params.data.id)}>Delete</button>
        </div>
      ),
    },
  ];

  const handleSave = () => {
    if (team) {
      const teamId = teamOptions.find(t => t.team_list === team).id; // Get the corresponding ID from teamOptions
      if (editingTeam) {
        // Update existing team
        const updatedTeam = { ...editingTeam, user_teams: teamId };
        setRowData(rowData.map(row => row.id === editingTeam.id ? updatedTeam : row));

        // Send updated data to the server
        axios.put(`http://localhost:3001/team/${editingTeam.id}`, updatedTeam)
          .then(response => {
            console.log('Data updated successfully:', response.data);
          })
          .catch(error => {
            console.error('Error updating data:', error);
          });
      } else {
        // Create new team
        const newTeam = { user_teams: teamId };
        axios.post('http://localhost:3001/team', newTeam)
          .then(response => {
            setRowData([...rowData, { ...newTeam, id: response.data.insertId }]);
            console.log('Data saved successfully:', response.data);
          })
          .catch(error => {
            console.error('Error saving data:', error);
          });
      }

      // Reset form
      setTeam('');
      setEditingTeam(null);
    }
  };

  const handleEdit = (teamData) => {
    setEditingTeam(teamData);
    const teamName = teamOptions.find(option => option.id === teamData.user_teams)?.team_list || '';
    setTeam(teamName);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this team?`)) {
      axios.delete(`http://localhost:3001/team/${id}`)
        .then(response => {
          setRowData(rowData.filter(row => row.id !== id));
          console.log('Data deleted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error deleting data:', error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setTeam(value);
    clearErrorMessage('team');
  };

  const clearErrorMessage = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!team) {
      newErrors.team = 'Team is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSave();
    } else {
      console.log("Please fill in all required fields!");
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded mb-6" style={{ height: 275, width: '90%' }}>
        <div className="bg-teal-500 text-white px-6 py-3 rounded-t">
          <h2 className="text-xl font-bold">TEAM MASTER</h2>
        </div>
        <div className="p-8">
          <div className="mb-4">
            <label className="block text-gray-700">Select Team:<span className="text-red-500">*</span></label>
            <select
              name="team"
              value={team}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded"
            >
              <option value="">Select Team</option>
              {teamOptions.map(option => (
                <option key={option.id} value={option.team_list}>{option.team_list}</option>
              ))}
            </select>
            {errors.team && <span className="text-red-500 text-sm mt-1">{errors.team}</span>}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleFormSubmit}
              className="px-4 py-2 bg-teal-500 text-white rounded"
            >
              {editingTeam ? 'Update' : 'Save'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 bg-white shadow-md rounded mb-9">
        <div className="p-9">
          <h2 className="text-teal-500 text-xl font-bold mb-6">View Team Master</h2>
          <div className="ag-theme-alpine" style={{ height: 500, width: '100%', padding: '0 24px' }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={{ sortable: true, filter: true }}
              pagination={true}
              paginationPageSize={10}
              paginationNumberFormatter={params => `${params.value}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMaster;
