import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="panel form-card">
      <h1>Feedback Form</h1>

      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Feedback
        <textarea
          name="feedback"
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows="4"
          required
        />
      </label>

      <button type="submit" className="button">
        Submit Feedback
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
