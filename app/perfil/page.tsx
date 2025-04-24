'use client';

import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('pedidos');
  
  // Dados de exemplo para pedidos
  const orders = [
    {
      id: 1001,
      date: '15/04/2025',
      status: 'Entregue',
      total: 89.70,
      items: [
        { name: 'Colorgin Arte Urbana 400ml - Preto', quantity: 2 },
        { name: 'Colorgin Arte Urbana 400ml - Amarelo', quantity: 1 }
      ]
    },
    {
      id: 1002,
      date: '02/04/2025',
      status: 'Entregue',
      total: 59.80,
      items: [
        { name: 'Colorgin Arte Urbana 400ml - Azul', quantity: 2 }
      ]
    }
  ];
  
  // Dados de exemplo para endereços
  const addresses = [
    {
      id: 1,
      name: 'Casa',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apto 101',
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567',
      isDefault: true
    },
    {
      id: 2,
      name: 'Trabalho',
      street: 'Avenida Paulista',
      number: '1000',
      complement: 'Sala 45',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100',
      isDefault: false
    }
  ];
  
  // Dados de exemplo para métodos de pagamento
  const paymentMethods = [
    {
      id: 1,
      type: 'credit_card',
      name: 'Cartão de Crédito',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'JOÃO SILVA',
      expiryDate: '12/26',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'pix',
      name: 'PIX',
      isDefault: false
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className="p-4 bg-primary text-white">
                  <h2 className="font-bold text-lg">João Silva</h2>
                  <p className="text-sm">joao.silva@email.com</p>
                </div>
                
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setActiveTab('pedidos')}
                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'pedidos' ? 'bg-secondary text-primary font-bold' : 'hover:bg-gray-100'}`}
                      >
                        Meus Pedidos
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('enderecos')}
                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'enderecos' ? 'bg-secondary text-primary font-bold' : 'hover:bg-gray-100'}`}
                      >
                        Endereços
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('pagamentos')}
                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'pagamentos' ? 'bg-secondary text-primary font-bold' : 'hover:bg-gray-100'}`}
                      >
                        Métodos de Pagamento
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('dados')}
                        className={`w-full text-left px-3 py-2 rounded ${activeTab === 'dados' ? 'bg-secondary text-primary font-bold' : 'hover:bg-gray-100'}`}
                      >
                        Dados Pessoais
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-card p-6">
                {/* Pedidos Tab */}
                {activeTab === 'pedidos' && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Meus Pedidos</h2>
                    
                    {orders.length === 0 ? (
                      <p>Você ainda não realizou nenhum pedido.</p>
                    ) : (
                      <div className="space-y-4">
                        {orders.map(order => (
                          <div key={order.id} className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-100 p-4 flex justify-between items-center">
                              <div>
                                <span className="font-semibold">Pedido #{order.id}</span>
                                <span className="text-gray-600 ml-4">{order.date}</span>
                              </div>
                              <div>
                                <span className={`px-3 py-1 rounded-full text-sm ${order.status === 'Entregue' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {order.status}
                                </span>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="mb-4">
                                {order.items.map((item, index) => (
                                  <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
                                    <div>
                                      <span className="font-semibold">{item.quantity}x</span> {item.name}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>R$ {order.total.toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Endereços Tab */}
                {activeTab === 'enderecos' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Meus Endereços</h2>
                      <button className="btn-primary px-4 py-2 text-sm">Adicionar Endereço</button>
                    </div>
                    
                    {addresses.length === 0 ? (
                      <p>Você ainda não cadastrou nenhum endereço.</p>
                    ) : (
                      <div className="space-y-4">
                        {addresses.map(address => (
                          <div key={address.id} className="border rounded-lg p-4">
                            <div className="flex justify-between">
                              <h3 className="font-semibold">{address.name}</h3>
                              {address.isDefault && (
                                <span className="bg-secondary text-primary text-xs px-2 py-1 rounded">Padrão</span>
                              )}
                            </div>
                            <p className="text-gray-700 mt-2">
                              {address.street}, {address.number}
                              {address.complement && `, ${address.complement}`}
                              <br />
                              {address.neighborhood}, {address.city} - {address.state}
                              <br />
                              CEP: {address.zipCode}
                            </p>
                            <div className="flex mt-3 space-x-3">
                              <button className="text-primary text-sm">Editar</button>
                              <button className="text-red-500 text-sm">Excluir</button>
                              {!address.isDefault && (
                                <button className="text-primary text-sm">Definir como padrão</button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Métodos de Pagamento Tab */}
                {activeTab === 'pagamentos' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold">Métodos de Pagamento</h2>
                      <button className="btn-primary px-4 py-2 text-sm">Adicionar Método</button>
                    </div>
                    
                    {paymentMethods.length === 0 ? (
                      <p>Você ainda não cadastrou nenhum método de pagamento.</p>
                    ) : (
                      <div className="space-y-4">
                        {paymentMethods.map(method => (
                          <div key={method.id} className="border rounded-lg p-4">
                            <div className="flex justify-between">
                              <h3 className="font-semibold">{method.name}</h3>
                              {method.isDefault && (
                                <span className="bg-secondary text-primary text-xs px-2 py-1 rounded">Padrão</span>
                              )}
                            </div>
                            {method.type === 'credit_card' && (
                              <p className="text-gray-700 mt-2">
                                {method.cardNumber}<br />
                                {method.cardHolder} | Validade: {method.expiryDate}
                              </p>
                            )}
                            <div className="flex mt-3 space-x-3">
                              <button className="text-primary text-sm">Editar</button>
                              <button className="text-red-500 text-sm">Excluir</button>
                              {!method.isDefault && (
                                <button className="text-primary text-sm">Definir como padrão</button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Dados Pessoais Tab */}
                {activeTab === 'dados' && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Dados Pessoais</h2>
                    
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Nome Completo</label>
                          <input type="text" className="w-full p-2 border rounded" defaultValue="João Silva" />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">E-mail</label>
                          <input type="email" className="w-full p-2 border rounded" defaultValue="joao.silva@email.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">CPF</label>
                          <input type="text" className="w-full p-2 border rounded" defaultValue="123.456.789-00" />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Telefone</label>
                          <input type="text" className="w-full p-2 border rounded" defaultValue="(11) 98765-4321" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Data de Nascimento</label>
                          <input type="date" className="w-full p-2 border rounded" defaultValue="1990-01-01" />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Gênero</label>
                          <select className="w-full p-2 border rounded">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                            <option value="nao_informar">Prefiro não informar</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button type="submit" className="btn-primary px-6 py-2">
                          Salvar Alterações
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
