import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";

const Reminder = () => {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("2023-01-01");

  function changeTime() {
    var timeInput = document.getElementById("time-input");
    var clock = document.getElementById("clock");
    clock.innerHTML = timeInput.value;
    setTime(timeInput.value);
  }

  function changeDate() {
    var dateInput = document.getElementById("date-input");
    var date = document.getElementById("date");
    date.innerHTML = dateInput.value.split("-").reverse().join("/");

    setDate(dateInput.value);
  }
  return (
    <div className="reminder-main">
      <input
        type="time"
        id="time-input"
        value={time}
        onChange={() => changeTime()}
      />
      <input
        type="date"
        id="date-input"
        value={date}
        onChange={() => changeDate()}
      />
      <button className="btn">
        Add <FaPlusCircle />
      </button>

      <ul></ul>
    </div>
  );
};
export default Reminder;
