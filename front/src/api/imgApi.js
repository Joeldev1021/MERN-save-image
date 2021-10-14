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
  const res = await axios.post("http://localhost:4000/img/upload", data, {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token,
    },
  });
  return res;
}

export async function getApiDeleteImg(id, token) {
  const res = await axios.delete(`http://localhost:4000/img/delete/${id}`,{
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token,
    },
  });
  return res;
}

export async function apiUpdateImg(img, token) {
  const res = await axios({
    method: "PUT",
    data: {
      title:img.title,
      description: img.description,
    },
    headers: {
       Authorization: token,
    },
    url: `http://localhost:4000/img/update/${img._id}`
  });
  return res;
}




