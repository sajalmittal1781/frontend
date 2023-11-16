import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetailsTab = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        // console.log(response);
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []); 

  // console.log(users)

  // Empty dependency array ensures useEffect runs once on component mount

  // Filter users based on search term

  // const filteredUsers = users.filter(user =>
  //   user.username.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <h2>User Details</h2>
      <input
        type="text"
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>ID</th>
            <th>Creation Date</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {filteredUsers.map(user => ( */}
            {users.map(user => (
            <tr key={user.id}>
              <td>{user.password}</td>
              {/* <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.id}</td>
              <td>{user.creationDate}</td> */}
              <td>
                <button onClick={() => handleGenerateReport(user.id)}>
                  Generate Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Function to handle generating a report for the selected user

  const handleGenerateReport = (userId) => {
    // Implement logic to open modal or perform other actions
    console.log(`Generating report for user with ID: ${userId}`);
  };
};

export default UserDetailsTab;
