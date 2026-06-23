function MissingSkills({ skills = [] }) {
  return (
    <div className="card">
      <h3>Missing Skills</h3>

      {skills.length === 0 ? (
        <p>No missing skills 🎉</p>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MissingSkills;