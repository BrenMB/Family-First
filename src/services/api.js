import axios from "axios";

let token = "";
console.log(token); //no entiendo porque no ve como si estoy usando el token

const axiosAPI = axios.create({
  //baseURL: "https://family-first-api.herokuapp.com/api",
  baseURL: "http://localhost:3000/api",

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
//hago una llamada http request al backend
async function signUp(firstName, lastName, phoneNumber, email, pwd) {
  const res = await axiosAPI.post("/auth/signup", {
    firstName,
    lastName,
    phoneNumber,
    email,
    pwd,
  });
  if (!res.data.error) {
    token = res.data.token;
  }
}

async function login(email, pwd) {
  const res = await axiosAPI.post("/auth/login", { email, pwd });
  if (!res.data.error) {
    token = res.data.token;

  }
  return res.data;
}

// async function seeYourUser(token) {
//   const res = await axiosAPI.get("/users/me", { headers: { token } });
//   console.log(res);
// }
export default {
  login,
  signUp,
  // seeYourUser,
};
