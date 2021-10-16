const { default: axios } = require("axios");

export const apiGetNotes = async(token)=> {
 const res = await axios({
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        url: "http://localhost:4000/note",
   });
   return res
}


export const apiAddNotes = async(newNote, token)=> {
    const res = await axios({
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token,
        },
        data: {
          title: newNote.title,
          description: newNote.description,
        },
        url: "http://localhost:4000/note/add",
      });
      return res
}


export const apiEditeNotes = async(note, token)=> {
    const res = await axios({
        method: "PUT",
        headers: {Authorization:token},
        data: {
          title: note.title,
          description: note.description,
        },
        url: `http://localhost:4000/note/edite/${note._id}`,
      });
      return res
}

export const apiDeleteNotes = async(id,token)=> {
    const res = await axios({
        method: "DELETE",
        headers: { Authorization: token },
        url: `http://localhost:4000/note/delete/${id}`,
      });
      return res
}



