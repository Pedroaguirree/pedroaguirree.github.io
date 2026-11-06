const CONFIG = {
  whatsapp: "",
  linkedin: "https://www.linkedin.com/in/pedroaguirredev/",
  nascimento: [1998, 10, 22],
  inicioDev: [2023, 8],
  cv: { pt: "assets/cv/curriculo-pedro-aguirre.pdf", en: "assets/cv/resume-pedro-aguirre.pdf" },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const ler = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

const EN = {
  "pular": "Skip to content",
  "nav.trajetoria": "Journey", "nav.experiencia": "Experience", "nav.projetos": "Projects",
  "nav.habilidades": "Skills", "nav.formacao": "Education", "nav.contato": "Contact",
  "hero.lead": "Junior .NET developer working with C#, ASP.NET and SQL Server. I build features for systems that industrial companies use to manage safety and operations, and I look after part of the infrastructure: databases, backups and servers on Azure.",
  "hero.projetos": "See projects", "hero.cv": "Download résumé (PDF)", "hero.links": "Contacts", "hero.email": "Email",
  "foto.label": "Pedro Aguirre: show personal details", "cracha.label": "Professional summary",
  "nota.l1": "Pedro Aguirre, ", "nota.anos": " years old,", "nota.l2": "Jundiaí, Brazil",
  "cracha.status": "Open to new opportunities",
  "soft.1": "Communication", "soft.2": "Teamwork", "soft.3": "Proactivity", "soft.4": "Organization", "soft.5": "Continuous learning",
  "cracha.empresa": "Company", "cracha.area": "Developing software for", "cracha.estudo": "Studying",
  "cracha.estudo.v": "Systems degree, Fatec Jundiaí",

  "traj.titulo": "From logistics to code",
  "traj.intro": "I started my career scheduling shipments at a paper manufacturer. Today I write software. Here is how I got here:",
  "traj.1.t": "Logistics analyst at Bignardi",
  "traj.1.p": "Scheduled shipments for sales orders and worked on logistics and reverse logistics. That is where I learned to organize processes and work against deadlines.",
  "traj.2.t": "First steps in programming",
  "traj.2.p": "Took Rocketseat's Discovery course, my introduction to front-end, back-end, networks, servers and databases.",
  "traj.3.t": "Logic in C and my first developer job",
  "traj.3.p": "Took a programming logic course in C at Senac and, in August, joined Cautus.Digital as a junior software developer.",
  "traj.4.t": "Fatec Jundiaí and a project at P&amp;G",
  "traj.4.p": "Started a Systems Analysis and Development degree and spent 5 months working on-site at P&amp;G in Louveira, implementing a logistics automation project.",
  "traj.5.t": "Cloud, infrastructure and my own projects",
  "traj.5.p": "Started working with Azure, monitoring servers and moving client attachments to the cloud. Outside work, I shipped PeJu Finanças and AutoNF with Claude Code.",
  "traj.6.t": "Expected graduation", "traj.6.p": "Degree expected to be completed in July.",

  "exp.titulo": "Experience",
  "exp.c.plataforma": "(Digitalss platform)", "exp.c.cargo": "Junior software developer",
  "exp.c.quando": "Aug 2023 to present", "exp.c.onde": "Remote, Campo Limpo Paulista (Brazil)",
  "exp.c.intro": "This is where I had the chance to grow and evolve as a developer. Digitalss is a platform industrial companies use to manage safety and operations, with modules for contractor management, document management, work permits, inspections, incidents and CIPA (workplace safety committee) elections, among others.",
  "exp.pg.t": "On-site project at P&amp;G", "exp.pg.q": "Louveira (Brazil), 2024, 5 months",
  "exp.pg.p": "Worked on-site at P&amp;G in Louveira, implementing a logistics automation system: truck drivers check in on a tablet when they arrive, the system alerts the team to pick the load and, once it is ready, messages the driver to pull up to the dock and load.",
  "exp.aba.dev": "Development", "exp.aba.infra": "Infrastructure and databases",
  "exp.dev.1": "Build and maintain features across the system's modules with ASP.NET Web Forms (ASPX) and C#.",
  "exp.dev.2": "Write queries and changes in SQL Server, which stores each client's data.",
  "exp.dev.3": "Work on the user interface with JavaScript, HTML and CSS.",
  "exp.dev.4": "Use Claude Code every day to plan, write, review and test code, and the team also works with Claude. Outside work, I use Claude Code on my own projects.",
  "exp.infra.1": "Monitor server disk space and clean it up when needed.",
  "exp.infra.2": "Create and maintain automated jobs in Windows Task Scheduler.",
  "exp.infra.3": "Maintain the database backups of our clients.",
  "exp.infra.4": "Track database sizes in SQL Server and run cleanups and shrinks when needed.",
  "tag.agendador": "Task Scheduler",
  "exp.azure.1": "Monitor the company's servers on Azure.",
  "exp.azure.2": "Work on migrating attachments for about 43 clients from server disks to Azure Blob Storage, configuring the storage for each client.",
  "tag.monitoramento": "Server monitoring",
  "exp.b.cargo": "Junior logistics analyst", "exp.b.quando": "Sep 2019 to Nov 2021", "exp.b.onde": "Jundiaí (Brazil)",
  "exp.b.p": "Paper products manufacturer. I scheduled shipments for sales orders and worked on logistics and reverse logistics.",

  "proj.titulo": "Projects", "proj.intro": "Things I built on my own to solve real problems.",
  "peju.sub": "Personal finance tracker in the cloud",
  "peju.p": "A web app to organize monthly spending: log expenses in seconds, see where the salary goes and plan purchases paid in installments. It came from a real need and is used every day by me and my family.",
  "peju.1": "Google sign-in and real-time sync between phone and computer, working even offline.",
  "peju.2": "In progress: an AI-powered WhatsApp bot, so that a text or voice message like “spent 85 at the grocery store” becomes an entry in the right category.",
  "peju.3": "Yearly report with charts, savings goals, category limits and installment plans spread across months.",
  "peju.4": "Imports bank statements (OFX and CSV), exports to Excel and makes full backups.",
  "peju.5": "End-to-end tests with Playwright, with Firebase simulated locally.",
  "g.painel": "Monthly dashboard", "g.relatorio": "Yearly report", "g.celular": "On the phone", "g.whatsapp": "WhatsApp bot",
  "nf.sub": "Service invoice issuer for Windows",
  "nf.p": "Desktop app that issues Brazilian service invoices (NFS-e, national standard) straight through the tax authority's official API (Sefin Nacional), signed with an A1 digital certificate. I built it so a psychologist can issue the month's invoices in a few clicks, with all data kept on her own computer.",
  "nf.1": "Integration with Sefin Nacional using mTLS authentication and digitally signed XML.",
  "nf.2": "Local Python (Flask) server with an HTML, CSS and JavaScript interface and a SQLite database.",
  "nf.3": "Encrypted backups (AES-256-GCM), invoice delivery by email and patient data deletion following Brazil's data protection law (LGPD).",
  "nf.4": "Security audit with 15 fixes and 175 automated tests, 92 of them end-to-end with Playwright.",
  "nf.5": "Packaged as an executable with PyInstaller, with a user manual in PDF.",
  "g.inicio": "Home", "g.emitir": "Issue invoice", "g.emitida": "Invoice issued", "g.fechar": "Close the month",
  "nf.legenda": "Screens with fictional data.",

  "ia.titulo": "AI as a tool",
  "ia.1": "To me, AI is a work tool, like a code editor or SQL Server. I use Claude Code to plan, write, review and test code, at work and on my own projects.",
  "ia.2": "Technology changes fast, and I believe we need to keep up with it. Used well, it takes us further. I am still the one who decides, reviews and answers for the result.",
  "ia.l1.t": "At work", "ia.l1.v": "The team uses Claude every day, and I use Claude Code for development.",
  "ia.l2.t": "On my projects", "ia.l2.v": "PeJu Finanças, AutoNF and this site were built with Claude Code.",
  "ia.l3.t": "What for", "ia.l3.v": "Planning, writing, reviewing and testing code, and learning new things faster.",

  "hab.titulo": "Skills", "hab.intro": "Grouped by where I use each one.",
  "hab.trab": "At work, every day", "hab.htmlcss": "HTML and CSS",
  "hab.infra": "Infrastructure and cloud",
  "hab.infra.1": "Database backup and maintenance", "hab.infra.2": "Server and database monitoring", "hab.infra.3": "Windows Task Scheduler",
  "hab.proj": "On personal projects", "hab.proj.py": "Python and Flask", "hab.proj.1": "Testing with pytest and Playwright", "hab.proj.git": "Git and GitHub",
  "hab.ia": "AI in development",
  "hab.ia.cc": "at work and on personal projects", "hab.ia.claude": "with the team, at work", "hab.ia.gemini": "in the PeJu WhatsApp bot",
  "hab.antes": "From my previous career", "hab.antes.1": "Logistics and process organization",

  "form.titulo": "Education",
  "form.1.q": "Jul 2024 to Jul 2027 (in progress)", "form.1.t": "Systems Analysis and Development",
  "form.1.p": "Fatec Jundiaí, associate degree in technology",
  "form.2.q": "Jun to Aug 2023", "form.2.t": "Programming Logic", "form.2.p": "Senac São Paulo, technical course in C",
  "form.3.q": "Jan to Mar 2022", "form.3.t": "Discovery: introduction to programming",
  "form.3.p": "Rocketseat, short course: front-end, back-end, networks, servers and databases",

  "cont.titulo": "Let's talk?",
  "cont.p": "I am open to new opportunities, preferably remote. The fastest way to reach me is by email or LinkedIn.",
  "cont.email": "Send an email", "cont.copiar": "Copy address", "cont.whats": "Message me on WhatsApp", "cont.github": "See my GitHub",
  "rod.p": "Made by Pedro Aguirre with HTML, CSS and JavaScript, with help from Claude Code.",
  "rod.term": "Open terminal",
  "fechar": "Close",
};
const UI = {
  pt: { copiado: "Endereço copiado", copiar: "Copiar endereço",
        lang: "EN", langLabel: "Read in English", menuA: "Abrir menu", menuF: "Fechar menu", ampliar: "Ampliar imagem" },
  en: { copiado: "Address copied", copiar: "Copy address",
        lang: "PT", langLabel: "Ler em português", menuA: "Open menu", menuF: "Close menu", ampliar: "Enlarge image" },
};

const PT = {};
$$("[data-i18n]").forEach(el => { PT[el.dataset.i18n] = el.innerHTML; });
let lang = ler("pa-lang") || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");

function aplicarIdioma(l) {
  lang = l;
  const dic = l === "en" ? EN : PT;
  $$("[data-i18n]").forEach(el => { const t = dic[el.dataset.i18n]; if (t != null) el.innerHTML = t; });
  $$("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (!el.dataset.ptAttr) el.dataset.ptAttr = el.getAttribute(attr) || "";
    el.setAttribute(attr, l === "en" && EN[key] ? EN[key] : el.dataset.ptAttr);
  });
  document.documentElement.lang = l === "en" ? "en" : "pt-BR";
  const b = $("#btn-lang");
  b.textContent = UI[l].lang; b.setAttribute("aria-label", UI[l].langLabel); b.title = UI[l].langLabel;
  $("#btn-cv").href = CONFIG.cv[l];
  $$("[data-ampliar]").forEach(x => x.setAttribute("aria-label", UI[l].ampliar));
  atualizarDatas();
  guardar("pa-lang", l);
}
$("#btn-lang").addEventListener("click", () => aplicarIdioma(lang === "pt" ? "en" : "pt"));

