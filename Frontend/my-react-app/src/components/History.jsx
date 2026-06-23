import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/history")
      .then((res) => {
        setHistory(res.data);
      });

  }, []);

  return (
    <div className="card">
      <h3>Resume History</h3>

      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Job Match</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.score}%</td>
              <td>{item.jobMatchScore}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;