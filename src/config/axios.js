import axios from "axios";

axios.defaults.baseURL =
  location.origin.includes("127.0.0.1") || location.origin.includes("localhost")
    ? "http://localhost:3001/api"
    : `${location.origin}/api`;