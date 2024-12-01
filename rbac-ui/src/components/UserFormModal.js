import React, { useState } from "react";

const UserFormModal = ({ onSubmit, roles, user }) => {
  const [formData, setFormData] = useState(
    user || { name: "", email: "", role: "", status: "Active" }
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Role:
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select Role</option>
          {roles.map(role => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserFormModal;
