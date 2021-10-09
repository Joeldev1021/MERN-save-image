import axios from "axios";

export async function getApiImg(token) {

    const res = await axios({
      method: "GET",
      headers: { authorization: token },
      url: "http://localhost:4000/img",
    });
    return res;
}

export async function apiUploadImg(data, token) {
  const res = await axios.post( "http://localhost:4000/img/upload",data, {
    headers: { 
      "content-type": "multipart/form-data",
      Authorization: token,
     },
  });
  return res
}
