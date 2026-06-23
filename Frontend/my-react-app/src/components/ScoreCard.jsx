function ScoreCard({ score }) {

  return (
    <div className="card">
      <h3>Resume Score</h3>

      <h1>{score}%</h1>
    </div>
  );
}

export default ScoreCard;