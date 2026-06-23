function JobMatch({ matchScore }) {
  return (
    <div className="card">
      <h3>Job Match Score</h3>

      <h1>{matchScore}%</h1>
    </div>
  );
}

export default JobMatch;