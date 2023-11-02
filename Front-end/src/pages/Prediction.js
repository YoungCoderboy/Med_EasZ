import search_animal from "./search";
import { createRef, useRef, useState } from "react";

const Prediction = () => {
  // const [checked, setChecked] = useState(false);
  const [values, setValues] = useState([]);
  const handleChange = (e) => {
    if (e.target.checked) {
      const x = [];
      x.push(e.target.value);
      setValues(values.concat(x));
    } else {
      const newx = values.filter((it) => {
        return it !== e.target.value;
      });
      setValues(newx);
    }
  };
  console.log(values);

  return (
    <div className="docupload">
      <input
        id="searchbar"
        onKeyUp={() => search_animal()}
        type="text"
        name="search"
        placeholder="Search animals.."
      />

      <ul id="list">
        <form>
          <div className="animals">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value=" I have a bike"
              onChange={handleChange}
            />
            <label for="vehicle1"> I have a bike</label>
          </div>
          <div className="animals">
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="I have a dog"
              onChange={handleChange}
            />
            <label for="vehicle2"> I have a dog</label>
          </div>
          <div className="animals">
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="I have a car"
              onChange={handleChange}
            />
            <label for="vehicle3"> I have a car</label>
          </div>
        </form>
      </ul>
    </div>
  );
};
export default Prediction;
