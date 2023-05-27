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

  fetchUserInfo: async function () {
    try {
      const response = await fetch("http://localhost/api/userInfo", {
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  fetchThisMonthPointDetail: async function () {
    try {
      const response = await fetch(
        "http://localhost/api/detail/point/this_month",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
  fetchHistoryPointDetail: async function () {
    try {
      const response = await fetch(
        "http://localhost/api/detail/point/history",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },
  fetchDepositCoinDetail: async function () {
    try {
      const response = await fetch("http://localhost/api/detail/coin/deposit", {
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  fetchHistoryConvertCoinDetail: async function () {
    try {
      const response = await fetch("http://localhost/api/detail/coin/convert", {
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  fetchEstimateCoinDetail: async function () {
    try {
      const response = await fetch("http://localhost/api/detail/coin/estimate", {
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  },

  handleChangeConvertValue: async function (amount) {
    await axios
      .post(
        `http://localhost/api/coin/convert`,
        { amount: amount},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("Error", error.message);
      });
  },
};

export { UserService };
