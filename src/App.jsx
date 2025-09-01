import React, { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Categoria from './components/Categoria';
import Produto from './components/Produto';
import Dell from './assets/dell.png';
import HP from './assets/hp.png';
import Kingston from './assets/kingston.png';
import Razer from './assets/razer.png';
import Logitech from './assets/logitech.png';

const imagensMarcas = {
  Dell,
  HP,
  Kingston,
  Razer,
  Logitech
};

const initialAreas = [
  { nome: 'Computadores', corPrimaria: '#0b6cf5', corSecundaria: '#eaf2ff' }, // Azul
  { nome: 'Periféricos', corPrimaria: '#8e44ad', corSecundaria: '#f3eaf8' }, // Roxo
  { nome: 'Armazenamento', corPrimaria: '#27ae60', corSecundaria: '#e9f9ee' }, // Verde
  { nome: 'Acessórios', corPrimaria: '#7f8c8d', corSecundaria: '#f0f0f0' }, // Cinza
  { nome: 'Games', corPrimaria: '#ff6b00', corSecundaria: '#fff4e6' } // Laranja
];

const marcas = ['Dell', 'HP', 'Logitech', 'Razer', 'Kingston'];

/*
const seedProdutos = [
  { id: 1, secao: 'Computadores', marca: 'Dell', nome: 'Notebook Dell XPS 13', preco: 7499.90, condicao: 'usado', foto: imagensMarcas['Dell'] },
  { id: 2, secao: 'Periféricos', marca: 'HP', nome: 'Impressora HP Multifuncional Deskjet Ink Advantage 2874', preco: 399.90, condicao: 'novo', foto: imagensMarcas['HP'] },
  { id: 3, secao: 'Armazenamento', marca: 'Kingston', nome: 'HD SSD Kingston SA400S37 480GB', preco: 259.90, condicao: 'novo', foto: imagensMarcas['Kingston'] },
  { id: 4, secao: 'Periféricos', marca: 'Logitech', nome: 'Mouse Logitech M720', preco: 253.90, condicao: 'usado', foto: imagensMarcas['Logitech'] }
];
*/

export default function App() {
  const [areas] = useState(initialAreas);
  const [produtos, setProdutos] = useState([]);
  // const [produtos, setProdutos] = useState(seedProdutos);

  function aoNovoProduto(produto) {
    const produtoComId = { 
      ...produto, 
      id: Date.now(),
      foto: imagensMarcas[produto.marca]
    };
    setProdutos(prev => [...prev, produtoComId]);
  }

  return (
    <div>
      <Banner />
      <main style={{ padding: '1rem', maxWidth: 1100, margin: '0 auto' }}>
        <Formulario 
          secoes={areas.map(a => a.nome)}
          marcas={marcas}
          aoProdutoCadastrado={aoNovoProduto}
        />

        {areas.map(area => {
          const produtosDaArea = produtos.filter(p => p.secao === area.nome);
          if (produtosDaArea.length === 0) return null;
          return (
            <Categoria
              key={area.nome}
              nome={area.nome}
              corPrimaria={area.corPrimaria}
              corSecundaria={area.corSecundaria}
              produtos={produtosDaArea}
            />
          );
        })}
      </main>
    </div>
  );
}
