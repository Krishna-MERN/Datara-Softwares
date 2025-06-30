import { useState } from "react";
import "./Styles/InternAttendance.css";
import Clock from "./Clock";

export default function InternAttendance() {
  const [userId, setUserId] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) return alert("Please enter a User ID");
    console.log("Attendance recorded:", { userId, isPresent });
    alert("Attendance marked successfully!");
    setUserId("");
    setIsPresent(false);
  };

  return (
    <div className="Container1">
        <Clock />
      <h2 className="heading">Demographic</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your User ID"
          className="id"
          required
        />
        <table ><div className="btn"> 
          <th><td><input
            type="radio"
            checked={isPresent}
            onChange={() => setIsPresent(true)}
          /></td>
          <td><label>I am here to work</label></td></th>
        </div></table>
        <button type="submit" className="submit-btn">Mark Demographic</button>
      </form>

      <div className="Instructions"> 
        <h5>Instructions</h5>
          <ul> Working time for interns is from morning 09:30 to evening 03:00.</ul>
          <ul> Demographic will be countable only if it is Done between 09:30 AM - 10:10AM. </ul>
          <ul> Continue 3 missing Demographic will not be tolerable. </ul>
    
      </div>
    </div>
  );
}
