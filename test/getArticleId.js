import axios from "axios";

const getArticleId = (data) => {
  return axios.get(
    `https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/${data}`
  ).then(res=>res.data);
};

module.exports = getArticleId;
