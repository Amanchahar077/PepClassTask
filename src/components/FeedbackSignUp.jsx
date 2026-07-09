import { useState } from "react";
import { FiArrowRight, FiMail, FiMessageSquare, FiUser } from "react-icons/fi";

const FeedbackSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
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

    alert(`Feedback submitted successfully by ${formData.name}`);

    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-card form-card">
      <span className="badge">Contact Us</span>
      <h1>Let&apos;s Get In Touch.</h1>
      <p className="intro-text">
        Or just reach out manually to us at <a href="mailto:hello@pepbulb.com">hello@pepbulb.com</a>
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
        <span>Message</span>
        <span className="input-wrap textarea-wrap">
          <FiMessageSquare aria-hidden="true" />
        <textarea
          name="feedback"
          placeholder="Enter your message"
          value={formData.feedback}
          onChange={handleChange}
          rows="4"
          required
        />
        </span>
      </label>

      <button type="submit" className="submit-button">
        Submit Form <FiArrowRight aria-hidden="true" />
      </button>

      {submittedBy && (
        <p className="success-message">
          Feedback submitted by <strong>{submittedBy}</strong>
        </p>
      )}
    </form>
  );
};

export default FeedbackSignUp;
