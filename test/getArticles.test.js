
import axios from "axios";
import getArticles from "./getArticles";

test("should fetch article search", () => {
  axios.get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles`).then((res) => {
    expect(getArticles()).toEqual(res.data);
  });
});
