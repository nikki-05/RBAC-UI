import React from "react";

const RoleTable = ({ roles, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Description</th>
          <th>Permissions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map(role => (
          <tr key={role.id}>
            <td>{role.name}</td>
            <td>{role.description}</td>
            <td>{role.permissions.join(", ")}</td>
            <td>
              <button onClick={() => onEdit(role)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;

