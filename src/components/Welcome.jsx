import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl, mId, mc_ID, access } from "../utils/api";
import CarMakeForm from "./CarMakeForm";

function Welcome() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseurl}/company/${mc_ID}/${mId}/plan/car/make/`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        console.log(res);
        setValues(res.data.results);
      });
  }, []);
  <CarMakeForm />;

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Welcome to new Page</h1>

        <ul>
          {values.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Welcome;
