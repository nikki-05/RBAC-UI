let users = [
    { id: 1, name: "Nikita", email: "me@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Nikita Tiwari", email: "nikitatewari1633@example.com", role: "Editor", status: "Inactive" },
    {id : 3, name: "Example3", email: "example3@gmail.com", role: "Student", status:"Inactive"},
  ];
  
  let roles = [
    { id: 1, name: "Admin",  description: "Full access",permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", description: "Edit access", permissions: ["Read", "Write"] },
  ];
  
  export const mockApi = {
    getUsers: () => Promise.resolve(users),
    addUser: user => {
      user.id = users.length + 1;
      users.push(user);
      return Promise.resolve(user);
    },
    editUser: updatedUser => {
      users = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
      return Promise.resolve(updatedUser);
    },
    deleteUser: id => {
      users = users.filter(user => user.id !== id);
      return Promise.resolve();
    },
    getRoles: () => Promise.resolve(roles),
    addRole: role => {
      role.id = roles.length + 1;
      roles.push(role);
      return Promise.resolve(role);
    },
    editRole: updatedRole => {
      roles = roles.map(role => (role.id === updatedRole.id ? updatedRole : role));
      return Promise.resolve(updatedRole);
    },
  };
  