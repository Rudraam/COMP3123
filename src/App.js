import "./App.css";
import logo from "./logo.svg";

export default function App() {
  // ← Edit these two lines with your real info
  const STUDENT_ID = "101502928";
  const STUDENT_NAME = "Rudramani Dhiman";

  return (
    <main className="certificate">
      <img src={logo} className="react-mark" alt="React logo" />

      <h1 className="title">Welcome to Fullstack Development - I</h1>
      <h2 className="subtitle">React JS Programming Week09 Lab exercise</h2>

      <p className="line strong">{STUDENT_ID}</p>
      <p className="line">{STUDENT_NAME}</p>
      <p className="line small">George Brown College, Toronto</p>
    </main>
  );
}
