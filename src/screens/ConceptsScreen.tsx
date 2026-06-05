import React from "react";

export default function ConceptsScreen({ selectedLevel }) {
  return (
    <div className="mission-screen">
  
      <p className="phase-label">
        Fase 2 · Conceptos clave
      </p>
  
      <h2 className="phase-title">
        Prepara tu vocabulario histórico
      </h2>
  
      <p className="phase-description">
        Una buena respuesta oral necesita palabras históricas bien usadas, no solo memoria.
      </p>
  
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
  
        <div className="futuristic-card">
  
          <h3
            style={{
              color: "#6ee7b7",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            Objetivos del oral
          </h3>
  
          <div style={{ marginTop: "20px" }}>
  
            {selectedLevel.oralGoals.map((goal) => (
              <div
                key={goal}
                style={{
                  background: "rgba(2,6,23,0.5)",
                  padding: "16px",
                  borderRadius: "18px",
                  marginBottom: "12px",
                  color: "#e2e8f0",
                }}
              >
                ✓ {goal}
              </div>
            ))}
  
          </div>
  
        </div>
  
        <div className="futuristic-card">
  
          <h3
            style={{
              color: "#fcd34d",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            Conceptos clave
          </h3>
  
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
  
            {selectedLevel.keyConcepts.map((concept) => (
  
              <div
                key={concept}
                style={{
                  background: "rgba(2,6,23,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "12px 16px",
                  color: "#e2e8f0",
                  fontWeight: "bold",
                }}
              >
                {concept}
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </div>
  
      <div className="quick-challenge">
  
        <p className="quick-challenge-title">
          Reto rápido
        </p>
  
        <p className="quick-challenge-text">
          Elige tres conceptos y únelos en una explicación de 30 segundos.
        </p>
  
      </div>
  
    </div>
  );
}