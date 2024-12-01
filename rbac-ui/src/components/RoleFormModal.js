import React, { useState } from "react";

const RoleFormModal = ({ onSubmit, role = {}, permissions = [] }) => {
  const [formData, setFormData] = useState({
    name: role.name || "",  // Ensure role name is empty string if not provided
    permissions: role.permissions || [],  // Ensure permissions is an empty array if not provided
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const updatedPermissions = checked
      ? [...formData.permissions, name]
      : formData.permissions.filter((permission) => permission !== name);
    setFormData({ ...formData, permissions: updatedPermissions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role Name:
        <input
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </label>
      <fieldset>
        <legend>Permissions:</legend>
        {permissions.length === 0 ? (
          <p>No permissions available</p>
        ) : (
          permissions.map((permission) => (
            <label key={permission}>
              <input
                type="checkbox"
                name={permission}
                checked={formData.permissions.includes(permission)}
                onChange={handleChange}
              />
              {permission}
            </label>
          ))
        )}
      </fieldset>
      <button type="submit">Save</button>
    </form>
  );
};

export default RoleFormModal;
