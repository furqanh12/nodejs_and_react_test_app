import React from "react";
import { Card, Typography } from "antd";

interface Question {
  id: number;
  question: any;
  correct_answer: string;
  user_answer: string | null;
}

interface ScoreDisplayProps {
  questions: any;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ questions }) => {
  const score = calculateScore(questions);
  const totalQuestions = questions.length;
  const percentage =
    totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(2) : 0;

  return (
    <Card style={{ margin: "20px", padding: "20px" }}>
      <Typography.Title level={3}>Quiz Result Summary</Typography.Title>
      {totalQuestions > 0 ? (
        <>
          <p>
            You answered <strong>{score}</strong> out of{" "}
            <strong>{totalQuestions}</strong> questions correctly!
          </p>
          <p>
            Total Percentage was <strong>{percentage}%</strong>
          </p>
        </>
      ) : (
        <p>Give Quiz first to Check Results</p>
      )}
    </Card>
  );
};

const calculateScore = (questions: Question[]) => {
  let score = 0;

  questions.forEach((q) => {
    if (q.user_answer === q.correct_answer) {
      score += 1;
    }
  });

  return score;
};

export default ScoreDisplay;
