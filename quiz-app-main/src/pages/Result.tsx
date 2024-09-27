import React, { useContext } from "react";
import { GlobalContext } from "../context/index";
import { evaluateScore, getPercentage } from "../helpers";
import { totalQuestions } from "../data";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf"; // Import jsPDF

const Result: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const { scores } = state;

  const navigate = useNavigate();

  const { totalCorrectAnswer } = evaluateScore(scores);
  const percentage = getPercentage(totalCorrectAnswer);

  // Function to download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Arial");

    // Title
    doc.setFontSize(20);
    doc.text("Your Personalized Career Report", 10, 10);

    // Overview
    doc.setFontSize(16);
    doc.text("Overview", 10, 20);
    doc.setFontSize(12);
    doc.text(
      "Hello, Maria! Based on your responses, you are a communicative and analytical person who enjoys working in a structured environment but also appreciates creative challenges.",
      10,
      30,
    );

    // Skills
    doc.setFontSize(16);
    doc.text("Your Top 3 Skills", 10, 50);
    doc.setFontSize(12);
    doc.text("1. Data Analysis 90%", 10, 60);
    doc.text("2. Project Management 85%", 10, 70);
    doc.text("3. Customer Relationship Management 80%", 10, 80);

    // Values and Interests
    doc.setFontSize(16);
    doc.text("Your Values and Interests", 10, 100);
    doc.setFontSize(12);
    doc.text("1. Continuous learning and development", 10, 110);
    doc.text("2. Work-life balance", 10, 120);
    doc.text("3. Innovation and use of new technologies", 10, 130);

    // Recommended Career Paths
    doc.setFontSize(16);
    doc.text("Recommended Career Paths", 10, 150);
    doc.setFontSize(12);
    doc.text("1. Data Analyst", 10, 160);
    doc.text("2. Business Analyst", 10, 170);
    doc.text("3. Project Manager in the Technology Sector", 10, 180);

    // Next Steps
    doc.setFontSize(16);
    doc.text("Next Steps", 10, 200);
    doc.setFontSize(12);
    doc.text(
      "1. Familiarize yourself more thoroughly with the job descriptions of data analysts and business analysts.",
      10,
      210,
    );
    doc.text(
      "2. Consider participating in an online course in data analysis or business analysis (e.g., on Coursera or edX platforms).",
      10,
      220,
    );
    doc.text(
      "3. Reach out to people in your network who work in these fields to get more information.",
      10,
      230,
    );

    // Additional Assistance
    doc.setFontSize(16);
    doc.text("Additional Assistance", 10, 250);
    doc.setFontSize(12);
    doc.text(
      "This report provides an initial overview of your career opportunities.",
      10,
      260,
    );

    // Save the PDF with a name
    doc.save("Career_Report.pdf");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Personalized Career Report</h1>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Overview</h2>
        <p>
          Hello, Maria! Based on your responses, you are a{" "}
          <span style={styles.highlight}>communicative and analytical</span>{" "}
          person who enjoys working in a structured environment but also
          appreciates creative challenges.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Your Top 3 Skills</h2>
        <div style={styles.skillBar}>
          <div style={{ ...styles.skillLevel, width: "90%" }}>
            Data Analysis 90%
          </div>
        </div>
        <div style={styles.skillBar}>
          <div style={{ ...styles.skillLevel, width: "85%" }}>
            Project Management 85%
          </div>
        </div>
        <div style={styles.skillBar}>
          <div style={{ ...styles.skillLevel, width: "80%" }}>
            Customer Relationship Management 80%
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Your Values and Interests</h2>
        <ul>
          <li>Continuous learning and development</li>
          <li>Work-life balance</li>
          <li>Innovation and use of new technologies</li>
        </ul>
        <p>
          These values align well with the{" "}
          <span style={styles.highlight}>
            technology and consulting sectors
          </span>
          .
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Recommended Career Paths</h2>
        <ol>
          <li>Data Analyst</li>
          <li>Business Analyst</li>
          <li>Project Manager in the Technology Sector</li>
        </ol>
        <div style={styles.recommendation}>
          <p>
            <strong>Recommendation:</strong> Your skills and interests suggest
            that you might consider moving into the field of data analysis or
            business analysis. These areas combine your strengths in analysis
            with your interest in technology and innovation.
          </p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Next Steps</h2>
        <ol>
          <li>
            Familiarize yourself more thoroughly with the job descriptions of
            data analysts and business analysts.
          </li>
          <li>
            Consider participating in an online course in data analysis or
            business analysis (e.g., on Coursera or edX platforms).
          </li>
          <li>
            Reach out to people in your network who work in these fields to get
            more information.
          </li>
        </ol>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Additional Assistance</h2>
        <p>
          This report provides an initial overview of your career opportunities.
          For a more comprehensive analysis and personalized advice, we
          recommend booking an appointment with our career counselor.
        </p>
        <p>
          <strong>Book a counseling appointment:</strong>{" "}
          <a href="https://www.careercounseling.com/book">
            www.careercounseling.com/book
          </a>
        </p>
      </div>

      {/* PDF Download Button */}
      <button style={styles.button} onClick={downloadPDF}>
        Download PDF
      </button>

      {/* Quiz Result Section */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Quiz Result Summary</h2>
        {scores.length ? (
          <>
            <p>
              You answered <strong>{totalCorrectAnswer}</strong> out of{" "}
              <strong>{totalQuestions}</strong> questions correctly!
            </p>
            <p>
              Total Percentage was <strong>{percentage}%</strong>
            </p>
          </>
        ) : (
          <p>Give Quiz first to Check Results</p>
        )}
        <button style={styles.button} onClick={() => navigate("/quiz")}>
          {scores.length ? "Restart Quiz" : "Start quiz"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    color: "#2c3e50",
  },
  section: {
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    padding: "20px",
    marginBottom: "20px",
  },
  highlight: {
    backgroundColor: "#e74c3c",
    color: "white",
    padding: "5px 10px",
    borderRadius: "3px",
  },
  skillBar: {
    backgroundColor: "#ecf0f1",
    height: "20px",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  skillLevel: {
    backgroundColor: "#3498db",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    color: "white",
  },
  recommendation: {
    borderLeft: "4px solid #2ecc71",
    paddingLeft: "15px",
    marginTop: "10px",
  },
  subtitle: {
    color: "#2c3e50",
  },
  button: {
    borderRadius: "4px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#2980b9",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default Result;
