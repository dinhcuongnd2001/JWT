import React, { useState, useEffect } from "react";
import axios from "axios";

import request from "../../utils/request";
import { APIClient } from "../../helper/apiHelper";
function Home() {
  const [info, setInfo] = useState({ username: "", password: "" });
  const api = new APIClient();
  const Login = (url, data) => {
    return api.create(url, data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // request
    //   .post("", info)
    //   .then((res) => console.log(res.data))
    //   .catch((e) => console.log(e));
    Login("http://localhost:4000", info).then((StrToken) => {
      localStorage.setItem("token", JSON.stringify(StrToken.data.accessToken));
    });
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            value={info.username}
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            name="username"
            id="form2Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example1">
            username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={info.password}
            onChange={(e) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            name="password"
            type="password"
            id="form2Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </>
  );
}

export default Home;
