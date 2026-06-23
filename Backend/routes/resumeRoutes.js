const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const Resume = require("../models/Resume");

const router = express.Router();

const upload = multer({
  dest: "uploads/"
});

router.post(
  "/upload",
  upload.single("resume"),
  async (req, res) => {
    try {

      const pdfBuffer = fs.readFileSync(req.file.path);

      const data = await pdfParse(pdfBuffer);

      const resumeText = data.text;

      const jobDescription =
        req.body.jobDescription || "";

      const requiredSkills = [
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "Git",
        "HTML",
        "CSS"
      ];

      // Matched Skills
      const matchedSkills = [];

      requiredSkills.forEach(skill => {
        if (
          resumeText
            .toLowerCase()
            .includes(skill.toLowerCase())
        ) {
          matchedSkills.push(skill);
        }
      });

      // Resume Score
      const score = Math.round(
        (matchedSkills.length /
          requiredSkills.length) * 100
      );

      // Missing Skills
      const missingSkills =
        requiredSkills.filter(
          skill => !matchedSkills.includes(skill)
        );

      // Skills present in Job Description
      const jobSkills = [];

      requiredSkills.forEach(skill => {
        if (
          jobDescription
            .toLowerCase()
            .includes(skill.toLowerCase())
        ) {
          jobSkills.push(skill);
        }
      });

      // Skills common in Resume & Job Description
      const matchedJobSkills =
        matchedSkills.filter(skill =>
          jobSkills.includes(skill)
        );

      // Job Match Score
      const jobMatchScore =  
        jobSkills.length === 0
          ? 0
          : Math.round(
              (matchedJobSkills.length /
                jobSkills.length) * 100
            );
            console.log("Job Description:", jobDescription);
            console.log("Matched Skills:", matchedSkills);
            console.log("Job Skills:", jobSkills);
            console.log("Matched Job Skills:", matchedJobSkills);
            console.log("Job Match Score:", jobMatchScore); 

            const newResume = new Resume({
                         score,
                         matchedSkills,
                         missingSkills,
                         jobMatchScore
            });

            await newResume.save();
            const atsKeywords = [
                    "REST API",
                    "Express.js",
                    "MongoDB",
                    "React",
                    "Node.js",
                    "Git",
                    "GitHub",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "SQL",
                    "Agile",
                    "Teamwork",
                    "Problem Solving"
                  ];
  const foundKeywords = atsKeywords.filter(keyword =>
  resumeText.toLowerCase().includes(
    keyword.toLowerCase()
  )
  );

  const missingKeywords = atsKeywords.filter(
  keyword => !foundKeywords.includes(keyword)
  );

  const atsScore = Math.round(
  (foundKeywords.length /
    atsKeywords.length) * 100
  );

      res.json({
        score,
        matchedSkills,
        missingSkills,
        jobMatchScore,
        atsScore,
        missingKeywords
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message: "Error reading PDF"
      });
    }
  }
);
router.get("/history", async (req, res) => {
  try {

    const resumes = await Resume.find()
      .sort({ createdAt: -1 });

    res.json(resumes);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching history"
    });
  }
});

module.exports = router;