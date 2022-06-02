import React from "react";
import { useState } from "react";
import "./Loginform.css";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { baseurl } from "../utils/api";
import Welcome from './Welcome'

const Loginform = () => {
  const [values, setValues] = useState("");



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
        console.log(res.data);

        const localvalue = localStorage.getItem(values, JSON.stringify(values));
        console.log(localvalue);
        localvalue && <Link to= {{pathname: `${Welcome}`}} />
        
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

    {/* <Router>

      <Routes>
        <Route exact path="/" component={"form1"}></Route>
        <Route exact path="./Welcome.jsx" component={"form2"}></Route>
      </Routes>

    </Router> */}



    </>
  );
};

export default Loginform;
