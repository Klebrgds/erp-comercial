"use client";

import { 
  Store, ClipboardList, PackageSearch, Search, 
  Users, Banknote, Settings, LayoutDashboard, Wrench, ChevronRight, X 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Recebe as propriedades de controle do Layout
export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  const menuItems = [
    { icon: Store, label: 'PDV', href: '/pdv' },
    { icon: ClipboardList, label: 'Pedidos em aberto', href: '#' },
    { icon: PackageSearch, label: 'Consultar estoque', href: '#' },
    { icon: Search, label: 'Consultas', href: '#' },
    { icon: Users, label: 'Cadastros', href: '#', hasSub: true },
    { icon: Banknote, label: 'Gestão financeira', href: '#', hasSub: true },
    { icon: Settings, label: 'Configurações gerais', href: '#', hasSub: true },
    { icon: LayoutDashboard, label: 'Painel WEB', href: '/' },
    { icon: Wrench, label: 'Utilitários', href: '#' },
  ];

  return (
    <aside className={`
      fixed left-0 top-0 h-screen w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 
      flex flex-col overflow-y-auto z-50 transition-transform duration-300
      lg:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
          COMPREO <span className="text-xs font-normal text-teal-500 block -mt-1">BUSINESS SYSTEMS</span>
        </h1>
        {/* Botão de fechar (X) que só aparece no celular */}
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 py-4 flex flex-col gap-1 px-3">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link 
              key={index} 
              href={item.href}
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link no celular
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                isActive 
                  ? 'bg-teal-500 text-white' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={isActive ? 'text-white' : ''} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.hasSub && (
                <ChevronRight size={16} className={isActive ? 'text-white/70' : 'text-gray-400'} />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}