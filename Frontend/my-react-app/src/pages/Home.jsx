import { useState } from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import ScoreCard from "../components/ScoreCard";
import SkillMatch from "../components/SkillMatch";
import Suggestions from "../components/Suggestions";
import MissingSkills from "../components/MissingSkills";
import JobDescription from "../components/JobDescription";
import JobMatch from "../components/JobMatch";
import History from "../components/History";
import DownloadReport from "../components/DownloadReport";
import ATSScore from "../components/ATSScore";
import MissingKeywords from "../components/MissingKeywords";
function Home() {

  const [analysis, setAnalysis] = useState({
  score: 0,
  matchedSkills: [],
  missingSkills: [],
  jobMatchScore: 0,
  atsScore: 0,
  missingKeywords: []
});

  const [jobDescription, setJobDescription] = useState("");

  return (
    <>
      <Navbar />

      <div className="container">
        <ResumeUpload
            setAnalysis={setAnalysis}
            jobDescription={jobDescription}
        />

        <div className="dashboard">
          <ScoreCard score={analysis.score} />

          <SkillMatch skills={analysis.matchedSkills} />

          <MissingSkills skills={analysis.missingSkills} />
          <ATSScore score={analysis.atsScore} />
          <MissingKeywords keywords={analysis.missingKeywords} />
          <JobDescription jobDescription={jobDescription} setJobDescription={setJobDescription} />
          <JobMatch matchScore={analysis.jobMatchScore}/>

          <Suggestions />
          <History />
          
        </div>
        <DownloadReport analysis={analysis} />
      </div>
    </>
  );
}

export default Home;