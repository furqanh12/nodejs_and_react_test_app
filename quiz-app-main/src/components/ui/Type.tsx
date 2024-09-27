// src/components/Type.tsx

import React from "react";
import { Types } from "../../constant/data";

interface TypeProps {
  selectedType: any;
  onTypeChange: (type: any) => void;
}

const Type: React.FC<TypeProps> = ({ selectedType, onTypeChange }) => {
  return (
    <>
      <h3 className="mb-3 text-xs font-semibold text-neutral-600 md:text-sm">
        Select type
      </h3>
      <select
        className="mb-5 rounded-lg bg-neutral-50 px-1 py-2 text-xs font-medium text-gray-700 ring-[1px] ring-gray-200 focus:border-none focus:outline-none focus:ring-[1px] focus:ring-orange-500 md:py-3 md:text-sm"
        name="type"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        {Types.map((type) => (
          <option value={type.id} key={type.id}>
            {type.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Type;
