/* =========================================================
   Gustavo Silva — Portfólio 2026 · script
   Para adicionar/editar projetos, mexa apenas no array PROJECTS.
   ========================================================= */

const GH = "https://github.com/gustavinzx/";
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

/* ---------- Tecnologias (do README do GitHub) ---------- */
const SKILLS = [
  ["JavaScript", "javascript/javascript-original.svg"],
  ["TypeScript", "typescript/typescript-original.svg"],
  ["React", "react/react-original.svg"],
  ["Next.js", "nextjs/nextjs-original.svg", true],
  ["Tailwind", "tailwindcss/tailwindcss-original.svg"],
  ["Node.js", "nodejs/nodejs-original.svg"],
  ["PostgreSQL", "postgresql/postgresql-original.svg"],
  ["MySQL", "mysql/mysql-original.svg"],
  ["Supabase", "supabase/supabase-original.svg"],
  ["Java", "java/java-original.svg"],
  ["Spring Boot", "spring/spring-original.svg"],
  ["Python", "python/python-original.svg"],
  ["HTML5", "html5/html5-original.svg"],
  ["CSS3", "css3/css3-original.svg"],
  ["Git", "git/git-original.svg"],
  ["Docker", "docker/docker-original.svg"],
];

const LANGS = [
  ["TypeScript", 90],
  ["JavaScript", 92],
  ["Python", 75],
  ["SQL", 78],
  ["Java", 68],
  ["C", 55],
];

/* ---------- Projetos (repos reais do GitHub) ----------
   size: "big" | "wide" | "tall" | "" (normal)
   cat: fullstack | web | mobile | backend | academico          */
