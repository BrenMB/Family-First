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
async function signUp(user) {
  const res = await axiosAPI.post("/auth/signup", user);
  if (!res.data.error) {
    localStorage.setItem("user-token", res.data.token);
  }
}

async function addGuest(guest) {
  const res = await axiosAPI.post("/auth/addGuest", guest);
  return res.data;
}

async function login(email, pwd) {
  const res = await axiosAPI.post("/auth/login", { email, pwd });
  if (!res.data.error) {
    console.log("no error data");
    console.log(res);
    localStorage.setItem("user-token", res.data.token);
  }
  return res.data;
}

async function createChild(child) {
  const res = await axiosAPI.post("/child", child, {
    headers: { token: localStorage.getItem("user-token") },
  });
  return res.data;
}

async function seeYourUser() {
  const token = localStorage.getItem("user-token");
  const { data } = await axiosAPI.get("/users/me", { headers: { token } });
  return data;
}

async function addTodo(todo) {
  const token = localStorage.getItem("user-token");
  const { data } = await axiosAPI.post("/todo", todo, { headers: { token } });
  return data;
}

async function seeTodos() {
  const token = localStorage.getItem("user-token");
  const { data } = await axiosAPI.get("/todo", { headers: { token } });
  return data;
}

export default {
  login,
  signUp,
  createChild,
  addGuest,
  seeYourUser,
  addTodo,
  seeTodos,
};
