"use client";

import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie, Legend 
} from 'recharts';

// --- DADOS DE EXEMPLO (MOCK) ---
const salesTrendData = [
  { name: 'Jan', value: 12 }, { name: 'Feb', value: 15 }, { name: 'Mar', value: 13 },
  { name: 'Apr', value: 18 }, { name: 'May', value: 16 }, { name: 'Jun', value: 21 },
];

const salesByRegionData = [
  { name: 'Norte', value: 4.6 }, { name: 'Sul', value: 3.8 }, { name: 'Leste', value: 2.9 },
  { name: 'Oeste', value: 2.3 }, { name: 'Central', value: 2.1 },
];

const pipelineData = [
  { name: 'Qualificação', value: 30, color: '#19A398' },
  { name: 'Proposta', value: 25, color: '#1671C5' },
  { name: 'Negociação', value: 20, color: '#EF8B32' },
  { name: 'Fechado', value: 15, color: '#7452B8' },
  { name: 'Perdido', value: 10, color: '#E34C4C' },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      
      {/* GRÁFICO 1: Tendência de Vendas (Linha) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Tendência de Vendas (R$ Cr)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesTrendData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:opacity-20" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <RechartsTooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#19A398' }}
              />
              <Line type="monotone" dataKey="value" stroke="#19A398" strokeWidth={3} dot={{ r: 4, fill: '#19A398', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* GRÁFICO 2: Vendas por Região (Barras) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Vendas por Região (R$ Cr)</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesByRegionData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:opacity-20" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#687582' }} />
              <RechartsTooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
              <Bar dataKey="value" fill="#19A398" radius={[4, 4, 0, 0]} barSize={40}>
                {salesByRegionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#19A398' : '#19A398'} opacity={index === 0 ? 1 : 0.7} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* GRÁFICO 3: Pedidos por Etapa (Rosca) */}
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Pedidos por Etapa (R$ Cr)</h3>
        <div className="h-64 w-full flex items-center justify-center relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pipelineData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {pipelineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
            </PieChart>
          </ResponsiveContainer>
          {/* Texto no centro da rosca */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-gray-900 dark:text-white font-bold text-xl">R$ 24.85 Cr</span>
          </div>
        </div>
      </div>

    </div>
  );
}