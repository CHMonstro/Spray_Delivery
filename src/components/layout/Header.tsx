'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="logo">Spray Delivery</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="nav-link">Início</Link></li>
            <li><Link href="/produtos" className="nav-link">Produtos</Link></li>
            <li><Link href="/carrinho" className="nav-link">Carrinho</Link></li>
            <li><Link href="/perfil" className="nav-link">Perfil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
