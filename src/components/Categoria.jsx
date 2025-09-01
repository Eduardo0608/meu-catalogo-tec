import React from "react";
import Produto from "./Produto";

export default function Categoria({ nome, produtos }) {
  return (
    <section
      style={{
        margin: "2rem auto",
        maxWidth: "1200px",
        width: "100%",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen',
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
          color: "#1d1d1f",
          borderLeft: "4px solid #0071e3",
          paddingLeft: "0.6rem",
        }}
      >
        {nome}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {produtos.map((p, i) => (
          <Produto key={i} produto={p} />
        ))}
      </div>
    </section>
  );
}
