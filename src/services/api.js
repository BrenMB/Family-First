import axios from "axios";

// let token = "";

const axiosAPI = axios.create({
  //baseURL: "https://family-first-api.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

// async function signUp(email, pwd) {
//   const res = await axiosAPI.post("/auth/login", { email, pwd });
//   token = res.data.token;
// }

async function login(email, pwd) {
  const res = await axiosAPI.post("/auth/login", { email, pwd });
  console.log(res)
  // token = res.data.token;
}

// async function seeYourUser(token) {
//   const res = await axiosAPI.get("/users/me", { headers: { token } });
//   console.log(res);
// }
export default {
  login,
  // seeYourUser,
};
