const UserService = {
  fetchUsers: async function () {
    try {
      const response = await fetch("http://localhost/api/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  deleteUser: async function (user_id) {
    try {
      const response = await fetch(`http://localhost/api/users/${user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  updateUserRole: async function (user_id, is_admin) {
    try {
      const response = await fetch(`http://localhost/api/users/role/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          is_admin: is_admin,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};

export { UserService };
