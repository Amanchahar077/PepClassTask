import { Link } from "react-router-dom";
import AttendanceSignUp from "../components/AttendanceSignUp";

const Attendance = () => {
  return (
    <main className="page">
      <Link className="back-link" to="/">
        Back to home
      </Link>
      <AttendanceSignUp />
    </main>
  );
};

export default Attendance;
