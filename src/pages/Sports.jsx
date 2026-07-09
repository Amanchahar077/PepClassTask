import { Link } from "react-router-dom";
import SportsEnrollment from "../components/SportsEnrollment";

const Sports = () => {
  return (
    <main className="page">
      <Link className="back-link" to="/">
        Back to home
      </Link>
      <SportsEnrollment />
    </main>
  );
};

export default Sports;