function idade() {
  const [a, m, d] = CONFIG.nascimento, h = new Date();
  let i = h.getFullYear() - a;
  if (h.getMonth() + 1 < m || (h.getMonth() + 1 === m && h.getDate() < d)) i--;
  return i;
}
function tempoDev(l = lang) {
  const [a, m] = CONFIG.inicioDev, h = new Date();
  const meses = (h.getFullYear() - a) * 12 + (h.getMonth() + 1 - m);
  const anos = Math.floor(meses / 12), resto = meses % 12;
  const A = l === "en" ? (anos === 1 ? "year" : "years") : (anos === 1 ? "ano" : "anos");
  const M = l === "en" ? (resto === 1 ? "month" : "months") : (resto === 1 ? "mês" : "meses");
  const e = l === "en" ? "and" : "e";
  if (anos < 1) return `${resto} ${M}`;
  return resto ? `${anos} ${A} ${e} ${resto} ${M}` : `${anos} ${A}`;
}
function atualizarDatas() {
  $$("[data-idade]").forEach(el => { el.textContent = idade(); });
  $$("[data-tempo-dev]").forEach(el => { el.textContent = tempoDev(); });
}

const menu = $("#menu"), btnMenu = $("#btn-menu");
btnMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btnMenu.setAttribute("aria-expanded", aberto);
  btnMenu.setAttribute("aria-label", aberto ? UI[lang].menuF : UI[lang].menuA);
});
$$("a", menu).forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("aberto"); btnMenu.setAttribute("aria-expanded", "false");
}));
const topo = $(".topo");

