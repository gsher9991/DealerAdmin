import { access, baseurl } from "../utils/api";
import { React, useState } from "react";
import axios from "axios";
import { mc_ID, mId } from "../utils/api";

function CarMakeForm() {
  const [values, setValues] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${baseurl}/company/${mc_ID}/${mId}/plan/car/make/`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("data", JSON.stringify(res.data));
        const result = res.data.info;
        console.log(result);
      });
  };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Count
        </label>
        <input
          type="email"
          name="count"
          className="form-control"
          onChange={handleChange("email")}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Page Number
        </label>
        <input
          type="password"
          name="p-number"
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
  );
}

export default CarMakeForm;
