import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="page">
      <section className="panel home-panel">
        <h1>Student Portal</h1>

        <div className="button-list">
          <button
            onClick={() => navigate("/feedback")}
            className="button"
          >
            Feedback
          </button>

          <button
            onClick={() => navigate("/attendance")}
            className="button"
          >
            Attendance
          </button>

          <button
            onClick={() => navigate("/sports-enrollment")}
            className="button"
          >
            Sports Enrollment
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
