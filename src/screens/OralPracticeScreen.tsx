import React from "react";

export default function OralPracticeScreen({
  currentQuestion,
  questionIndex,
  selectedLevel,
  previousQuestion,
  nextQuestion,
  showHint,
  setShowHint,
  showModel,
  setShowModel,
  markDone,
    evaluateAnswer,
  }) {

  return (
    <div className="mission-screen">
      <p className="phase-label">
        Fase 3 · Simulador oral
      </p>
  
      <h2 className="phase-title">
        Entrena tu respuesta
      </h2>
  
      <p className="phase-description">
        Responde en voz alta como si estuvieras en el examen. Después usa la pista o la respuesta modelo para mejorar.
      </p>
  
      <div className="oral-card">
        <div className="oral-card-header">
          <span className="oral-badge">
            Pregunta {questionIndex + 1} de {selectedLevel.questions.length}
          </span>
  
          <div className="oral-arrows">
            <button onClick={previousQuestion}>⬅️</button>
            <button onClick={nextQuestion}>➡️</button>
          </div>
        </div>
  
        <h3 className="oral-question">
          {currentQuestion.question}
        </h3>
  
        <div className="oral-instruction">
          🎤 Responde durante 45-60 segundos:
          <strong> idea principal → explicación → ejemplo → cierre.</strong>
        </div>
  
        <div className="oral-actions">
          <button onClick={() => setShowHint((prev) => !prev)}>
            💡 {showHint ? "Ocultar pista" : "Ver pista"}
          </button>
  
          <button onClick={() => setShowModel((prev) => !prev)}>
            🛡️ {showModel ? "Ocultar modelo" : "Ver modelo"}
          </button>
  
          <button
  onClick={() => evaluateAnswer(selectedLevel.id, questionIndex, "mastered")}
  className="self-button mastered"
>
  🟢 Lo domino
</button>

<button
  onClick={() => evaluateAnswer(selectedLevel.id, questionIndex, "almost")}
  className="self-button almost"
>
  🟡 Casi lo domino
</button>

<button
  onClick={() => evaluateAnswer(selectedLevel.id, questionIndex, "review")}
  className="self-button review"
>
  🔴 Necesito repasar
</button>
        </div>
  
        {showHint && (
          <div className="feedback-panel">
            <p className="feedback-title">Pista</p>
            <p>{currentQuestion.hint}</p>
          </div>
        )}
  
        {showModel && (
          <div className="feedback-panel success-panel">
            <p className="feedback-title">Respuesta modelo</p>
            <p>{currentQuestion.model}</p>
          </div>
        )}
      </div>
    </div>
  );
}