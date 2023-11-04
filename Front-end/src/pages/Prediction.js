import search_animal from './search'
import axios from 'axios'
import { createRef, useRef, useState } from 'react'
import sympthons from './sympthons'
import FinalPredict from './FinalPredict'

const Prediction = () => {
  // const [checked, setChecked] = useState(false);
  const [values, setValues] = useState([])
  const [pred, setPred] = useState(false)
  const handleChange = (e) => {
    if (e.target.checked) {
      const x = []
      x.push(e.target.value)
      setValues(values.concat(x))
    } else {
      const newx = values.filter((it) => {
        return it !== e.target.value
      })
      setValues(newx)
    }
  }
  // console.log(values);
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post('http://localhost:8000/prediction-data/654687f6d27109e4f54ac15d', {
        body: values,
      })
      if (resp.status === 200) {
        alert('Action done!!!!!!😍😍😍')
        console.log(pred)
        setPred(true)
      } else {
        console.error('Something went wrong!!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {pred === true ? (
        <FinalPredict />
      ) : (
        <div className="docupload">
          <input
            id="searchbar"
            onKeyUp={() => search_animal()}
            type="text"
            name="search"
            placeholder="Search animals.."
          />
          <div className="selectedItems">
            {values.map((element, id) => {
              return (
                <div className="items" key={id}>
                  {element}
                </div>
              )
            })}
          </div>
          <div className="submit-btn">
            <input
              type="button"
              className="btn"
              name="submit"
              value="submit"
              onClick={handleSubmit}
            />
          </div>
          <ul id="list">
            <form onSubmit={handleSubmit}>
              {sympthons.map((element, id) => {
                return (
                  <div className="animals" key={id}>
                    <input
                      type="checkbox"
                      id={id}
                      name={element}
                      value={element}
                      onChange={handleChange}
                    />
                    <label for={id}>{element}</label>
                  </div>
                )
              })}
            </form>
          </ul>
        </div>
      )}
    </div>
  )
}
export default Prediction