const PROJECTS = [
  {
    title: "EHR Solutions",
    repo: "EHRSolution---WEB",
    word: "EHR\nSolutions",
    glyph: "🚚",
    size: "big",
    imgPos: "50% 50%",
    cat: ["fullstack", "web", "backend", "mobile", "academico"],
    catLabel: "Full-Stack · Co-Líder de Squad (Porto Digital GrowUp) · Empresa",
    featured: "⭐ Destaque",
    colors: ["#0b3d91", "#04122b"],
    desc: "Co-liderança do squad no Porto Digital (Programa GrowUp) para a EHR Solutions: plataforma inteligente de gestão de frotas, telemetria IoT e segurança de abastecimento em sprints de 2 semanas (React 18 + Node.js/Express + PostgreSQL + JWT + Docker + Mobile Expo).",
    highlights: ["Co-líder de squad na Residência Porto Digital (GrowUp) em sprints de 2 semanas", "554/554 testes automatizados passando + CI/CD", "Backend Node.js/Express + PostgreSQL + JWT + Docker (SHA-256 / LGPD)", "Frontend React 18/Leaflet + Mobile React Native/Expo"],
    stack: ["React 18", "Vite", "Leaflet", "Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
  },
  {
    title: "VTourney",
    repo: "VTOURNEY",
    word: "VTourney",
    glyph: "🏆",
    size: "wide",
    cat: ["fullstack", "web", "backend", "pessoal"],
    catLabel: "Full-Stack · Front-End & Back-End · Pessoal",
    colors: ["#ff4655", "#3a0710"],
    desc: "Plataforma completa para gerenciamento de torneios amadores de Valorant, dividida em Frontend (Next.js/React) e Backend (Node.js/Express + MySQL), com autenticação, mercado LFT e chaves automáticas.",
    highlights: ["Frontend em Next.js + React + TypeScript", "Backend em Node.js + Express + MySQL (schema próprio)", "Mercado de transferências (LFT), chaves automáticas e Discord"],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Adega Express",
    repo: "AdegaExpress",
    word: "Adega\nExpress",
    glyph: "🍷",
    size: "wide",
    live: "https://adega-express-six.vercel.app",
    cat: ["fullstack", "web", "backend", "pessoal"],
    catLabel: "Full-Stack · Front-End & Back-End · Pessoal",
    colors: ["#d97706", "#1a0b02"],
    desc: "E-commerce e sistema de gestão ponta a ponta para adegas e conveniências em monorepo: Frontend em Next.js 15 + Tailwind CSS v4 e Backend RESTful em Node.js + TypeScript + Express + Prisma ORM (MySQL).",
    highlights: ["Online em adega-express-six.vercel.app", "Frontend Web em Next.js 15 + Tailwind CSS v4", "Backend API REST em Node.js, Express, Prisma ORM e MySQL", "Checkout com PIX/Cartão, trava de maioridade e Painel Admin"],
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "Node.js", "Express", "Prisma", "MySQL"],
  },
  {
    title: "Feira.Casa Marketplace",
    repo: "mktplacefeira-casa-gustavin",
    word: "Feira\n.Casa",
    glyph: "🥬",
    size: "wide",
    cat: ["fullstack", "web", "backend", "academico"],
    catLabel: "Full-Stack · Backend Lead (Squad de 9 pessoas) · Empresa",
    colors: ["#1f7a3a", "#06200f"],
    desc: "Atuação como Backend Lead em equipe de 9 pessoas no marketplace da FeiraCasa LTDA: responsável por todo o back-end com Next.js, TypeScript e Supabase (PostgreSQL + RLS), pagamentos via Stripe e PIX, geolocalização GPS com API Nominatim e workflows de automação no n8n.",
    highlights: ["Backend Lead em squad de 9 pessoas na Residência Porto Digital", "Back-end completo em Supabase (PostgreSQL + RLS) e SSR Auth", "Pagamentos via Stripe e PIX + Geolocalização GPS (API Nominatim)", "Workflows de automação no n8n com webhooks e pedidos"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "PIX", "n8n"],
  },
  {
    title: "Pesk",
    repo: "App--Pesk",
    word: "Pesk",
    glyph: "🎣",
    size: "",
    imgFit: "contain",
    imgBg: "#eafde0",
    cat: ["fullstack", "mobile", "backend", "academico"],
    catLabel: "Full-Stack · Mobile & Back-End · Acadêmico",
    colors: ["#2563eb", "#03222b"],
    desc: "Aplicativo mobile (Expo / React Native) e API HTTP em Fastify organizada em arquitetura em camadas (Presentation → Business → Domain/Ports), integrada ao Firebase Authentication e Cloud Firestore.",
    highlights: ["Cliente Mobile em React Native + Expo", "Backend HTTP em Fastify + Firebase Admin SDK", "Arquitetura limpa em camadas (Ports & Adapters)"],
    stack: ["React Native", "Expo", "TypeScript", "Fastify", "Firebase Auth", "Firestore"],
  },
  {
    title: "TODO-List Pro",
    repo: "TodoList-Resi",
    word: "TODO\nList Pro",
    glyph: "📋",
    size: "wide",
    cat: ["fullstack", "web", "backend", "academico"],
    catLabel: "Full-Stack · Front-End & Back-End · Residência",
    colors: ["#3b82f6", "#0b1220"],
    desc: "Sistema completo de gerenciamento de tarefas da Residência Tecnológica III, dividido em Frontend (Next.js + React + Tailwind) e Backend (Node.js + Express + MySQL), com Kanban, relatórios PDF e alertas por e-mail.",
    highlights: ["Frontend em Next.js, React e Tailwind CSS (Glassmorphism)", "Backend em Node.js + Express + MySQL com JWT e Bcrypt", "Rotinas node-cron de e-mail, exportação PDF e painel /admin"],
    stack: ["Next.js", "React", "Tailwind", "Node.js", "Express", "MySQL", "JWT"],
  },
  {
    title: "Locadora de Veículos",
    repo: "ProjetoLocadoraVeiculos",
    word: "Loca\ndora",
    glyph: "🚗",
    size: "wide",
    cat: ["backend", "academico"],
    catLabel: "Back-End · API REST & Testes · Acadêmico",
    colors: ["#b45309", "#2b1503"],
    desc: "Aplicação Java 17 para gerenciamento de locadoras de veículos, integrando banco de dados SQLite, API REST, interface CLI e pipeline de 59 testes automatizados no GitLab CI/CD.",
    highlights: ["API REST + CLI em Java 17 com Maven e SQLite", "59 testes automatizados (JUnit 5, E2E, Postman & Newman)", "Pipeline completa de CI/CD no GitLab"],
    stack: ["Java 17", "Maven", "SQLite", "API REST", "JUnit 5", "Postman", "GitLab CI"],
  },
  {
    title: "Zé Bombom",
    repo: "ze-bombom-estoque",
    word: "Zé\nBombom",
    glyph: "🍬",
    size: "tall",
    imgFit: "contain",
    imgBg: "#f9f3e6",
    cat: ["pessoal"],
    catLabel: "Desktop · Python & Tkinter · Pessoal",
    colors: ["#d97706", "#2c1805"],
    desc: "Sistema desktop de estoque em Python + Tkinter que calcula automaticamente a distribuição ideal de bombons em caixas (30, 10 e 2 un.) para minimizar desperdício, com mascote animado.",
    highlights: ["Algoritmo guloso de otimização de embalagens", "Interface gráfica desktop em Tkinter + versão CLI", "Mascote Zé Bombom animado e resumo de eficiência"],
    stack: ["Python", "Tkinter"],
  },
  {
    title: "UP Telecom",
    repo: "uptelecom",
    word: "UP\nTelecom",
    glyph: "📡",
    size: "wide",
    live: "https://uptelecom.netlify.app/",
    cat: ["web", "pessoal"],
    catLabel: "Front-End · React & TypeScript · Pessoal",
    colors: ["#2563eb", "#061633"],
    desc: "Aplicação web institucional para provedor de internet fibra óptica ('Provedor de Internet Ultra Rápido'), construída com React, TypeScript, Vite e Tailwind CSS.",
    highlights: ["Online em uptelecom.netlify.app", "SPA em React + TypeScript + Vite + Tailwind CSS", "Apresentação de planos, cobertura, avaliações e Central do Assinante"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Tríade Futsal",
    repo: "triade-futsal",
    word: "Tríade\nFutsal",
    glyph: "⚽",
    size: "wide",
    cat: ["web", "pessoal"],
    catLabel: "Front-End · React & Web · Pessoal",
    colors: ["#2563eb", "#050d24"],
    desc: "Site e aplicação em React para a escolinha Tríade Futsal ('Futsal ensinado como profissão, vivido como infância'), com 4 unidades em Brasília, metodologia, comissão técnica e marcação de aula.",
    highlights: ["Versão Web (HTML/CSS/JS) + aplicação em React (triade-react)", "4 unidades em Brasília e agendamento de aula experimental", "Seções de metodologia e comissão técnica"],
    stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Controle de Vendas",
    repo: "ControleDeVendas",
    word: "Controle\nVendas",
    glyph: "📈",
    size: "wide",
    cat: ["fullstack", "mobile", "backend", "academico"],
    catLabel: "Full-Stack · Mobile & Firebase · Acadêmico",
    colors: ["#7c3aed", "#16072e"],
    desc: "Aplicativo em React Native (Expo / Metro) integrado ao Firebase para cadastro, controle de vendas e acompanhamento de transações em tempo real.",
    highlights: ["App construído com React Native + Expo", "Persistência e sincronização em nuvem com Firebase", "Cadastro de vendas e consulta de resultados"],
    stack: ["React Native", "Expo", "JavaScript", "Firebase"],
  },
  {
    title: "Projeto Wakanda",
    repo: "Projeto-Wakanda",
    word: "Wakanda",
    glyph: "🛡️",
    size: "",
    cat: ["backend", "academico"],
    catLabel: "Algoritmos & Estruturas de Dados · C · Acadêmico",
    colors: ["#4c1d95", "#0f0620"],
    desc: "Trabalho prático (TP02) em linguagem C para processamento das estradas e vizinhanças entre cidades de Wakanda (`cidades.c` / `cidades.h`), com leitura de arquivos de teste e cálculo de rotas.",
    highlights: ["Implementação modular em C (cidades.c, cidades.h, main.c)", "Estruturas de dados, alocação dinâmica e manipulação de arquivos"],
    stack: ["C", "Estruturas de Dados"],
  },
  {
    title: "Avaliador de Expressões",
    repo: "Avaliador-Expressoes-C",
    word: "( a + b )\n* c",
    glyph: "🧮",
    size: "wide",
    cat: ["backend", "academico"],
    catLabel: "Algoritmos & Estruturas de Dados · C · Acadêmico",
    colors: ["#0f172a", "#020617"],
    desc: "Calculadora e avaliador de expressões matemáticas em C (`calculadora.c` / `calculadora.h`), realizando conversão entre notações infixa e pós-fixa e avaliação com pilhas.",
    highlights: ["Módulos calculadora.c e calculadora.h em C", "Conversão infixa/pós-fixa e avaliação com pilhas"],
    stack: ["C", "Pilhas", "Algoritmos"],
  },
  {
    title: "Portfólio Giovanna",
    slug: "portfolio-giovanna",
    repo: "SiteDePortf-lio-",
    word: "Giovanna\nFotografia",
    glyph: "📷",
    size: "wide",
    live: "https://giovannaloboportfolio.netlify.app/",
    cat: ["web", "pessoal"],
    catLabel: "Front-End · Site & SEO · Pessoal",
    colors: ["#a21caf", "#1a0618"],
    desc: "Portfólio profissional para a fotógrafa Giovanna Lobo: 'Transformando visões em realidade'. Site multipágina com galerias por evento, página sobre, WhatsApp integrado e SEO técnico.",
    highlights: ["Online em giovannaloboportfolio.netlify.app", "Páginas dedicadas: Casamento, Intervenção Cultural, Meskla 2026 e Red Bull UnB", "SEO completo com sitemap.xml, robots.txt e página 404"],
    stack: ["HTML5", "CSS3", "JavaScript", "SEO"],
  },
  {
    title: "PurplePiggy",
    slug: "purple-piggy",
    repo: "PurplePiggy",
    word: "Purple\nPiggy",
    glyph: "🐷",
    size: "tall",
    imgPos: "50% 6%",
    featured: "⭐ Novo",
    cat: ["fullstack", "mobile", "web", "backend", "pessoal"],
    catLabel: "Full-Stack · Mobile Android & Web · Pessoal",
    colors: ["#7c3aed", "#1d0838"],
    desc: "Aplicativo nativo Android (Capacitor) e Web mobile-first de gestão financeira e educação gamificada para mulheres, com trilhas interativas, metas, alertas preventivos e conformidade LGPD.",
    highlights: ["App nativo Android (Capacitor 8) + Web mobile-first em React 18 & TypeScript", "Backend em Supabase (PostgreSQL + RLS + Modo Demonstração isolado)", "78/78 testes automatizados passando com Vitest", "Aprendizado gamificado com repetição espaçada e desafios diários"],
    stack: ["React 18", "TypeScript", "Capacitor", "Supabase", "Tailwind CSS", "Vitest"],
  },
  {
    title: "Portfólio João",
    slug: "portfolio-jao",
    repo: "Portfolio-jao",
    word: "Portfólio\nJoão",
    glyph: "💼",
    size: "wide",
    cat: ["web", "pessoal"],
    catLabel: "Front-End · React & TypeScript · Pessoal",
    colors: ["#0ea5e9", "#07182c"],
    desc: "Aplicação web moderna de portfólio desenvolvida com React, TypeScript, TanStack Start e Tailwind CSS, com componentes Radix UI e layout responsivo.",
    highlights: ["Construído com TanStack Start + React + TypeScript", "Estilização com Tailwind CSS e componentes acessíveis (Radix UI)"],
    stack: ["React", "TypeScript", "TanStack Start", "Tailwind CSS"],
  },
];

/* Ordem de exibição no mosaico (encaixe exato da grade de 4 colunas) */
const ORDER = [
  "EHR Solutions", "VTourney", "Adega Express",
  "PurplePiggy", "UP Telecom", "Pesk",
  "Feira.Casa Marketplace", "Zé Bombom", "Portfólio Giovanna",
  "TODO-List Pro", "Projeto Wakanda",
  "Tríade Futsal", "Locadora de Veículos",
  "Portfólio João", "Controle de Vendas",
  "Avaliador de Expressões",
];
PROJECTS.sort((a, b) => ORDER.indexOf(a.title) - ORDER.indexOf(b.title));

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const slugify = (s) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function coverHTML(p) {
  const [a, b] = p.colors;
  const slug = p.slug || slugify(p.title);
  return `
    <div class="cover" style="background: radial-gradient(120% 120% at 0% 0%, ${a} 0%, ${b} 70%);">
      <div class="cover-pattern" style="background-image:
        repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 14px);"></div>
      <div class="cover-word">${p.word.replace(/\n/g, "<br>")}</div>
      <div class="cover-glyph">${p.glyph}</div>
      <img class="cover-img" data-base="assets/projetos/${slug}" alt="${p.title}" loading="lazy"
        style="${p.imgFit ? `object-fit:${p.imgFit};object-position:center;` : ""}${p.imgPos ? `object-position:${p.imgPos};` : ""}${p.imgBg ? `background:${p.imgBg};` : ""}" />
      <div class="img-label"><span class="lbl-cat">${p.catLabel}</span><strong>${p.title}</strong></div>
    </div>`;
}

/* Tenta carregar assets/projetos/<slug>.jpg → .png → .webp → .jpeg.
   Se nenhuma existir, mantém a capa gerada. */
const IMG_EXTS = ["jpg", "png", "webp", "jpeg", "gif"];
function loadCovers(root = document) {
  $$(".cover-img:not([data-tried])", root).forEach((img) => {
    img.dataset.tried = "1";
    let i = 0;
    img.onload = () => img.closest(".cover").classList.add("has-img");
    img.onerror = () => {
      i++;
      if (i < IMG_EXTS.length) img.src = `${img.dataset.base}.${IMG_EXTS[i]}`;
      else img.remove();
    };
    img.src = `${img.dataset.base}.${IMG_EXTS[0]}`;
  });
}

/* ---------- Render: skills ---------- */
$("#skills").innerHTML = SKILLS.map(
  ([name, path, invert]) => `
  <div class="skill${invert ? " invert" : ""}" data-name="${name}">
    <img src="${DEVICON + path}" alt="${name}" loading="lazy" />
  </div>`
).join("");

/* ---------- Render: barras ---------- */
$("#bars").innerHTML = LANGS.map(
  ([name, v]) => `
  <div class="bar">
    <span>${name}</span>
    <div class="bar-track"><div class="bar-fill" data-v="${v}"></div></div>
    <span>${v}%</span>
  </div>`
).join("");

/* ---------- Render: projetos ---------- */
$("#collage").innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="card ${p.size} reveal" style="--acc:${p.colors[0]}" tabindex="0" data-i="${i}" data-cat="${p.cat.join(" ")}" aria-label="${p.title}">
    ${coverHTML(p)}
    ${p.featured ? `<span class="badge-star">${p.featured}</span>` : ""}
    ${p.live ? `<a class="live-dot" href="${p.live}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Abrir site ao vivo">● online ↗</a>` : ""}
    <div class="card-info">
      <p>${p.desc.split(". ")[0]}.</p>
      <div class="chips">${p.stack.slice(0, 4).map((s) => `<span class="chip">${s}</span>`).join("")}</div>
    </div>
  </article>`
).join("");
loadCovers($("#collage"));

/* ---------- Filtros ---------- */
$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  $$(".filter").forEach((b) => b.classList.toggle("active", b === btn));
  const f = btn.dataset.filter;
  $$(".card").forEach((c) => {
    const show = f === "all" || c.dataset.cat.split(" ").includes(f);
    c.classList.toggle("hide", !show);
    if (show) c.classList.add("in");
  });
});

/* ---------- Modal ---------- */
const modal = $("#modal");
let lastFocus = null;

function openModal(i) {
  const p = PROJECTS[i];
  lastFocus = document.activeElement;
  $("#modalCover").innerHTML = coverHTML(p);
  loadCovers($("#modalCover"));
  $("#modalCat").textContent = p.catLabel;
  $("#modalTitle").textContent = p.title;
  $("#modalDesc").textContent = p.desc;
  $("#modalHighlights").innerHTML = p.highlights.map((h) => `<li>${h}</li>`).join("");
  $("#modalStack").innerHTML = p.stack.map((s) => `<span class="chip">${s}</span>`).join("");
  $("#modalLink").href = GH + p.repo;
  const live = $("#modalLive");
  live.hidden = !p.live;
  if (p.live) live.href = p.live;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastFocus && lastFocus.focus();
}
$("#collage").addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openModal(+card.dataset.i);
});
$("#collage").addEventListener("keydown", (e) => {
  const card = e.target.closest(".card");
  if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(+card.dataset.i); }
});
modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });

/* ---------- Capa do Portfólio (Folio Gate) + Carrossel Tech + Efeito de Click ---------- */
const folioGate = $("#folioGate");
const gateBook = $("#gateBook");
const menuLinks = $$("#gameMenu a");
let menuIdx = 0;

// Carrossel vertical de linguagens de programação caindo no fundo
const RAIN_TECHS = [
  { name: "TypeScript", code: "type Dev = FullStack", icon: "typescript/typescript-original.svg" },
  { name: "React", code: "<Portfolio year={2026} />", icon: "react/react-original.svg" },
  { name: "Node.js", code: "app.listen(3000)", icon: "nodejs/nodejs-original.svg" },
  { name: "Python", code: "async def run():", icon: "python/python-original.svg" },
  { name: "Next.js", code: "export default Page", icon: "nextjs/nextjs-original.svg", inv: true },
  { name: "Java", code: "SpringApplication.run()", icon: "java/java-original.svg" },
  { name: "PostgreSQL", code: "SELECT * FROM projects;", icon: "postgresql/postgresql-original.svg" },
  { name: "JavaScript", code: "await fetch('/api')", icon: "javascript/javascript-original.svg" },
  { name: "Docker", code: "docker compose up -d", icon: "docker/docker-original.svg" },
  { name: "MySQL", code: "CREATE INDEX idx_dev", icon: "mysql/mysql-original.svg" },
  { name: "Tailwind", code: "flex items-center", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Git", code: "git push origin main", icon: "git/git-original.svg" },
  { name: "HTML5", code: "<section id='hero'>", icon: "html5/html5-original.svg" },
  { name: "CSS3", code: "grid-template-columns", icon: "css3/css3-original.svg" },
];

// Linhas de código reais do portfólio sendo codadas ao vivo no fundo da seção 01 // INÍCIO
const INTRO_SNIPPETS_LEFT = [
`// src/Portfolio2026.tsx
import { Screen, PortalD, GameMenu } from "@gustavo/ui";

export default function Portfolio2026() {
  const dev = {
    nome: "Gustavo Silva",
    role: "Full-Stack Developer",
    cidade: "Brasília, DF",
  };

  return (
    <Screen id="inicio" theme="midnight-blue">
      <PortalD badge="DEV" src="/assets/foto-d.jpg" />
      <HeroTitle star="✦" year={2026}>
        PORTFÓLIO
      </HeroTitle>
      <GameMenu
        items={["Iniciar", "Projetos", "Contato"]}
        controls={["ArrowUp", "ArrowDown", "Enter"]}
      />
    </Screen>
  );
}`,
`// src/components/CoverGate.tsx
import { SpiralOrbit } from "./SpiralOrbit";

export function CoverGate({ onOpen }) {
  const stack = [
    "TypeScript", "React", "Next.js",
    "Node.js", "PostgreSQL", "Java", "Python"
  ];

  return (
    <aside id="folioGate" onClick={onOpen}>
      <SpiralOrbit items={stack} loop="continuous" />
      <h1>PORT ✦ FÓLIO // 2026</h1>
      <button className="gate-cta">
        CLIQUE PARA ABRIR O PORTFÓLIO ↗
      </button>
    </aside>
  );
}`
];

const INTRO_SNIPPETS_RIGHT = [
`// src/core/engine.ts
import { github, deployCluster } from "@gustavo/core";

export async function bootPortfolio() {
  const repos = await github.fetchUser("gustavinzx");
  const fullstack = repos.filter(r => r.isFullStack);

  await deployCluster({
    owner: "Gustavo Silva",
    projects: fullstack.length,
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    testsPassed: "554/554",
    region: "br-df-1",
    status: "ONLINE",
  });
}`,
`/* src/styles/theme-2026.css */
:root {
  --bg-deep: #040915;
  --blue-neon: #1e6bff;
  --cyan-glow: #59c3ff;
}

.d-shape {
  border-radius: 18px 999px 999px 18px;
  border: 2px solid rgba(89, 195, 255, 0.65);
  background: linear-gradient(135deg, #1e6bff, #061229);
}

.intro-title .big {
  font-family: "Dela Gothic One", sans-serif;
  letter-spacing: -0.01em;
}`
];

function highlightCodeSnippet(raw) {
  const esc = raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // Tokenização em passe único para nunca substituir dentro de tags HTML já geradas
  const tokenRe = /(\/\/.*$|\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|\b(import|from|export|default|function|const|return|async|await)\b|\b(Portfolio2026|CoverGate|bootPortfolio|deployCluster|Screen|PortalD|HeroTitle|GameMenu|SpiralOrbit)\b/gm;
  return esc.replace(tokenRe, (match, comment, str, kw, fn) => {
    if (comment) return `<span class="cc">${comment}</span>`;
    if (str) return `<span class="cs">${str}</span>`;
    if (kw) return `<span class="ck">${kw}</span>`;
    if (fn) return `<span class="cf">${fn}</span>`;
    return match;
  });
}

function startCodeStream(el, snippets, initialProgress = 0.45, speedMs = 26) {
  if (!el) return;
  let sIdx = 0;
  let charIdx = Math.floor(snippets[0].length * initialProgress);
  let pausing = false;

  function step() {
    if (pausing) return;
    const text = snippets[sIdx];
    charIdx += 2;
    if (charIdx <= text.length) {
      const slice = text.slice(0, charIdx);
      el.innerHTML = highlightCodeSnippet(slice) + '<span class="code-caret">▌</span>';
      setTimeout(step, speedMs);
    } else {
      pausing = true;
      setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => {
          sIdx = (sIdx + 1) % snippets.length;
          charIdx = 28;
          el.innerHTML = highlightCodeSnippet(snippets[sIdx].slice(0, charIdx)) + '<span class="code-caret">▌</span>';
          el.style.opacity = "1";
          pausing = false;
          setTimeout(step, 350);
        }, 520);
      }, 2200);
    }
  }
  step();
}

startCodeStream($("#codeStreamLeft"), INTRO_SNIPPETS_LEFT, 0.52, 28);
startCodeStream($("#codeStreamRight"), INTRO_SNIPPETS_RIGHT, 0.42, 32);

// Espiral em loop 100% contínuo na Capa Interativa (#folioGate)
const spiralContainer = $("#spiralItems");
if (spiralContainer) {
  const SPIRAL_TECHS = RAIN_TECHS.slice(0, 10);
  const nodes = SPIRAL_TECHS.map((t, idx) => {
    const el = document.createElement("div");
    el.className = "spiral-node";
    el.innerHTML = `<img src="${DEVICON}${t.icon}" class="${t.inv ? "inv" : ""}" alt="" /><span>${t.name}</span>`;
    spiralContainer.appendChild(el);
    return {
      el,
      baseAngle: (idx / SPIRAL_TECHS.length) * Math.PI * 2,
      ringOffset: (idx % 2 === 0 ? 1 : 0.84),
    };
  });

  function animateSpiral(now) {
    if (document.body.classList.contains("cover-open")) {
      const t = now * 0.00032; // velocidade suave e contínua sem salto
      const w = gateBook ? gateBook.clientWidth : 1000;
      const h = gateBook ? gateBook.clientHeight : 620;
      const isMobile = w < 640;
      const rx = isMobile ? Math.min(240, w * 0.40) : Math.min(485, w * 0.43);
      const ry = isMobile ? Math.min(185, h * 0.34) : Math.min(220, h * 0.35);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const ang = n.baseAngle + t;
        // Modulação espiral suave no raio mantendo continuidade periódica (2*PI)
        const spiralWave = 1 + 0.08 * Math.sin(ang * 2 - t * 1.5);
        const x = Math.cos(ang) * rx * n.ringOffset * spiralWave;
        const y = Math.sin(ang) * ry * n.ringOffset * spiralWave;
        const depth = (Math.sin(ang) + 1) * 0.5; // 0 (topo/fundo) -> 1 (frente)
        const scale = 0.86 + depth * 0.18;
        const alpha = 0.45 + depth * 0.45;
        n.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`;
        n.el.style.opacity = alpha.toFixed(2);
      }
    }
    requestAnimationFrame(animateSpiral);
  }
  requestAnimationFrame(animateSpiral);
}

