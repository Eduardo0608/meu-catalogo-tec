import React from "react";

import dellLogo from "../assets/dell.png";
import hpLogo from "../assets/hp.png";
import kingstonLogo from "../assets/kingston.png";
import logitechLogo from "../assets/logitech.png";
import razerLogo from "../assets/razer.png";

const logos = {
  dell: dellLogo,
  hp: hpLogo,
  kingston: kingstonLogo,
  logitech: logitechLogo,
  razer: razerLogo,
};

export default function Produto({ produto }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "18px",
        padding: "1.5rem",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
      }}
    >
      {/* Marca */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        {logos[produto.marca.toLowerCase()] && (
          <img
            src={logos[produto.marca.toLowerCase()]}
            alt={produto.marca}
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Nome */}
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1d1d1f",
          textAlign: "center",
        }}
      >
        {produto.nome}
      </h3>

      {/* Preço */}
      <p
        style={{
          fontSize: "1rem",
          color: "#6e6e73",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        {produto.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      {/* Condição */}
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontSize: "0.85rem",
          color: produto.condicao === "novo" ? "#0071e3" : "#6e6e73",
          fontWeight: "500",
        }}
      >
        {produto.condicao === "novo" ? "Novo" : "Usado"}
      </span>
    </div>
  );
}
