import React from "react";

export default function TimelineScreen({ selectedLevel }) {
  return (
    <div className="mission-screen">
      <p className="phase-label">Fase 1 · Línea temporal</p>
  
      <h2 className="phase-title">
        Sitúa los hechos en el tiempo
      </h2>
  
      <p className="phase-description">
        Antes de explicar, ordena. En una prueba oral, la cronología te da seguridad y estructura.
      </p>
  
      <div className="event-grid">
        {selectedLevel.events.map((event) => (
          <div
            key={`${event.year}-${event.title}`}
            className="futuristic-card"
          >
            <p className="event-year">{event.year}</p>
  
            <h3 className="event-title">
              {event.title}
            </h3>
  
            <p className="event-description">
              {event.description}
            </p>
          </div>
        ))}
      </div>
  
      <div className="quick-challenge">
        <p className="quick-challenge-title">
          Reto rápido
        </p>
  
        <p className="quick-challenge-text">
          Di los acontecimientos en orden y explica cuál fue el más importante.
        </p>
      </div>
    </div>
  );
}