function MissingKeywords({ keywords }) {
  return (
    <div className="card">
      <h3>Missing ATS Keywords</h3>

      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
}

export default MissingKeywords;