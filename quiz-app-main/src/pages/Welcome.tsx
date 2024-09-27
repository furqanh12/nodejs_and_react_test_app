// src/Welcome.tsx

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Types, Level as Levels } from "../constant/data"; // Import constants
import Type from "../components/ui/Type";
import Level from "../components/ui/Level";

export default function Welcome() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  // State to manage type and level
  const [type, setType] = useState(Types[0].id); // Default to first type
  const [level, setLevel] = useState(Levels[0]); // Default to first level

  const handleStartQuiz = () => {
    navigate("/quiz", {
      state: { type, level }, // Pass type and level as state
    });
  };

  return (
    <div className="mx-auto mt-10 flex h-[80vh] w-4/5 flex-col items-center justify-center">
      <img
        width={900}
        height={563}
        className="w-96"
        src="/logo.jpg"
        alt="logo of CareerApp"
      />
      <h1 className="mb-10 break-words text-center text-4xl font-bold lg:text-5xl">
        {t("welcome")}
      </h1>
      <Type selectedType={type} onTypeChange={setType} />
      <Level selectedLevel={level} onLevelChange={setLevel} levels={Levels} />
      <button
        onClick={handleStartQuiz} // Use button instead of Link
        className="rounded-md px-6 py-2 ring-2 ring-blue-400 duration-300 hover:bg-blue-300"
      >
        {t("startQuiz")}
      </button>
    </div>
  );
}
