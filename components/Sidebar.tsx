import { 
  Store, ClipboardList, PackageSearch, Search, 
  Users, Banknote, Settings, LayoutDashboard, Wrench, ChevronRight 
} from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Store, label: 'PDV', active: false },
    { icon: ClipboardList, label: 'Pedidos em aberto', active: false },
    { icon: PackageSearch, label: 'Consultar estoque', active: false },
    { icon: Search, label: 'Consultas', active: false },
    { icon: Users, label: 'Cadastros', active: false, hasSub: true },
    { icon: Banknote, label: 'Gestão financeira', active: false, hasSub: true },
    { icon: Settings, label: 'Configurações gerais', active: false, hasSub: true },
    { icon: LayoutDashboard, label: 'Painel WEB', active: true },
    { icon: Wrench, label: 'Utilitários', active: false },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-10 transition-colors duration-300">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
          COMPREO <span className="text-xs font-normal text-teal-500 block -mt-1">BUSINESS SYSTEMS</span>
        </h1>
      </div>

      <nav className="flex-1 py-4 flex flex-col gap-1 px-3">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
              item.active 
                ? 'bg-teal-500 text-white' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className={item.active ? 'text-white' : ''} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.hasSub && (
              <ChevronRight size={16} className={item.active ? 'text-white/70' : 'text-gray-400'} />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}