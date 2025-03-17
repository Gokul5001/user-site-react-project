import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm] = useState('');
  const [employeeStatusFilter, setEmployeeStatusFilter] = useState('Live');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching employees:', error));
  }, []);

  const handleEdit = useCallback((id) => {
    navigate(`/edit/${id}`);
  }, [navigate]);

  const handleDelete = useCallback((id) => {
    setSelectedEmployeeId(id);
    setIsModalVisible(true);
  }, []);

  const confirmDelete = () => {
    fetch(`http://localhost:3001/employees/${selectedEmployeeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setEmployees(employees.filter((employee) => employee.id !== selectedEmployeeId));
          setIsModalVisible(false);
        } else {
          console.error('Error deleting employee:', response);
        }
      })
      .catch((error) => console.error('Error deleting employee:', error));
  };

  const cancelDelete = () => {
    setIsModalVisible(false);
  };

  const handleAddNew = () => {
    navigate('/register');
  };

  const handleStatusFilterChange = (e) => {
    setEmployeeStatusFilter(e.target.value);
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredEmployees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'employees.xlsx');
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (employeeStatusFilter === '' || employee.employeeStatus === employeeStatusFilter)
      );
    });
  }, [employees, searchTerm, employeeStatusFilter]);

  const columns = useMemo(() => [
    { headerName: 'Employee Code', field: 'ecode', sortable: true, filter: true, resizable: true },
    { headerName: 'Fingerprint ID', field: 'fid', sortable: true, filter: true, resizable: true },
    { headerName: 'Name', field: 'name', sortable: true, filter: true, resizable: true },
    { headerName: 'Username', field: 'username', sortable: true, filter: true, resizable: true },
    { headerName: 'Ugroup', field: 'ugroup', sortable: true, filter: true, resizable: true },
    { headerName: 'Designation', field: 'designation', sortable: true, filter: true, resizable: true },
    { headerName: 'Team', field: 'team', sortable: true, filter: true, resizable: true },
    { headerName: 'Password', field: 'password', sortable: true, filter: true, resizable: true },
    { headerName: 'Date of Birth', field: 'dob', sortable: true, filter: true, resizable: true },
    { headerName: 'Date of Joining', field: 'doj', sortable: true, filter: true, resizable: true },
    { headerName: 'Date of Release', field: 'dor', sortable: true, filter: true, resizable: true },
    { headerName: 'Marital Status', field: 'ms', sortable: true, filter: true, resizable: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true, resizable: true },
    { headerName: 'Blood Group', field: 'bg', sortable: true, filter: true, resizable: true },
    { headerName: 'Father/Husband Name', field: 'fhname', sortable: true, filter: true, resizable: true },
    { headerName: 'Employee Status', field: 'employeeStatus', sortable: true, filter: true, resizable: true },
    { headerName: 'Company Email', field: 'cemail', sortable: true, filter: true, resizable: true },
    { headerName: 'Personal Email', field: 'pemail', sortable: true, filter: true, resizable: true },
    { headerName: 'Primary Mobile', field: 'mobile1', sortable: true, filter: true, resizable: true },
    { headerName: 'Secondary Mobile', field: 'mobile2', sortable: true, filter: true, resizable: true },
    { headerName: 'Additional Mobile', field: 'mobile3', sortable: true, filter: true, resizable: true },
    { headerName: 'Contact Person Primary', field: 'person1', sortable: true, filter: true, resizable: true },
    { headerName: 'Contact Person Secondary', field: 'person2', sortable: true, filter: true, resizable: true },
    { headerName: 'Contact Person Additional', field: 'person3', sortable: true, filter: true, resizable: true },
    { headerName: 'Present Address', field: 'address1', sortable: true, filter: true, resizable: true },
    { headerName: 'Permanent Address', field: 'address2', sortable: true, filter: true, resizable: true },
    { headerName: 'Qualification', field: 'qual', sortable: true, filter: true, resizable: true },
    { headerName: 'Institution', field: 'inst', sortable: true, filter: true, resizable: true },
    { headerName: 'Certificates', field: 'cert', sortable: true, filter: true, resizable: true },
    { headerName: 'Previous Experience', field: 'exp', sortable: true, filter: true, resizable: true },
    {
      headerName: 'Gross Salary',
      field: 'gs',
      sortable: true,
      filter: true,
      resizable: true,
      valueFormatter: ({ value }) => `₹ ${value.toFixed(2)}`,
    },
    { headerName: 'PF', field: 'pf', sortable: true, filter: true, resizable: true },
    { headerName: 'ESI', field: 'esi', sortable: true, filter: true, resizable: true },
    {
      headerName: 'Net Salary',
      field: 'netsal',
      sortable: true,
      filter: true,
      resizable: true,
      valueFormatter: ({ value }) => `₹ ${value.toFixed(2)}`,
    },
    { headerName: 'PF Number', field: 'pfn', sortable: true, filter: true, resizable: true },
    { headerName: 'ESI Number', field: 'esin', sortable: true, filter: true, resizable: true },
    { headerName: 'UAN', field: 'uan', sortable: true, filter: true, resizable: true },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => (
        <div style={{ display: 'flex', gap: '9px' ,justifyContent:'center'}}>
          <button
            style={{ backgroundColor: 'rgb(82 220 32)', color: 'white', border: 'none', padding: '1px 15px', borderRadius: '4px' }}
            onClick={() => handleEdit(params.data.id)}
          >
            Edit
          </button>
          <button
            style={{ backgroundColor: '#FA3712 ', color: 'white', border: 'none', padding: '1px 8px', borderRadius: '4px' }}
            onClick={() => handleDelete(params.data.id)}
          >
            Delete
          </button>
        </div>
      ),
      filter: false,
      sortable: false,
      resizable: false,
    },
  ], [handleEdit, handleDelete]);

  return (
    <div className="container mx-auto relative">
      <h1 className="text-3xl font-bold my-4">Employee List</h1>
      <div className="mb-4 flex space-x-4">

        <select
          value={employeeStatusFilter}
          onChange={handleStatusFilterChange}
          className="border rounded px-3 py-1"
        >
          <option value="">All Status</option>
          <option value="Live">Live</option>
          <option value="Relieved">Relieved</option>
        </select>
        <button
          onClick={handleExport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Export to Excel
        </button>
        <button
          onClick={handleAddNew}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Employee
        </button>
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: 600, width: '100%' }}
      >
        <AgGridReact
          rowData={filteredEmployees}
          columnDefs={columns}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
        />
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete this employee?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
