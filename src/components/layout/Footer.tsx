'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="logo text-2xl mb-4">Spray Delivery</div>
            <p className="text-gray-400">
              Entrega de tintas spray para todo o Brasil
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-secondary font-bold mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li><a href="/" className="nav-link">Início</a></li>
                <li><a href="/produtos" className="nav-link">Produtos</a></li>
                <li><a href="/sobre" className="nav-link">Sobre Nós</a></li>
                <li><a href="/contato" className="nav-link">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-secondary font-bold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><a href="/produtos?category=Tintas%20Spray" className="nav-link">Tintas Spray</a></li>
                <li><a href="/produtos?brand=Colorgin" className="nav-link">Colorgin Arte Urbana</a></li>
                <li><a href="/produtos?category=Acessórios" className="nav-link">Acessórios</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-secondary font-bold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">contato@spraydelivery.com.br</li>
                <li className="text-gray-400">(11) 99999-9999</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spray Delivery. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
