const UserService = {
  fetchUsers: async function () {
    try {
      const response = await fetch("http://localhost/api/users", {
        credentials: "include", // これがないと、フェッチはクッキーを含まないらしい → middleware auth:sanctum でrejectされちゃう
      });
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
        credentials: "include",
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
        credentials: "include",
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
