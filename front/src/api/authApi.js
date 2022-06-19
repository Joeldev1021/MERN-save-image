import axios from "axios";

export const authSignUpApi = async (user) => {
  const token = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    data: {
      username: user.username,
      email: user.email,
      password: user.password
    },
    url: "http://localhost:4000/auth/signup"
  });

  return token.data.token;
};

export const authSignInApi = async (user) => {
  const res = await axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    data: {
      username: user.username,
      password: user.password
    },
    url: "http://localhost:4000/auth/signin"
  });

  return res;
};

export const getProfileUser = async (token) => {
  const url = "http://localhost:4000/user/profile";
  const resUser = await axios(url, {
    method: "GET",
    headers: {
      Authorization: `${token}`
    }
  });
  return resUser;
};
