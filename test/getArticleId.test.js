import axios from "axios";
import getArticleId from "./getArticleId";

test("should fetch article search", () => {
  let data = 1
  axios.get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/${data}`).then((res) => {
    expect(getArticleId(data)).toEqual(res.data);
  });
});
