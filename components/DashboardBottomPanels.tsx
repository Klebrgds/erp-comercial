"use client";

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, ComposedChart, Line, Legend
} from 'recharts';

// --- DADOS DE EXEMPLO ---
const topClientsData = [
  { name: 'Cliente A', value: 2.65 },
  { name: 'Cliente B', value: 1.98 },
  { name: 'Cliente C', value: 1.76 },
  { name: 'Cliente D', value: 1.35 },
  { name: 'Cliente E', value: 1.18 },
];

const categoryData = [
  { name: 'Produtos', value: 45, color: '#19A398' },
  { name: 'Serviços', value: 30, color: '#1671C5' },
  { name: 'Soluções', value: 15, color: '#EF8B32' },
  { name: 'Outros', value: 10, color: '#7452B8' },
];

const targetData = [
  { month: 'Jan', meta: 15, realizado: 12.2 },
  { month: 'Feb', meta: 16, realizado: 13.5 },
  { month: 'Mar', meta: 17.5, realizado: 14.8 },
  { month: 'Apr', meta: 17, realizado: 13.1 },
  { month: 'May', meta: 19, realizado: 15.6 },
  { month: 'Jun', meta: 21, realizado: 18.6 },
];

export default function DashboardBottomPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      
      {/* PAINEL 1: Top 5 Clientes (Barras Horizontais) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Top 5 Clientes por Vendas (R$ Cr)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topClientsData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" className="dark:opacity-20" />
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
              <Bar dataKey="value" fill="#19A398" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PAINEL 2: Vendas por Categoria (Rosca) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Vendas por Categoria (R$ Cr)</h3>
        <div className="h-64 w-full flex items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-gray-900 dark:text-white font-bold text-xl">R$ 15.78 Cr</span>
          </div>
        </div>
      </div>

      {/* PAINEL 3: Metas vs Resultados (Barras + Linha) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Metas vs Resultados (R$ Cr)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={targetData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:opacity-20" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
              <Bar dataKey="realizado" fill="#19A398" radius={[4, 4, 0, 0]} barSize={20} name="Realizado" />
              <Line type="monotone" dataKey="meta" stroke="#1671C5" strokeWidth={2} dot={{ r: 4, fill: '#1671C5', strokeWidth: 2, stroke: '#fff' }} name="Meta" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}