import React from "react";
import { I18nextProvider } from "react-i18next";
import AppRouter from "./routes/AppRouter";
import { i18n } from "./i18n";
import LanguageDropdown from "./components/ui/LanguageDropdown"; // Import the LanguageDropdown

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <main className="">
        <AppRouter />
      </main>
    </I18nextProvider>
  );
}
