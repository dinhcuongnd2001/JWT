import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

const setAuthorization = () => {
  const tokenStr = localStorage.getItem("token");
  const token = tokenStr ? JSON.parse(tokenStr) : null;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "bearer" + token;
  }
};
const removeAuthorization = () => {
  delete axios.defaults.headers.common["Authorization"];
};

class APIClient {
  create = (url, data) => {
    removeAuthorization();
    return axios.post(url, data);
  };

  update = (url, data) => {
    removeAuthorization();
    return axios.put(url, data);
  };

  delete = (url, config) => {
    removeAuthorization();
    return axios.delete(url, { ...config });
  };
}

export { APIClient, setAuthorization, removeAuthorization };
