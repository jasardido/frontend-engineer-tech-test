import axios from "axios";
import getArticleSearch from "./getArticleSearch";

test("should fetch article search", () => {
  let data = "Cheryl Dickinson"
  axios.get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=${data}`).then((res) => {
    expect(getArticleSearch(data)).toEqual(res.data);
  });
});
