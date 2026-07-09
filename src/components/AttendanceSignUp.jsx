import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="panel form-card">
      <h1>Attendance Form</h1>

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
        Attendance
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
      </label>

      <button type="submit" className="button">
        Submit Attendance
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
