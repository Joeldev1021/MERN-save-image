import axios from "axios";

export const commentApi = async (imgId, comment, token) => {
  const res = await axios({
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token
    },
    data: {
      imgId,
      comment
    },
    url: `http://localhost:4000/img/comment/add/${imgId}`
  });
  return res;
};