const links = new Map($$("a", menu).map(a => [a.getAttribute("href").slice(1), a]));
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.remove("ativo"));
      const a = links.get(e.target.id); if (a) a.classList.add("ativo");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
links.forEach((_, id) => { const s = document.getElementById(id); if (s) obs.observe(s); });

const linha = $("#linha"), marcos = $$(".marco");
function rolagem() {
  topo.classList.toggle("rolou", scrollY > 8);
  const r = linha.getBoundingClientRect(), alvo = innerHeight * .62;
  const p = Math.min(1, Math.max(0, (alvo - r.top) / r.height));
  linha.style.setProperty("--prog", p.toFixed(3));
  marcos.forEach(m => m.classList.toggle("visto", m.getBoundingClientRect().top < alvo));
}
addEventListener("scroll", rolagem, { passive: true });
addEventListener("resize", rolagem);

function abas(lista, ao) {
  const tabs = $$('[role="tab"]', lista);
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => selecionar(i));
    t.addEventListener("keydown", e => {
      let j = null;
      if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") j = 0;
      if (e.key === "End") j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); selecionar(j); tabs[j].focus(); }
    });
  });
  function selecionar(i) {
    tabs.forEach((t, k) => { t.setAttribute("aria-selected", k === i); t.tabIndex = k === i ? 0 : -1; });
    ao(tabs[i], i);
  }
}
abas($(".abas"), tab => {
  $$(".painel").forEach(p => { p.hidden = p.id !== tab.getAttribute("aria-controls"); });
});
$$("[data-galeria]").forEach(g => {
  const tela = $(".tela", g), img = $("img", tela);
  abas($(".galeria-abas", g), tab => {
    img.classList.add("trocando");
    const nova = new Image();
    nova.onload = () => {
      img.src = tab.dataset.src; img.width = tab.dataset.w; img.height = tab.dataset.h;
      tela.classList.toggle("celular", tab.dataset.tipo === "celular");
      tela.classList.toggle("solto", tab.dataset.tipo === "solto");
      requestAnimationFrame(() => img.classList.remove("trocando"));
    };
    nova.src = tab.dataset.src;
    img.alt = tab.textContent.trim();
  });
});

