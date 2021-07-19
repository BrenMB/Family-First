import axios from "axios";

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
    localStorage.setItem("user-token", res.data.token);
  }
}

async function login(email, pwd) {
  const res = await axiosAPI.post("/auth/login", { email, pwd });
  if (!res.data.error) {
    localStorage.setItem("user-token", res.data.token);
  }
  return res.data;
}

async function createChild(
  firstName,
  lastName,
  birthday,
  gender,
  inviteeEmail
) {
  const res = await axiosAPI.post(
    "/child/",
    {
      firstName,
      lastName,
      birthday,
      gender,
      inviteeEmail,
    },
    { headers: { token: localStorage.getItem("user-token") } }
  );
  return res.data;
}
// async function seeYourUser(token) {
//   const res = await axiosAPI.get("/users/me", { headers: { token } });
//   console.log(res);
// }
export default {
  login,
  signUp,
  createChild,
  // seeYourUser,
};
