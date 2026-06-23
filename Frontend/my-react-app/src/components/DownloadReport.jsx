import jsPDF from "jspdf";

function DownloadReport({ analysis }) {

  const generatePDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Resume Analysis Report", 20, 20);

    doc.setFontSize(14);

    doc.text(
      `Resume Score: ${analysis.score}%`,
      20,
      40
    );

    doc.text(
      `Job Match Score: ${analysis.jobMatchScore}%`,
      20,
      50
    );

    doc.text(
      "Matched Skills:",
      20,
      70
    );

    analysis.matchedSkills.forEach(
      (skill, index) => {
        doc.text(
          `- ${skill}`,
          30,
          80 + index * 10
        );
      }
    );

    const startY =
      100 +
      analysis.matchedSkills.length * 10;

    doc.text(
      "Missing Skills:",
      20,
      startY
    );

    analysis.missingSkills.forEach(
      (skill, index) => {
        doc.text(
          `- ${skill}`,
          30,
          startY + 10 + index * 10
        );
      }
    );

    doc.save("Resume_Report.pdf");
  };

  return (
    <button className="download-btn"onClick={generatePDF}>
        Download PDF Report
    </button>
  );
}

export default DownloadReport;