const logoIA = $(".ia-logo");
if (logoIA) {
  const opcoes = logoIA.dataset.src.split(" ");
  const tentar = i => {
    if (i >= opcoes.length) return;
    const teste = new Image();
    teste.onload = () => { logoIA.src = opcoes[i]; logoIA.hidden = false; };
    teste.onerror = () => tentar(i + 1);
    teste.src = opcoes[i];
  };
  tentar(0);
}

const lightbox = $("#lightbox");
$$("[data-ampliar]").forEach(b => b.addEventListener("click", () => {
  const src = $("img", b);
  const alvo = $("img", lightbox);
  alvo.src = src.currentSrc || src.src; alvo.alt = src.alt;
  lightbox.showModal();
}));
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.close(); });

const palco = $("#palco"), foto = $("#foto-pedro");
const podeHover = matchMedia("(hover: hover)").matches;
let fixo = false, tAuto = null;
function mostrar(sim) {
  palco.classList.toggle("oi", sim);
  foto.setAttribute("aria-expanded", sim ? "true" : "false");
}
const emCima = () => podeHover && foto.matches(":hover");
function talvezEsconder() {
  setTimeout(() => { if (!fixo && !emCima() && !foto.matches(":focus-visible")) mostrar(false); }, 120);
}
foto.addEventListener("mouseenter", () => { if (podeHover) { clearTimeout(tAuto); mostrar(true); } });
foto.addEventListener("mouseleave", () => { if (podeHover) talvezEsconder(); });
foto.addEventListener("focus", () => { if (foto.matches(":focus-visible")) { clearTimeout(tAuto); mostrar(true); } });
foto.addEventListener("blur", talvezEsconder);
foto.addEventListener("click", () => {
  clearTimeout(tAuto);
  fixo = !fixo;
  mostrar(fixo || emCima());
});
document.addEventListener("click", e => {
  if (fixo && !foto.contains(e.target)) { fixo = false; mostrar(false); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && palco.classList.contains("oi")) { fixo = false; mostrar(false); }
});
tAuto = setTimeout(() => {
  if (palco.classList.contains("oi")) return;
  mostrar(true);
  tAuto = setTimeout(() => { if (!fixo && !emCima() && !foto.matches(":focus-visible")) mostrar(false); }, 4000);
}, 1600);

