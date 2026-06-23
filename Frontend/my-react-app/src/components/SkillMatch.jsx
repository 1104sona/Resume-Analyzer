function SkillMatch({ skills = [] }) {
  return (
    <div className="card">
      <h3>Matched Skills</h3>

      {skills.length === 0 ? (
        <p>No skills detected yet</p>
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

export default SkillMatch;