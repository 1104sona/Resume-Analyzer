function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div className="card">
      <h3>Job Description</h3>

      <textarea
        rows="8"
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px"
        }}
      />
    </div>
  );
}

export default JobDescription;