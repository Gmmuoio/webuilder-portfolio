import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "vivanda",
    name: "Vivanda",
    tagline: "Assistente de nutrição via WhatsApp com IA",
    description:
      "Analisa refeições por foto ou texto, calcula macros e acompanha sua evolução diretamente no WhatsApp.",
    longDescription:
      "Vivanda é um assistente de nutrição inteligente que funciona diretamente no WhatsApp. Com ele, você tira uma foto da sua refeição ou descreve o que comeu, e recebe na hora um breakdown completo de calorias, proteínas, carboidratos e gorduras. O sistema aprende seu perfil — peso, altura, objetivo — e calcula seu TDEE personalizado. Ao longo do dia, você recebe um resumo do que consumiu versus sua meta, e ao final da semana, um relatório de progresso. Tudo sem sair do WhatsApp.",
    problem:
      "Rastrear o que você come é chato e interrompido — abrir apps, buscar alimentos, medir gramas. A maioria desiste em dias. Vivanda elimina esse atrito: basta mandar mensagem como você já faz naturalmente.",
    audience:
      "Pessoas que querem perder peso, ganhar massa ou simplesmente ter mais consciência alimentar, mas que abandonam apps tradicionais de contagem calórica por falta de praticidade.",
    features: [
      "Análise de refeição por foto via GPT-4o Vision",
      "Cálculo automático de macros (calorias, proteína, carbs, gordura)",
      "Perfil nutricional personalizado com TDEE e metas",
      "Resumo diário com déficit/superávit calórico",
      "Relatório semanal de evolução",
      "Controle de atividade física e gasto calórico",
      "Planos: free (7 dias) + mensalidades a partir de R$29,90",
    ],
    status: "building",
    stack: ["TypeScript", "GPT-4o", "Evolution API", "Supabase", "Stripe", "Next.js"],
    url: "https://vivanda-gaia.vercel.app",
    screenshot: "/screenshots/vivanda.png",
  },
  {
    id: "conselho-conectapp",
    name: "Conectapp",
    tagline: "Gestão digital para conselhos de classe e fiscalização",
    description:
      "Digitaliza processos de fiscalização, registros profissionais e comunicação de conselhos de classe.",
    longDescription:
      "Conectapp é uma solução SaaS para conselhos regionais de classe que precisam modernizar sua operação. A plataforma digitaliza o ciclo completo: registro de profissionais, emissão de carteiras digitais, agendamento de fiscalizações, gestão de denúncias e processos éticos. A comunicação com os profissionais é centralizada em um único canal, e os gestores têm visibilidade total do status de cada processo.",
    problem:
      "Conselhos de classe operam com processos 100% manuais ou sistemas legados dos anos 90 — papel, carimbo, fax. Isso cria filas, perda de documentos e impossibilidade de escalar a fiscalização.",
    audience:
      "Conselhos regionais de classe (CREA, CRO, CFN, etc.) e suas regionais que buscam digitalizar processos e oferecer melhor experiência aos profissionais registrados.",
    features: [
      "Registro digital de profissionais com verificação de documentos",
      "Emissão de carteiras profissionais digitais com QR Code",
      "Agendamento e roteirização de fiscalizações",
      "Gestão de denúncias e processos éticos",
      "Portal do profissional com auto-atendimento",
      "Notificações automáticas por WhatsApp e e-mail",
      "Painéis gerenciais e relatórios de conformidade",
    ],
    status: "live",
    stack: ["Next.js", "NestJS", "PostgreSQL", "WhatsApp API", "Supabase"],
    url: "https://conselho-conectapp.vercel.app",
    screenshot: "/screenshots/conectapp.png",
  },
  {
    id: "agent-kanban",
    name: "Agent Kanban",
    tagline: "Kanban com agentes de IA trabalhando nos seus tickets",
    description:
      "Board kanban onde agentes de IA executam tarefas, escrevem código e avançam cards autonomamente.",
    longDescription:
      "Agent Kanban reimagina o gerenciamento de projetos integrando agentes de IA diretamente ao fluxo de trabalho. Ao criar um card, você pode atribuí-lo a um agente — que analisa o contexto, divide em subtarefas, executa o trabalho (escrita de código, pesquisa, rascunhos) e move o card pelo board. O humano entra apenas para revisar e aprovar. É o próximo passo de ferramentas como Linear e Jira, construído para times que usam IA no dia a dia.",
    problem:
      "Times que usam IA no desenvolvimento ainda gerenciam tarefas manualmente em boards separados. Não há integração nativa entre 'o que precisa ser feito' e 'os agentes que podem fazer'. O resultado é coordenação manual e retrabalho.",
    audience:
      "Times de desenvolvimento, fundadores solo e freelancers que já usam ferramentas de IA para codar e querem integrar esses agentes diretamente no seu sistema de gestão de tarefas.",
    features: [
      "Board kanban com drag-and-drop responsivo",
      "Atribuição de cards a agentes de IA especializados",
      "Execução autônoma de tarefas com output auditável",
      "Integração com GitHub para abertura de PRs automáticos",
      "Histórico de ações do agente por card",
      "Revisão e aprovação humana antes de avançar estágio",
      "Workspace colaborativo para times pequenos",
    ],
    status: "beta",
    stack: ["Next.js", "Claude API", "OpenAI", "Supabase", "GitHub API"],
    url: "https://agent-kanban-chi.vercel.app",
    screenshot: "/screenshots/agent-kanban.png",
  },
  {
    id: "bolso-a-dois",
    name: "Bolso a Dois",
    tagline: "Organize as finanças do casal pelo WhatsApp com IA",
    description:
      "Registre gastos conversando, veja dashboards automáticos e mantenha harmonia nas contas — e em casa.",
    longDescription:
      "Bolso a Dois é um assistente financeiro para casais que funciona diretamente no WhatsApp. Sem planilhas, sem esforço: basta mandar uma mensagem descrevendo o gasto e a IA transforma em dashboard em tempo real. Os dois parceiros têm visibilidade total das finanças compartilhadas, categorização automática de despesas, alertas de metas e relatórios mensais. O objetivo é eliminar a tensão financeira nos relacionamentos com uma ferramenta que cabe na rotina.",
    problem:
      "Casais têm dificuldade de manter controle financeiro conjunto — apps são complicados, planilhas exigem disciplina e a conversa sobre dinheiro vira fonte de conflito. O atrito de registrar cada gasto faz a maioria desistir em semanas.",
    audience:
      "Casais que dividem despesas e querem ter transparência financeira sem abrir mão da praticidade. Especialmente aqueles que já usam WhatsApp para se comunicar no dia a dia.",
    features: [
      "Registro de gastos por mensagem de texto no WhatsApp",
      "Categorização automática via IA",
      "Dashboard compartilhado em tempo real",
      "Divisão de despesas entre o casal",
      "Alertas de metas e orçamentos",
      "Relatório financeiro mensal",
      "Histórico completo pesquisável",
    ],
    status: "live",
    stack: ["Next.js", "OpenAI", "Evolution API", "Supabase", "Stripe"],
    url: "https://landing-page-bolso-a-dois.vercel.app",
    screenshot: "/screenshots/seu-assistente.png",
  },
  {
    id: "em-breve",
    name: "Em breve",
    tagline: "Novo microsaas em desenvolvimento",
    description: "Mais um produto sendo construído. Fique de olho.",
    longDescription: "Em construção. Detalhes em breve.",
    problem: "",
    audience: "",
    features: [],
    status: "placeholder",
    stack: [],
  },
];
