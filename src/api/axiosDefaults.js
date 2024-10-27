import axios from "axios";

axios.defaults.baseURL = "https://vernon-makes-pancakes-c73f647bd403.herokuapp.com"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true