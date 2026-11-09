import { ShieldCheck, FileText, Target, FileClock, Clock, ShoppingCart } from 'lucide-react';
import KpiCard from '@/components/KpiCard';
import DashboardBottomPanels from '@/components/DashboardBottomPanels';
import DashboardCharts from '@/components/DashboardCharts'; // <-- Importação que faltava

export default function Home() {
  // Dados de exemplo (Mock) para visualizarmos o layout.
  // Na etapa do banco de dados, isso será substituído por dados reais.
  const kpiData = [
    { title: "Total de Vendas", value: "R$ 15.780", change: "14.6%", isPositive: true, icon: ShieldCheck },
    { title: "Valor Médio / Venda", value: "R$ 46,14", change: "6.2%", isPositive: true, icon: FileText },
    { title: "Total de Pedidos", value: "342", change: "11.3%", isPositive: true, icon: ShoppingCart },
    { title: "Taxa de Conversão", value: "68.4%", change: "4.6%", isPositive: true, icon: Target },
    { title: "Vendas em Andamento", value: "R$ 24.850", change: "9.8%", isPositive: true, icon: FileClock },
    { title: "Pedidos Atrasados", value: "23", change: "2", isPositive: false, icon: Clock },
  ];

  return (
    <div className="flex flex-col gap-6 max-w-[1600px] mx-auto">
      
      {/* Cabeçalho da Página e Filtro */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Dashboard de Desempenho de Vendas
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Acompanhe o desempenho comercial, faturamento, pedidos e metas em tempo real.
          </p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
          Este mês
        </button>
      </div>

      {/* Grade de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiData.map((kpi, index) => (
          <KpiCard 
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            isPositive={kpi.isPositive}
            icon={kpi.icon}
          />
        ))}
      </div>

      {/* Gráficos */}
      <DashboardCharts />

            {/* Gráficos */}
      <DashboardCharts />
      
      {/* NOVO: Painéis Inferiores */}
      <DashboardBottomPanels />
      
    </div>

  );
}