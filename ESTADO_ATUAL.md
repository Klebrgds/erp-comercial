# 🤖 Documento de Contexto e Estado Atual do Projeto ERP

## 1. Visão Geral do Projeto
Estamos construindo um ERP Comercial completo, altamente responsivo (desktop, tablet e celular), baseado em um layout premium de referência (COMPREO Business Systems). 
O projeto tem suporte a **Light Mode** e **Dark Mode**.

## 2. Stack de Tecnologia Atual
- **Framework:** Next.js 16.4.5 (com Turbopack e App Router).
- **Linguagem:** TypeScript e React.
- **Estilização:** Tailwind CSS (v4).
- **Ícones:** Lucide React.
- **Gráficos:** Recharts.
- **Temas:** next-themes (customizado sem conflito de hidratação).
- **CSS:** O arquivo `globals.css` importa o tailwind e define a variante `@custom-variant dark`.

## 3. O que já foi construído (Concluído)
- [x] Estrutura inicial do Next.js.
- [x] Configuração do Tailwind CSS (arquivo `postcss.config.mjs`).
- [x] Criação do `ThemeProvider.tsx` e do botão de alternância de tema (`ThemeToggle.tsx`).
- [x] Menu Lateral (`Sidebar.tsx`) responsivo e com itens customizados (PDV, Pedidos em aberto, Consultar estoque, Consultas, Cadastros, Gestão financeira, Configurações gerais, Painel WEB, Utilitários).
- [x] Cabeçalho (`Header.tsx`) com busca, ícones e botão de tema.
- [x] Layout principal (`layout.tsx`) conectando tudo.
- [x] Componente de Cards de Indicadores (`KpiCard.tsx`).
- [x] Grid com 6 Cards na tela principal (`page.tsx`).
- [x] Componente de Gráficos (`DashboardCharts.tsx`) com Recharts: 
   - Gráfico de Linha (Tendência de Vendas).
   - Gráfico de Barras (Vendas por Região).
   - Gráfico de Rosca (Pedidos por Etapa).

## 4. Próximos Passos (A fazer na próxima sessão)
- [ ] Construir a terceira linha do Dashboard (Top 5 Clientes, Categorias e Metas).
- [ ] Criar as páginas reais dos módulos (PDV, Produtos, Estoque, etc.).
- [ ] Configurar o Banco de Dados (recomendado Supabase/PostgreSQL).
- [ ] Integrar autenticação e permissões.
- [ ] Substituir os dados Mock (de exemplo) pelos dados reais do banco.

## 5. Instruções para a IA (Prompt de Continuação)
"Você é um engenheiro de software sênior. Estamos desenvolvendo o ERP descrito acima. O ambiente já está configurado e funcionando. Por favor, siga a documentação de estilo (Tailwind, Next.js 16, TypeScript). Se precisar alterar arquivos de configuração do Tailwind, lembre-se que estamos na v4 e o arquivo `postcss.config.mjs` usa a sintaxe de `export default`. Não use `tailwind.config.js`. Vamos continuar a partir do item 4 (Próximos Passos)."