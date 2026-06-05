import React from "react";

export default function HomeScreen({
  levels,
  completed,
  onStart,
}) {
  return (
    <main className="home-grid">
      
      
      {/* PANEL IZQUIERDO */}
      <section className="hero-card">

        <div>
        <div className="dashboard-top">

<div className="avatar-card">
  <div className="avatar-circle">
    👩‍🚀
  </div>

  <div>
    <p className="avatar-name">
      Agente Cronos
    </p>

    <p className="avatar-subtitle">
      Exploradora temporal
    </p>
  </div>
</div>

<div className="stats-grid">

  <div className="stat-card">
    <p className="stat-number">12</p>
    <p className="stat-label">🔥 Racha</p>
  </div>

  <div className="stat-card">
    <p className="stat-number">840</p>
    <p className="stat-label">⚡ XP</p>
  </div>

  <div className="stat-card">
    <p className="stat-number">68%</p>
    <p className="stat-label">📚 Dominio</p>
  </div>

</div>

</div>
          <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
            Centro Cronos
          </p>
          <h1 className="hero-title">
          Historia Contemporánea
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Entrena tu examen oral viajando por las grandes etapas de la historia.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl">⏳</p>
            <h3 className="mt-2 font-bold text-white">Línea temporal</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl">🧠</p>
            <h3 className="mt-2 font-bold text-white">Conceptos</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl">🎤</p>
            <h3 className="mt-2 font-bold text-white">Práctica oral</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl">🔥</p>
            <h3 className="mt-2 font-bold text-white">Racha</h3>
          </div>

        </div>
      </section>

      {/* PANEL DERECHO */}
      <section className="missions-card">
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            Misiones históricas
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Selecciona un tema
          </h2>
        </div>

        <div className="space-y-4">

          {levels.map((level) => {

            const doneInLevel = level.questions.filter((_, idx) =>
              completed.includes(`${level.id}-${idx}`)
            ).length;

            return (
              <button
              key={level.id}
              onClick={() => onStart(level.id)}
              className="mission-card"
            >

                <div className="flex items-center justify-between">

                <div className="mission-row">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-xl font-black text-cyan-200">
                      {level.order}
                    </div>

                    <div>
                      <h3 className="font-black text-white">
                        {level.topic}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {level.description}
                      </p>
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-cyan-200">
                      {doneInLevel}/{level.questions.length}
                    </p>

                    <p className="text-xs text-slate-500">
                      completadas
                    </p>
                  </div>

                </div>

              </button>
            );
          })}

        </div>
      </section>

    </main>
  );
}