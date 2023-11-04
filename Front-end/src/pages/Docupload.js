const Docupload = () => {
  return (
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
  )
}
export default Docupload
