"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import demoData from "../../../demoData.json";
import { isDemo } from "../../lib/license";

export default function Dashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const data = isDemo ? demoData : [];

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: data.map(d => d.nombre),
        datasets: [
          {
            label: "Supuestos del Plan Estratégico",
            data: data.map(d => d.valor_oficial),
            borderColor: "#1e40af",
            backgroundColor: "rgba(30,64,175,0.2)"
          },
          {
            label: "Señales Emergentes",
            data: data.map(d => d.valor_real),
            borderColor: "#dc2626",
            backgroundColor: "rgba(220,38,38,0.2)"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>VESF™ – Dashboard Estratégico</h1>
      <p>
        Sistema de apoyo al juicio estratégico del Consejo.
        No predice eventos ni garantiza resultados financieros.
      </p>

      <canvas ref={canvasRef} />
    </main>
  );
}
