// src/components/LanguageDropdown.js

import React from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="mb-4 mr-4 flex justify-end">
      {/* Language Dropdown */}
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="rounded-md border-2 border-blue-400 px-4 py-2 ring-2 ring-blue-400 hover:bg-blue-300"
      >
        <option value="en">English</option>
        <option value="et">Estonian</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguageDropdown;
