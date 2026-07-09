import React, { useState } from "react";

const SportsEnrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
  });

  const [submittedBy, setSubmittedBy] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Sports Enrollment
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
          required
        />

        <select
          name="sport"
          value={formData.sport}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
          required
        >
          <option value="">Select Sport</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
          <option value="Badminton">Badminton</option>
          <option value="Swimming">Swimming</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
        >
          Enroll Now
        </button>

        {submittedBy && (
          <div className="mt-5 p-3 bg-green-100 text-green-700 rounded text-center">
            Enrollment submitted by: <strong>{submittedBy}</strong>
          </div>
        )}
      </form>
    </div>
  );
};

export default SportsEnrollment;