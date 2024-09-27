// src/components/Level.tsx

import React from "react";

interface LevelProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  levels: string[]; // Add levels prop
}

const Level: React.FC<LevelProps> = ({
  selectedLevel,
  onLevelChange,
  levels,
}) => {
  return (
    <>
      <h3 className="mb-3 text-xs font-semibold text-neutral-600 md:text-sm">
        Select difficulty
      </h3>
      <select
        className="mb-10 rounded-lg bg-neutral-50 px-1 py-2 text-xs font-medium capitalize text-gray-700 ring-[1px] ring-gray-200 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-orange-500 md:py-3 md:text-sm"
        name="level"
        value={selectedLevel}
        onChange={(e) => onLevelChange(e.target.value)}
      >
        {levels.map(
          (
            level, // Use levels prop
          ) => (
            <option value={level} key={level}>
              {level}
            </option>
          ),
        )}
      </select>
    </>
  );
};

export default Level;
