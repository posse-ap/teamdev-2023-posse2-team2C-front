const UserService = {
  fetchUsers: async function () {
    try {
      const response = await fetch("http://localhost/api/show/user");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
};

export { UserService };
