import { useState } from "react";
import axios from "axios";

function ResumeUpload({ setAnalysis, jobDescription }) {

  const [file, setFile] = useState(null);

  const handleSubmit = async () => {

    if (!file) {
      alert("Please select a resume");
      return;
    }

    const formData = new FormData();

    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);

    try {

      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );
      
      console.log(response.data);
      setAnalysis(response.data);

      alert("Resume analyzed successfully!");

    } catch (error) {

      console.error(error);
      alert("Upload failed");
    }
  };

  return (
  <div className="upload-section">
    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setFile(e.target.files[0])}
    />

    <button onClick={handleSubmit}>
      Analyze Resume
    </button>
  </div>
)};

export default ResumeUpload;