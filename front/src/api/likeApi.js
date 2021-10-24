import axios from "axios";

export const apiAddLikes = async(imgId, token)=> {
    const res = await axios({
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        data: {
          like:imgId,
          
        },
        url: `http://localhost:4000/img/like/add/${imgId}`,
      });
      return res
}
