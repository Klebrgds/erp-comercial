"use client";

import { useState } from "react";
import { Search, Plus, Minus, Trash2, CreditCard, Banknote, QrCode, User, ShoppingCart, X } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

type CartItem = Product & { quantity: number };

const mockProducts: Product[] = [
  { id: "1", name: "Camisa Polo Preta", price: 89.90, image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=150&q=80", stock: 10 },
  { id: "2", name: "Calça Jeans Slim", price: 159.90, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&q=80", stock: 5 },
  { id: "3", name: "Tênis Casual Branco", price: 219.90, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=150&q=80", stock: 2 },
  { id: "4", name: "Boné Aba Curva", price: 49.90, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=150&q=80", stock: 20 },
];

export default function PDVPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Dispara a animação de "adicionado"
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 300); // Volta ao normal após 0.3 segundos
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0;
  const total = subtotal - discount;

  const filteredProducts = mockProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)] flex flex-col gap-4 max-w-[1700px] mx-auto w-full">
      
      {/* CABEÇALHO DO PDV */}
      <div className="flex justify-between items-center px-4 lg:px-0">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Frente de Caixa (PDV)</h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm">Operador: Klebson | Caixa: 01</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden relative">
        
        {/* COLUNA 1: BUSCA E PRODUTOS */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4 h-full px-4 lg:px-0 pb-20 lg:pb-0">
          <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex items-center gap-2">
            <Search className="text-gray-400 ml-2" size={20} />
            <input 
              type="text" 
              placeholder="Buscar produto..." 
              className="w-full bg-transparent outline-none p-2 text-gray-900 dark:text-white placeholder:text-gray-400 text-sm lg:text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* GRID DE PRODUTOS - Responsivo */}
          <div className="flex-1 overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 content-start">
            {filteredProducts.map((product) => (
              <button 
                key={product.id} 
                onClick={() => addToCart(product)}
                className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col items-start text-left hover:border-teal-500 dark:hover:border-teal-500 transition-colors group"
              >
                <img src={product.image} alt={product.name} className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2" />
                <div className="flex flex-col w-full h-full justify-between">
                  <span className="font-semibold text-xs lg:text-sm text-gray-900 dark:text-white leading-tight mb-1 line-clamp-2">{product.name}</span>
                  <div className="flex justify-between w-full items-center mt-auto">
                    <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">R$ {product.price.toFixed(2)}</span>
                    <Plus size={16} className="text-gray-400 group-hover:text-teal-500" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* COLUNA 2 e 3 (Carrinho e Pagamento) - GAVETA NO MOBILE */}
        <div className={`
          fixed inset-0 z-50 bg-black/50 lg:bg-transparent lg:static lg:z-auto lg:flex lg:flex-1 lg:flex-row gap-4 transition-transform duration-300
          ${isMobileCartOpen ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
        `}>
          
          <button 
            onClick={() => setIsMobileCartOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-full lg:hidden shadow-md text-gray-500 hover:text-red-500"
          >
            <X size={24} />
          </button>

          <div className="h-full lg:h-auto lg:flex-1 flex flex-col lg:flex-row gap-4 mt-16 lg:mt-0 w-full overflow-hidden">
            
            {/* CARRINHO */}
            <div className="flex-1 bg-white dark:bg-slate-900 rounded-t-2xl lg:rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden max-h-[50vh] lg:max-h-full">
              <div className="p-4 border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 flex justify-between items-center">
                <h2 className="font-semibold text-gray-900 dark:text-white">Carrinho</h2>
                <span className="text-sm font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 px-2 py-1 rounded-full">
                  {cart.length} itens
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 py-8">
                    <ShoppingCart size={48} className="mb-2 opacity-20" />
                    <p>O carrinho está vazio.</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-gray-50 dark:bg-slate-800/50 p-3 rounded-lg border border-gray-100 dark:border-slate-700/50">
                      <div className="flex items-center gap-3 flex-1">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded object-cover" />
                        <div className="flex-1">
                          <h3 className="font-medium text-xs sm:text-sm text-gray-900 dark:text-white line-clamp-1">{item.name}</h3>
                          <p className="text-xs text-gray-500">R$ {item.price.toFixed(2)} un.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 px-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-gray-500 hover:text-red-500"><Minus size={14} /></button>
                          <span className="text-sm font-medium w-4 text-center text-gray-900 dark:text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-gray-500 hover:text-teal-500"><Plus size={14} /></button>
                        </div>
                        
                        <div className="font-bold text-gray-900 dark:text-white text-sm w-16 text-right">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* RESUMO E PAGAMENTO */}
            <div className="w-full lg:w-80 bg-white/95 dark:bg-slate-900/95 lg:bg-white/70 lg:dark:bg-slate-900/70 backdrop-blur-xl border-t lg:border border-gray-200 lg:border-white/20 dark:border-slate-800 lg:dark:border-slate-700/50 rounded-t-2xl lg:rounded-xl shadow-lg flex flex-col overflow-hidden shrink-0">
              
              <div className="p-4 border-b border-gray-200/50 dark:border-slate-700/50 hidden lg:block">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-slate-800/50 p-2 rounded-lg cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-colors">
                    <User size={18} />
                    <span className="text-sm font-medium">Consumidor Final</span>
                    <Plus size={16} className="ml-auto text-gray-400" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col gap-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-red-500 cursor-pointer">
                  <span>Desconto</span>
                  <span>- R$ {discount.toFixed(2)}</span>
                </div>
                <div className="h-px w-full bg-gray-200 dark:bg-slate-700 my-1"></div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-900 dark:text-white font-medium">Total</span>
                  <span className="text-2xl lg:text-3xl font-bold text-teal-600 dark:text-teal-400">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="p-4 bg-gray-50/50 dark:bg-slate-800/50 border-t border-gray-200/50 dark:border-slate-700/50">
                <div className="grid grid-cols-3 gap-2 mb-3">
                    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
                      <Banknote size={20} className="text-green-600 mb-1" />
                      <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">Dinheiro</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
                      <QrCode size={20} className="text-blue-500 mb-1" />
                      <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">PIX</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-teal-500 transition-colors">
                      <CreditCard size={20} className="text-orange-500 mb-1" />
                      <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">Cartão</span>
                    </button>
                </div>
                
                <button 
                    disabled={cart.length === 0}
                    className="w-full py-3 lg:py-4 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 transition-all flex items-center justify-center gap-2 text-base lg:text-lg"
                >
                    Finalizar Venda
                </button>
              </div>
            </div>

          </div>
        </div>

                {/* BOTÃO FLUTUANTE MOBILE */}
        {!isMobileCartOpen && (
          <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
            <button 
              onClick={() => setIsMobileCartOpen(true)}
              className={`
                w-full py-4 text-white font-bold rounded-xl shadow-xl flex items-center justify-between px-6 transition-all duration-300
                ${isAdding 
                  ? 'bg-green-500 scale-105 shadow-green-500/50' // Fica verde e cresce levemente
                  : 'bg-teal-500 scale-100 shadow-teal-500/30'    // Fica normal (azul/teal)
                }
              `}
            >
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} />
                <span>Ver Carrinho ({cart.length})</span>
              </div>
              <span className="text-lg">R$ {total.toFixed(2)}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}