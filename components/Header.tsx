"use client";

import { Search, Bell, HelpCircle, Settings, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header({ setIsMobileMenuOpen }: { isMobileMenuOpen?: boolean, setIsMobileMenuOpen: (val: boolean) => void }) {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-6 sticky top-0 z-30 transition-colors duration-300">
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        
        {/* Botão do Menu Hamburger (Abre a Sidebar no celular) */}
        <button 
          className="lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg px-3 py-2 w-96 border border-gray-100 dark:border-slate-700 focus-within:border-teal-500 transition-colors">
          <Search size={18} className="text-gray-400 dark:text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors hidden sm:block">
          <Bell size={20} />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors hidden sm:block">
          <HelpCircle size={20} />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors hidden sm:block">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs md:text-sm font-bold ml-1 md:ml-2 cursor-pointer">
          AD
        </div>
      </div>
    </header>
  );
}