import React, { useState } from 'react';

export default function Formulario({ secoes, marcas, aoProdutoCadastrado }) {
  const [secao, setSecao] = useState(secoes[0]);
  const [marca, setMarca] = useState(marcas[0]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [condicao, setCondicao] = useState('novo');

  function aoSalvar(e) {
    e.preventDefault();
    aoProdutoCadastrado({
      secao,
      marca,
      nome,
      preco: parseFloat(preco),
      condicao
    });

    setSecao(secoes[0]);
    setMarca(marcas[0]);
    setNome('');
    setPreco('');
    setCondicao('novo');
  }

  return (
    <form
      onSubmit={aoSalvar}
      style={{
        margin: '2rem auto',
        display: 'grid',
        gap: '1rem',
        maxWidth: '420px',
        width: '100%',
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen'
      }}
    >
      {/* Seção e Marca */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <label style={{ flex: 1, display: 'flex', flexDirection: 'column', color: '#1d1d1f', fontWeight: '500' }}>
          Seção:
          <select
            value={secao}
            onChange={e => setSecao(e.target.value)}
            style={{
              marginTop: '0.4rem',
              padding: '0.6rem',
              border: '1px solid #d2d2d7',
              borderRadius: '12px',
              fontSize: '0.95rem',
              color: '#1d1d1f',
              background: '#f5f5f7'
            }}
          >
            {secoes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        <label style={{ flex: 1, display: 'flex', flexDirection: 'column', color: '#1d1d1f', fontWeight: '500' }}>
          Marca:
          <select
            value={marca}
            onChange={e => setMarca(e.target.value)}
            style={{
              marginTop: '0.4rem',
              padding: '0.6rem',
              border: '1px solid #d2d2d7',
              borderRadius: '12px',
              fontSize: '0.95rem',
              color: '#1d1d1f',
              background: '#f5f5f7'
            }}
          >
            {marcas.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </label>
      </div>

      {/* Nome */}
      <label style={{ display: 'flex', flexDirection: 'column', color: '#1d1d1f', fontWeight: '500' }}>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          style={{
            marginTop: '0.4rem',
            padding: '0.6rem',
            border: '1px solid #d2d2d7',
            borderRadius: '12px',
            background: '#f5f5f7',
            fontSize: '0.95rem'
          }}
        />
      </label>

      {/* Preço */}
      <label style={{ display: 'flex', flexDirection: 'column', color: '#1d1d1f', fontWeight: '500' }}>
        Preço:
        <input
          type="number"
          value={preco}
          onChange={e => setPreco(e.target.value)}
          required
          style={{
            marginTop: '0.4rem',
            padding: '0.6rem',
            border: '1px solid #d2d2d7',
            borderRadius: '12px',
            background: '#f5f5f7',
            fontSize: '0.95rem'
          }}
        />
      </label>

      {/* Condição */}
      <div style={{ display: 'flex', gap: '1rem', color: '#1d1d1f' }}>
        <label>
          <input
            type="radio"
            name="condicao"
            value="novo"
            checked={condicao === 'novo'}
            onChange={e => setCondicao(e.target.value)}
          />
          Novo
        </label>
        <label>
          <input
            type="radio"
            name="condicao"
            value="usado"
            checked={condicao === 'usado'}
            onChange={e => setCondicao(e.target.value)}
          />
          Usado
        </label>
      </div>

      {/* Botão */}
      <button
        type="submit"
        style={{
          padding: '0.9rem',
          backgroundColor: '#0071e3',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'background-color 0.2s ease, transform 0.1s ease'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#005bb5'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#0071e3'}
      >
        Inserir produto
      </button>
    </form>
  );
}