const btnCopiar = $("#copiar-email");
btnCopiar.addEventListener("click", async () => {
  const email = btnCopiar.dataset.email;
  try { await navigator.clipboard.writeText(email); }
  catch (e) {
    const t = document.createElement("textarea"); t.value = email; document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (e2) {}
    t.remove();
  }
  const s = $("span", btnCopiar);
  s.textContent = UI[lang].copiado; btnCopiar.classList.add("copiado");
  setTimeout(() => { s.textContent = UI[lang].copiar; btnCopiar.classList.remove("copiado"); }, 2200);
});
if (CONFIG.whatsapp) {
  $("#contato-whats").hidden = false;
  $("#link-whats").href = "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "");
}
if (CONFIG.linkedin) {
  const l = $("#contato-linkedin"); l.hidden = false; l.href = CONFIG.linkedin;
}

const term = $("#terminal"), saida = $("#term-saida"), entrada = $("#term-in");
const T = {
  pt: {
    boas: "Bem-vindo ao terminal do Pedro. Digite <span class=\"ok\">ajuda</span> para ver os comandos.",
    ajuda: "Comandos:\n  sobre        quem sou eu\n  experiencia  onde trabalho\n  projetos     o que já construí\n  skills       com o que trabalho\n  contato      como falar comigo\n  cv           baixar o currículo\n  lang         switch to English\n  limpar       limpar a tela\n  sair         fechar o terminal",
    sobre: () => `Pedro Aguirre, ${idade()} anos, de Jundiaí (SP).\nDesenvolvedor júnior há ${tempoDev("pt")}, vindo da logística.\nEstudando ADS na Fatec Jundiaí.`,
    experiencia: "Cautus.Digital (plataforma Digitalss), desde ago. 2023\n  Dev: C#, ASP.NET Web Forms, SQL Server, Claude Code\n  Infra: discos, backups, bancos, Agendador de Tarefas\n  Azure: monitoramento de servidores e Blob Storage\n  2024: 5 meses presencial na P&G (Louveira), automação da logística\nBignardi, analista de logística júnior, 2019 a 2021",
    projetos: "PeJu Finanças  controle financeiro com bot de WhatsApp e IA\nAutoNF         emissor de NFS-e em Python, com 175 testes",
    skills: "C# · ASP.NET · SQL Server · JavaScript · HTML/CSS\nMicrosoft Azure · Blob Storage · Python · Node.js · Firebase\nPlaywright · pytest · Git · Claude Code",
    contato: "e-mail: <a href=\"mailto:pedro.aguirre687@gmail.com\">pedro.aguirre687@gmail.com</a>\ngithub: <a href=\"https://github.com/Pedroaguirree\" target=\"_blank\" rel=\"noopener\">github.com/Pedroaguirree</a>\nlinkedin: <a href=\"https://www.linkedin.com/in/pedroaguirredev/\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/pedroaguirredev</a>",
    cv: "Baixando o currículo…",
    sudo: "<span class=\"ok\">Permissão de serviço aprovada ✔</span>\nPróximo passo: um e-mail para pedro.aguirre687@gmail.com 😉",
    sudoNao: "Permissão negada. Tente: sudo contratar-pedro",
    naoAchei: c => `comando não encontrado: ${c}. Digite ajuda.`,
  },
  en: {
    boas: "Welcome to Pedro's terminal. Type <span class=\"ok\">help</span> to see the commands.",
    ajuda: "Commands:\n  about        who I am\n  experience   where I work\n  projects     what I have built\n  skills       what I work with\n  contact      how to reach me\n  cv           download my résumé\n  lang         mudar para português\n  clear        clear the screen\n  exit         close the terminal",
    sobre: () => `Pedro Aguirre, ${idade()}, from Jundiaí, Brazil.\nJunior developer for ${tempoDev("en")}, coming from logistics.\nStudying Systems Analysis and Development at Fatec Jundiaí.`,
    experiencia: "Cautus.Digital (Digitalss platform), since Aug 2023\n  Dev: C#, ASP.NET Web Forms, SQL Server, Claude Code\n  Infra: disks, backups, databases, Task Scheduler\n  Azure: server monitoring and Blob Storage\n  2024: 5 months on-site at P&G (Louveira), logistics automation\nBignardi, junior logistics analyst, 2019 to 2021",
    projetos: "PeJu Finanças  finance tracker with an AI WhatsApp bot\nAutoNF         NFS-e invoice issuer in Python, 175 tests",
    skills: "C# · ASP.NET · SQL Server · JavaScript · HTML/CSS\nMicrosoft Azure · Blob Storage · Python · Node.js · Firebase\nPlaywright · pytest · Git · Claude Code",
    contato: "email: <a href=\"mailto:pedro.aguirre687@gmail.com\">pedro.aguirre687@gmail.com</a>\ngithub: <a href=\"https://github.com/Pedroaguirree\" target=\"_blank\" rel=\"noopener\">github.com/Pedroaguirree</a>\nlinkedin: <a href=\"https://www.linkedin.com/in/pedroaguirredev/\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/pedroaguirredev</a>",
    cv: "Downloading the résumé…",
    sudo: "<span class=\"ok\">Permission granted ✔</span>\nNext step: an email to pedro.aguirre687@gmail.com 😉",
    sudoNao: "Permission denied. Try: sudo hire-pedro",
    naoAchei: c => `command not found: ${c}. Type help.`,
  },
};
const ALIAS = {
  ajuda: "ajuda", help: "ajuda", "?": "ajuda",
  sobre: "sobre", about: "sobre", whoami: "sobre",
  experiencia: "experiencia", "experiência": "experiencia", experience: "experiencia", exp: "experiencia",
  projetos: "projetos", projects: "projetos", ls: "projetos",
  skills: "skills", habilidades: "skills",
  contato: "contato", contact: "contato",
  cv: "cv", curriculo: "cv", "currículo": "cv", resume: "cv",
  lang: "lang", idioma: "lang",
  limpar: "limpar", clear: "limpar", cls: "limpar",
  sair: "sair", exit: "sair",
};
const escapar = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function escrever(html, cls) {
  const d = document.createElement("div");
  if (cls) d.className = cls;
  d.innerHTML = html;
  saida.appendChild(d);
  saida.scrollTop = saida.scrollHeight;
}
function executar(bruto) {
  const c = bruto.trim();
  escrever("$ " + escapar(c), "cmd");
  if (!c) return;
  const t = T[lang], baixo = c.toLowerCase();
  if (baixo.startsWith("sudo")) {
    return escrever(/contratar|hire/.test(baixo) ? t.sudo : t.sudoNao);
  }
  const cmd = ALIAS[baixo.split(/\s+/)[0]];
  switch (cmd) {
    case "ajuda": return escrever(t.ajuda);
    case "sobre": return escrever(t.sobre());
    case "experiencia": return escrever(t.experiencia);
    case "projetos": return escrever(t.projetos);
    case "skills": return escrever(t.skills);
    case "contato": return escrever(t.contato);
    case "cv": {
      escrever(t.cv);
      const a = document.createElement("a"); a.href = CONFIG.cv[lang]; a.download = ""; document.body.appendChild(a); a.click(); a.remove();
      return;
    }
    case "lang": aplicarIdioma(lang === "pt" ? "en" : "pt"); return escrever(T[lang].boas);
    case "limpar": saida.innerHTML = ""; return;
    case "sair": term.close(); return;
    default: return escrever(escapar(t.naoAchei(c)));
  }
}
function abrirTerminal() {
  if (!saida.childElementCount) escrever(T[lang].boas);
  term.showModal();
  entrada.focus();
}
$("#term-abrir").addEventListener("click", abrirTerminal);
$("#term-form").addEventListener("submit", e => { e.preventDefault(); executar(entrada.value); entrada.value = ""; });
term.addEventListener("click", e => { if (e.target === term) term.close(); else if (!e.target.closest("a,button")) entrada.focus(); });
addEventListener("keydown", e => {
  if (e.key === "`" && !term.open && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); abrirTerminal(); }
});

aplicarIdioma(lang);
rolagem();
