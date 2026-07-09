import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="page">
      <section className="contact-card home-card">
        <span className="badge">Student Portal</span>
        <h1>Choose a Form.</h1>
        <p className="intro-text">
          Select what you want to submit today.
        </p>

        <div className="button-list">
          <button
            onClick={() => navigate("/feedback")}
            className="menu-button"
          >
            Feedback
            <FiArrowRight aria-hidden="true" />
          </button>

          <button
            onClick={() => navigate("/attendance")}
            className="menu-button"
          >
            Attendance
            <FiArrowRight aria-hidden="true" />
          </button>

          <button
            onClick={() => navigate("/sports-enrollment")}
            className="menu-button"
          >
            Sports Enrollment
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