// Spotlight suave acompanhando o mouse no card da capa
if (gateBook) {
  folioGate.addEventListener("mousemove", (e) => {
    const rect = gateBook.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    gateBook.style.setProperty("--mx", `${x.toFixed(1)}%`);
    gateBook.style.setProperty("--my", `${y.toFixed(1)}%`);
  });
}

let isOpening = false;
function openFolio(e) {
  if (isOpening || !document.body.classList.contains("cover-open")) return;
  // Se houve clique de mouse, cria onda de choque (ripple) e efeito de pressão antes de abrir
  if (e && typeof e.clientX === "number" && gateBook) {
    isOpening = true;
    const rect = gateBook.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    gateBook.appendChild(ripple);
    folioGate.classList.add("clicking");

    setTimeout(() => {
      document.body.classList.remove("cover-open");
      folioGate.classList.remove("clicking");
      folioGate.setAttribute("aria-hidden", "true");
      ripple.remove();
      isOpening = false;
      window.dispatchEvent(new Event("resize"));
    }, 260);
    return;
  }

  document.body.classList.remove("cover-open");
  folioGate.setAttribute("aria-hidden", "true");
  setTimeout(() => window.dispatchEvent(new Event("resize")), 100);
}

function showFolioCover() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.classList.add("cover-open");
  folioGate.setAttribute("aria-hidden", "false");
}

