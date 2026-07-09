import { useState } from "react";
import { FiArrowRight, FiCheckCircle, FiMail, FiUser } from "react-icons/fi";

const AttendanceSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "",
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

    alert(`Attendance submitted successfully by ${formData.name}`);

    setFormData({
      name: "",
      email: "",
      status: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-card form-card">
      <span className="badge">Attendance</span>
      <h1>Mark Your Attendance.</h1>
      <p className="intro-text">
        Submit your attendance with your name and email address.
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
        <span>Status</span>
        <span className="input-wrap">
          <FiCheckCircle aria-hidden="true" />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Attendance</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        </span>
      </label>

      <button type="submit" className="submit-button">
        Submit Form <FiArrowRight aria-hidden="true" />
      </button>

      {submittedBy && (
        <p className="success-message">
          Attendance submitted by <strong>{submittedBy}</strong>
        </p>
      )}
    </form>
  );
};

export default AttendanceSignUp;
