import React, { useMemo, useState } from "react";
import { levels } from "./data/historyLevels";
import HomeScreen from "./screens/HomeScreen";
import TimelineScreen from "./screens/TimelineScreen";
import ConceptsScreen from "./screens/ConceptsScreen";
import OralPracticeScreen from "./screens/OralPracticeScreen";
import ReviewScreen from "./screens/ReviewScreen";
import "./App.css";

function totalQuestions() {
  return levels.reduce((sum, level) => sum + level.questions.length, 0);
}

export default function App() {
  const [selectedLevelId, setSelectedLevelId] = useState(levels[0].id);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

const [reviewQuestions, setReviewQuestions] = useState<string[]>([]);
  const [phase, setPhase] = useState<
    "home" | "timeline" | "concepts" | "practice" | "mistakes"
  >("home");

  const selectedLevel = useMemo(
    () => levels.find((level) => level.id === selectedLevelId) || levels[0],
    [selectedLevelId]
  );

  const currentQuestion = selectedLevel.questions[questionIndex];
  const progress = Math.round((completed.length / totalQuestions()) * 100);

  function startLevel(id: string) {
    setSelectedLevelId(id);
    setQuestionIndex(0);
    setShowHint(false);
    setShowModel(false);
    setPhase("timeline");
  }

  function goHome() {
    setPhase("home");
    setShowHint(false);
    setShowModel(false);
  }

  function goNextPhase() {
    if (phase === "timeline") setPhase("concepts");
    else if (phase === "concepts") setPhase("practice");
    else if (phase === "practice") setPhase("mistakes");
  }

  function goPreviousPhase() {
    if (phase === "mistakes") setPhase("practice");
    else if (phase === "practice") setPhase("concepts");
    else if (phase === "concepts") setPhase("timeline");
  }

  function nextQuestion() {
    setShowHint(false);
    setShowModel(false);
    setQuestionIndex((prev) => (prev + 1) % selectedLevel.questions.length);
  }

  function previousQuestion() {
    setShowHint(false);
    setShowModel(false);
    setQuestionIndex(
      (prev) => (prev - 1 + selectedLevel.questions.length) % selectedLevel.questions.length
    );
  }

  function markDone() {
    const key = `${selectedLevel.id}-${questionIndex}`;
    setCompleted((prev) => (prev.includes(key) ? prev : [...prev, key]));
  }
  function evaluateAnswer(levelId: string, questionIndex: number, result: string) {

    const key = `${levelId}-${questionIndex}`;
  
    if (result === "mastered") {
      setXp(prev => prev + 25);
    }
  
    if (result === "almost") {
      setXp(prev => prev + 10);
    }
  
    if (result === "review") {
  
      setReviewQuestions(prev => {
  
        if (prev.includes(key)) return prev;
  
        return [...prev, key];
      });
    }
  
    markDone();
  }
  function resetProgress() {
    setCompleted([]);
    setQuestionIndex(0);
    setShowHint(false);
    setShowModel(false);
    setPhase("home");
  }

  const phaseTitle = {
    home: "Panel de misiones",
    timeline: "Línea del tiempo",
    concepts: "Conceptos clave",
    practice: "Práctica oral",
    mistakes: "Revisión final",
  }[phase];

  return (
    <div className="app-shell">
      <header className="topbar">
        <button onClick={goHome} className="logo">
          <div className="logo-icon">⏳</div>

          <div>
            <h1>Cronos Diver 4º</h1>
            <p>Repaso oral de Historia</p>
          </div>
        </button>

        <div className="topbar-actions">
          <div className="progress-mini">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p>{progress}% completado</p>
          </div>
          <div className="xp-badge">
  ⚡ {xp} XP
</div>
          <button onClick={resetProgress} className="navigation-button">
            Reiniciar
          </button>
        </div>
      </header>

      {phase === "home" && (
        <HomeScreen
          levels={levels}
          completed={completed}
          onStart={startLevel}
        />
      )}

      {phase !== "home" && (
        <main className="screen-card">
          <div className="phase-nav">
            <button
              onClick={() => setPhase("timeline")}
              className={phase === "timeline" ? "active" : ""}
            >
              1 · Tiempo
            </button>

            <button
              onClick={() => setPhase("concepts")}
              className={phase === "concepts" ? "active" : ""}
            >
              2 · Conceptos
            </button>

            <button
              onClick={() => setPhase("practice")}
              className={phase === "practice" ? "active" : ""}
            >
              3 · Oral
            </button>

            <button
              onClick={() => setPhase("mistakes")}
              className={phase === "mistakes" ? "active" : ""}
            >
              4 · Revisión
            </button>
          </div>

          <section style={{ marginTop: "32px" }}>
            {phase === "timeline" && (
              <TimelineScreen selectedLevel={selectedLevel} />
            )}

            {phase === "concepts" && (
              <ConceptsScreen selectedLevel={selectedLevel} />
            )}

            {phase === "practice" && (
              <OralPracticeScreen
                currentQuestion={currentQuestion}
                questionIndex={questionIndex}
                selectedLevel={selectedLevel}
                previousQuestion={previousQuestion}
                nextQuestion={nextQuestion}
                showHint={showHint}
                setShowHint={setShowHint}
                showModel={showModel}
                setShowModel={setShowModel}
                markDone={markDone}
                evaluateAnswer={evaluateAnswer}
              />
            )}

            {phase === "mistakes" && (
              <ReviewScreen selectedLevel={selectedLevel} />
            )}
          </section>

          <footer
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={goPreviousPhase}
              disabled={phase === "timeline"}
              className="navigation-button"
            >
              ⬅️ Anterior
            </button>

            <p style={{ color: "#94a3b8", textAlign: "center" }}>
              {phaseTitle} · {selectedLevel.topic}
            </p>

            <button
              onClick={goNextPhase}
              disabled={phase === "mistakes"}
              className="navigation-button primary"
            >
              Siguiente ➡️
            </button>
          </footer>
        </main>
      )}
    </div>
  );
}