import { useState } from "react";
import axios from "axios";
import "../styles/admission.css";

function Admission() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    className: "",
    mobile: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     await axios.post(
  `${process.env.REACT_APP_API_URL}/admission`,
  formData
);

      alert("Admission Form Submitted Successfully ✅");

      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        className: "",
        mobile: "",
        address: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admission">

      <div className="admission-left">
        <h1>Admissions Open 2026-27</h1>

        <p>
          Join Aryen Gurukulam Academy and build a bright future.
        </p>

        <ul>
          <li>✔ Smart Classes</li>
          <li>✔ Experienced Teachers</li>
          <li>✔ Sports Facilities</li>
          <li>✔ Safe Environment</li>
        </ul>
      </div>

      <div className="admission-right">

        <h2>Apply Now</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            value={formData.motherName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="className"
            placeholder="Class"
            value={formData.className}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Admission;