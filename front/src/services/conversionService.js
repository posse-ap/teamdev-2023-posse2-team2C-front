import axios from "../pages/auth/axios";

const ConversionService = {
  convert: async function (conversion_id) {
    await axios
      .get(`http://localhost:80/api/convert/${conversion_id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("error", error.message);
      });
  },
};

export { ConversionService };
