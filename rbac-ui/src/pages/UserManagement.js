import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Nikita", email: "me1@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Nikki", email: "me2@example.com", role: "Editor", status: "Inactive" },
    { id: 3, name: "Nikita Tiwari", email: "nikitatewari1633@gmail.com", role: "Admin", status: "Inactive" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  const [editUserId, setEditUserId] = useState(null);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleAddUserClick = () => {
    setShowAddUserForm(!showAddUserForm); // Toggle form visibility
    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setEditUserId(null); // Reset edit mode if toggling
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUserSubmit = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("Please fill in all fields.");
      return;
    }

    if (editUserId) {
      setUsers(users.map((u) => (u.id === editUserId ? { ...u, ...newUser } : u)));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }

    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setShowAddUserForm(false);
    setEditUserId(null);
  };

  const handleEditClick = (user) => {
    setNewUser(user);
    setEditUserId(user.id);
    setShowAddUserForm(true);
  };

  const handleDeleteClick = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, email, or role"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      {showAddUserForm && (
        <div className="add-user-form">
          <h3>{editUserId ? "Edit User" : "Add New User"}</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newUser.role}
            onChange={handleInputChange}
          />
          <select name="status" value={newUser.status} onChange={handleInputChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button onClick={handleAddUserSubmit}>{editUserId ? "Update User" : "Add User"}</button>
        </div>
      )}
      <button onClick={handleAddUserClick} className="add-user-btn">
        {showAddUserForm ? "Cancel" : "Add User"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleEditClick(user)} className="edit">
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(user.id)} className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
