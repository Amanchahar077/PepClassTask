import { Link } from "react-router-dom";
import FeedbackSignUp from "../components/FeedbackSignUp";

const Feedback = () => {
  return (
    <main className="page">
      <Link className="back-link" to="/">
        Back to home
      </Link>
      <FeedbackSignUp />
    </main>
  );
};

export default Feedback;
