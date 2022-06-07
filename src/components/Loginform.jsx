import React from "react";
import { useState } from "react";
import "./Loginform.css";
import axios from "axios";
import { baseurl } from "../utils/api";

const Loginform = () => {
  const [values, setValues] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const localvalue = () => {
  //   return localStorage.getItem(values);
  // };
  // console.log(localvalue);

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${baseurl}/account/signin/`, values, {
        headers: {
          "content-type": "application/json",
          Authorization: `Api-Key 8hFyJ0l7.uffpruGbzVTRagDzZMGQz1Sxy4I2qVp6`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("data", JSON.stringify(res.data));
        const result = res.data.info;
        console.log(result);
        axios
          .post(
            `${baseurl}/account/${result[0].company_id}/${result[0].member_id}/permission/${result[0].member_id}/`,
            {
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${res.data.access_token}`,
              },
            }
            // localStorage.getItem(data.member_id)
          )
          .then((res) => {
            console.log(res);
            // localStorage.getItem("userdata", JSON.stringify(res.data.));
          });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });

    // const m_id = localStorage.getItem(result[0].member_id);
    // console.log(object);
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Login Form</h1>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange("email")}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange("password")}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => handleApi(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginform;
