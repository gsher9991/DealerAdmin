import { access, baseurl } from "../utils/api";
import { React } from "react";
import axios from "axios";
import { mc_ID, mId } from "../utils/api";

function CarMakeFormAgain({ values, setValues, handleList }) {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${baseurl}/company/${mc_ID}/${mId}/plan/car/make/`, values, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      })
      .then((res) => {
        handleList();
        setValues({ name: "", id: "" });
      });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `${baseurl}/company/${mc_ID}/${mId}/plan/car/make/detail/${values.id}/`,
        values,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        handleList();
        setValues({ name: "", id: "" });
      });
  };

  const handledelete = (e) => {
    axios
      .delete(
        `${baseurl}/company/${mc_ID}/${mId}/plan/car/make/detail/${values.id}/`,

        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((res) => {
        handleList();
        setValues({ name: "", id: "" });
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Count
        </label>
        <input
          type="text"
          name="count"
          className="form-control"
          onChange={handleChange("name")}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={values.name}
        />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          values.id ? handleUpdate(e) : handleApi(e);
        }}
        className="btn btn-primary"
      >
        {values.id ? "Update" : "Submit"}
      </button>
      {values.id && (
        <button
          type="button"
          onClick={(e) => {
            handledelete(e);
          }}
          className="btn btn-danger"
        >
          delete
        </button>
      )}
    </form>
  );
}

export default CarMakeFormAgain;