const gateCta = $("#gateCta");
if (gateCta) {
  gateCta.addEventListener("click", (e) => {
    e.stopPropagation();
    openFolio(e);
  });
}
if (location.search.includes("open=1")) openFolio();

$("#backCover").addEventListener("click", showFolioCover);
$("#logoHome").addEventListener("click", (e) => {
  e.preventDefault();
  showFolioCover();
});

menuLinks.forEach((a, i) =>
  a.addEventListener("mouseenter", () => {
    menuIdx = i;
    menuLinks.forEach((l) => l.classList.toggle("active", l === a));
  })
);
document.addEventListener("keydown", (e) => {
  if (document.body.classList.contains("cover-open")) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openFolio();
    }
    return;
  }
  if (modal.classList.contains("open")) {
    if (e.key === "Escape") closeModal();
    return;
  }
  const introVisible = window.scrollY < window.innerHeight * 0.5;
  if (!introVisible) return;
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    menuIdx = (menuIdx + (e.key === "ArrowDown" ? 1 : -1) + menuLinks.length) % menuLinks.length;
    menuLinks.forEach((l, i) => l.classList.toggle("active", i === menuIdx));
  } else if (e.key === "Enter" && document.activeElement === document.body) {
    menuLinks[menuIdx].click();
  }
});

