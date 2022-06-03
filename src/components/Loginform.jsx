import React from "react";
import { useState } from "react";
import "./Loginform.css";
import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";
import { baseurl } from "../utils/api";
import Auth from "./Auth";
// import Welcome from './Welcome'
// import Auth from "./Auth";

const Loginform = () => {
  const [values, setValues] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const localvalue = () => {
    return localStorage.getItem(values);
  };
  // console.log(localvalue);

  const handleApi2 = (res) => {
    const result = res.info;
    axios
      .post(
        `${baseurl}/account/${result[0].company_id}/${result[0].member_id}/permission/${result[0].member_id}/`,
        values,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${res.access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${baseurl}/account/signin/`, values, {
        headers: {
          "content-type": "application/json",
          Authorization: `Api-Key EfTInBId.BVLtUaXQouH3hSGmuaWvUI93jGV6lc73`,
        },
      })
      .then((res) => {
        console.log(res);
        handleApi2(res.data);

        // localStorage.setItem("userdata", JSON.stringify(res.data));
        //   const result = res.data.info;
        //   axios
        //     .post(
        //       `${baseurl}/account/${result[0].company_id}/${result[0].member_id}/permission/${result[0].member_id}/`,
        //       {
        //         headers: {
        //           "content-type": "application/json",
        //           Authorization: `Bearer ${res.data.access_token}`,
        //         },
        //       }
        //     )
        //     .then(res);
        //   // setTimeout(() => {
        //   //   window.location.reload();
        //   // }, 1000);
      });
  };

  return (
    <>
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
    </>
  );
};

export default Loginform;
