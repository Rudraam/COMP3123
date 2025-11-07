import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [submitted, setSubmitted] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>Lab Week 10</h1>
      </header>

      <main className="container">
        <section className="card">
          <h2 className="section-title">Data Entry Form</h2>
          <Form onSubmit={setSubmitted} />
        </section>

        {submitted && (
          <section className="card">
            <h2 className="section-title">Submitted Output</h2>
            {/* Render in the exact label/value block format */}
            <Display data={submitted} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
