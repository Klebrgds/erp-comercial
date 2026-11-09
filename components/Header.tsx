import { Search, Bell, HelpCircle, Settings, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-96 border border-transparent focus-within:border-teal-500 transition-colors">
          <Search size={18} className="text-gray-500 dark:text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-900 dark:text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
          <HelpCircle size={20} />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition-colors">
          <Settings size={20} />
        </button>
        
        <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm font-bold ml-2 cursor-pointer">
          AD
        </div>
      </div>
    </header>
  );
}