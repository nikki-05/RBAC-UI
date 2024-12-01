import React, { useState, useEffect } from "react";
import { mockApi } from "../api/mockApi";
import RoleTable from "../components/RoleTable";
import RoleFormModal from "../components/RoleFormModal";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [editingRole, setEditingRole] = useState(null);

  useEffect(() => {
    mockApi.getRoles().then(setRoles);
  }, []);

  const handleAddEditRole = role => {
    if (role.id) {
      mockApi.editRole(role).then(updatedRole =>
        setRoles(roles.map(r => (r.id === updatedRole.id ? updatedRole : r)))
      );
    } else {
      mockApi.addRole(role).then(newRole => setRoles([...roles, newRole]));
    }
    setEditingRole(null);
  };

  return (
    <div>
      <h1>Role Management</h1>
      <RoleTable roles={roles} onEdit={setEditingRole} />
      <button onClick={() => setEditingRole({})}>Add Role</button>
      {editingRole && (
        <RoleFormModal
          role={editingRole}
          permissions={["Read", "Write", "Delete"]}
          onSubmit={handleAddEditRole}
        />
      )}
    </div>
  );
};

export default RoleManagement;
