import React from "react";

export default function ReviewScreen({ selectedLevel }) {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-300">
        Fase 4
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        Revisión final
      </h2>

      <p className="mt-3 max-w-3xl text-slate-300">
        Antes de terminar, comprueba que tu respuesta oral evita estos errores frecuentes.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        {selectedLevel.mistakes.map((mistake) => (

          <div
            key={mistake}
            className="rounded-[2rem] border border-rose-300/15 bg-rose-300/5 p-5 text-slate-200"
          >

            <p className="text-2xl">⚠️</p>

            <p className="mt-3 text-sm leading-relaxed">
              {mistake}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">

        <p className="text-lg font-black text-white">
          Cierre de misión
        </p>

        <p className="mt-2 text-slate-300">
          Vuelve al simulador oral y repite una respuesta intentando mejorar claridad, orden y vocabulario histórico.
        </p>

      </div>

    </div>
  );
}