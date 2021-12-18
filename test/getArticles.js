import axios from "axios";

const getArticles = () => {
  return axios.get(
    "https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles"
  ).then(res=>res.data);
};

module.exports = getArticles;
