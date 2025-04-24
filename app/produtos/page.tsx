'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Product } from '../../types/product';

// Dados de exemplo para produtos
const products: Product[] = [
  {
    id: 1,
    name: 'Colorgin Arte Urbana 400ml - Preto',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-preto.jpg',
    color: 'Preto',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 50,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Colorgin Arte Urbana 400ml - Amarelo',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-amarelo.jpg',
    color: 'Amarelo',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 45,
    rating: 4.7
  },
  {
    id: 3,
    name: 'Colorgin Arte Urbana 400ml - Azul',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-azul.jpg',
    color: 'Azul',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 40,
    rating: 4.6
  },
  {
    id: 4,
    name: 'Colorgin Arte Urbana 400ml - Vermelho',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-vermelho.jpg',
    color: 'Vermelho',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 35,
    rating: 4.5
  },
  {
    id: 5,
    name: 'Colorgin Arte Urbana 400ml - Verde',
    description: 'Tinta spray para graffiti e arte urbana com secagem rápida e ótima cobertura.',
    price: 29.90,
    image: '/images/products/colorgin-verde.jpg',
    color: 'Verde',
    brand: 'Colorgin',
    category: 'Tintas Spray',
    stock: 30,
    rating: 4.4
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Produtos</h1>
          
          {/* Filtros */}
          <div className="bg-white p-4 rounded-lg shadow-card mb-6">
            <h2 className="font-semibold mb-3">Filtros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Marca</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Todas as marcas</option>
                  <option value="Colorgin">Colorgin</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Categoria</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Todas as categorias</option>
                  <option value="Tintas Spray">Tintas Spray</option>
                  <option value="Marcadores">Marcadores</option>
                  <option value="Caps">Caps</option>
                  <option value="Acessórios">Acessórios</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Cor</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Todas as cores</option>
                  <option value="Preto">Preto</option>
                  <option value="Amarelo">Amarelo</option>
                  <option value="Azul">Azul</option>
                  <option value="Vermelho">Vermelho</option>
                  <option value="Verde">Verde</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Lista de produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className={`product-card p-4 ${product.brand === 'Colorgin' ? 'colorgin-product' : ''}`}>
                {product.brand === 'Colorgin' && <span className="colorgin-badge mb-2">Colorgin</span>}
                <img 
                  src={product.image || '/images/product-placeholder.jpg'} 
                  alt={product.name} 
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">R$ {product.price.toFixed(2)}</span>
                  <button className="btn-primary">Adicionar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
