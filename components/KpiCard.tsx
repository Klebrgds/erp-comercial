import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export default function KpiCard({ title, value, change, isPositive, icon: Icon }: KpiCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 flex flex-col justify-between shadow-sm transition-colors duration-300">
      
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
          <Icon size={20} />
        </div>
      </div>
      
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
        
        <div className="flex items-center gap-1 text-sm">
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '▲' : '▼'} {change}
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-xs">vs mês anterior</span>
        </div>
      </div>

    </div>
  );
}