import axios from "axios";

export default {
  requestArticles() {
    return axios.get(
      `https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles`
    );
  },
  requestArticleSearch(data) {
    return axios.get(
      `https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=${data}`
    );
  },
  requestArticleId(data) {
    return axios.get(
      `https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/${data}`
    );
  },
};
