import { Routes, Route, Navigate } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Welcome from "../pages/Welcome";
import Result from "../pages/Result";
import MenuBar from "../components/ui/MenuBar/MenuBar";

export default function AppRouter() {
  return (
    <>
      <MenuBar logo="/logo.jpg" />
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate to="/welcome" replace={true} />} />
      </Routes>
    </>
  );
}
