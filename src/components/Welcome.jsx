import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseurl, mId, mc_ID, access } from "../utils/api";
// import CarMakeForm from "./CarMakeForm";
import CarMakeFormAgain from "./CarMakeFormAgain";
import ReactPaginate from "react-paginate";

function Welcome() {
  const [values, setValues] = useState([]),
    [formValue, setFormValue] = useState("");
  const handleList = (page) => {
    axios
      .get(
        `${baseurl}/company/${mc_ID}/${mId}/plan/car/make/?page=${
          page ? page : 1
        }`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setValues(res.data);
      });
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Welcome to new Page</h1>

        <CarMakeFormAgain
          values={formValue}
          setValues={setFormValue}
          handleList={handleList}
        />
        <ol>
          {values.results?.map((item) => (
            <li onClick={() => setFormValue(item)}>{item.name}</li>
          ))}
        </ol>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(page) => handleList(page.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={values.total_pages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default Welcome;
