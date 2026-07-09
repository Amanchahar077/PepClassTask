import { useState } from "react";
import { FiActivity, FiArrowRight, FiMail, FiUser } from "react-icons/fi";

const SportsEnrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
  });

  const [submittedBy, setSubmittedBy] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedBy(formData.name);

    alert(`Sports enrollment submitted successfully by ${formData.name}`);

    setFormData({
      name: "",
      email: "",
      sport: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-card form-card">
      <span className="badge">Sports</span>
      <h1>Join a Sport.</h1>
      <p className="intro-text">
        Pick your preferred sport and submit your enrollment.
      </p>

      <label className="field">
        <span>Full Name</span>
        <span className="input-wrap">
          <FiUser aria-hidden="true" />
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </span>
      </label>

      <label className="field">
        <span>Email Address</span>
        <span className="input-wrap">
          <FiMail aria-hidden="true" />
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </span>
      </label>

      <label className="field">
        <span>Sport</span>
        <span className="input-wrap">
          <FiActivity aria-hidden="true" />
        <select
          name="sport"
          value={formData.sport}
          onChange={handleChange}
          required
        >
          <option value="">Select Sport</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
          <option value="Badminton">Badminton</option>
          <option value="Swimming">Swimming</option>
        </select>
        </span>
      </label>

      <button type="submit" className="submit-button">
        Submit Form <FiArrowRight aria-hidden="true" />
      </button>

      {submittedBy && (
        <p className="success-message">
          Enrollment submitted by <strong>{submittedBy}</strong>
        </p>
      )}
    </form>
  );
};

export default SportsEnrollment;