/* ---------- Topbar + aba ativa ---------- */
const topbar = $("#topbar");
const sections = ["perfil", "projetos", "contato"].map((id) => document.getElementById(id));
function onScroll() {
  topbar.classList.toggle("scrolled", window.scrollY > 120);
  let current = null;
  sections.forEach((s) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.45) current = s.id; });
  $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll + barras ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$(".bar-fill", en.target).forEach((b) => (b.style.width = b.dataset.v + "%"));
      io.unobserve(en.target);
    });
  },
  { threshold: 0.12 }
);
$$(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (el.classList.contains("card") ? (i % 4) * 70 : 0) + "ms";
  io.observe(el);
});

/* ---------- Brasas (partículas) na seção Perfil ---------- */
(function embers() {
  const cv = $("#embers");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = cv.getContext("2d");
  let w, h, parts = [], running = false;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    w = cv.offsetWidth; h = cv.offsetHeight;
    cv.width = w * DPR; cv.height = h * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  const GLYPHS = ["{", "}", "</>", ";", "()", "=>", "0", "1", "[]", "&&", "#", "$"];
  function spawn() {
    const glyph = Math.random() < 0.35;
    return {
      x: Math.random() * w * (glyph ? 1 : 0.55),
      y: h + Math.random() * 40,
      r: Math.random() * 1.8 + 0.4,
      vy: Math.random() * 0.6 + 0.25,
      vx: (Math.random() - 0.5) * 0.3,
      life: 0,
      max: Math.random() * 400 + 250,
      hue: glyph ? 200 + Math.random() * 15 : Math.random() < 0.7 ? 20 + Math.random() * 20 : 205,
      g: glyph ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : null,
      size: 10 + Math.random() * 6,
    };
  }
  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    if (parts.length < 80) parts.push(spawn());
    parts.forEach((p, i) => {
      p.life++; p.y -= p.vy; p.x += p.vx + Math.sin(p.life / 30) * 0.2;
      const a = Math.max(0, 1 - p.life / p.max);
      ctx.shadowBlur = 8; ctx.shadowColor = `hsla(${p.hue}, 100%, 55%, ${a})`;
      if (p.g) {
        ctx.font = `700 ${p.size}px Consolas, monospace`;
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${a * 0.45})`;
        ctx.fillText(p.g, p.x, p.y);
      } else {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (p.life > p.max || p.y < -10) parts[i] = spawn();
    });
    requestAnimationFrame(tick);
  }
  resize();
  window.addEventListener("resize", resize);
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting;
    if (running) tick();
  }).observe(cv);
})();

/* ---------- Texto digitado (cargo) ---------- */
(function typed() {
  const el = $("#typed");
  if (!el) return;
  const roles = [
    "Desenvolvedor Full-Stack",
    "Front-End com React & Next.js",
    "APIs com Node.js & SQL",
    "Apps Mobile com React Native",
    "Sempre aprendendo algo novo",
  ];
  let r = 0, c = 0, del = false;
  (function step() {
    const word = roles[r];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let t = del ? 35 : 70;
    if (!del && c === word.length) { del = true; t = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; t = 300; }
    setTimeout(step, t);
  })();
})();

/* ---------- Janela de código (digitação com syntax highlight) ---------- */
(function codeCard() {
  const el = $("#codeCard");
  if (!el) return;
  // [classe, texto] — "\n" quebra linha
  const tokens = [
    ["k", "const "], ["v", "dev"], ["p", " = {\n"],
    ["", "  nome: "], ["s", '"Gustavo"'], ["p", ",\n"],
    ["", "  stack: ["], ["s", '"TS"'], ["p", ", "], ["s", '"React"'], ["p", ", "], ["s", '"Node"'], ["", "],\n"],
    ["", "  cafe: "], ["n", "Infinity"], ["p", ",\n"],
    ["", "  bugs: "], ["n", "0"], ["c", " // quase"], ["p", "\n};\n"],
    ["v", "dev"], ["p", "."], ["k", "build"], ["p", "("], ["s", '"o futuro"'], ["p", ");"],
  ];
  const esc = (s) => s.replace(/</g, "&lt;");
  let ti = 0, ci = 0, html = "";
  function render(partial) { el.innerHTML = html + partial + '<span class="caret">▌</span>'; }
  function step() {
    if (ti >= tokens.length) {
      render("");
      return setTimeout(() => { ti = 0; ci = 0; html = ""; step(); }, 4000);
    }
    const [cls, txt] = tokens[ti];
    ci++;
    const part = `<span class="${cls}">${esc(txt.slice(0, ci))}</span>`;
    if (ci >= txt.length) { html += part; ti++; ci = 0; render(""); }
    else render(part);
    setTimeout(step, txt[ci - 1] === "\n" ? 120 : 28 + Math.random() * 40);
  }
  new IntersectionObserver(([en], obs) => {
    if (en.isIntersecting) { step(); obs.disconnect(); }
  }).observe(el);
})();
