// ===================================
// TIMETRAVEL AGENCY — MAIN SCRIPT
// ===================================

// ===== CURSEUR PERSONNALISÉ =====
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");
let mouseX = 0,
  mouseY = 0,
  followerX = 0,
  followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX + "px";
  cursorFollower.style.top = followerY + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();

document
  .querySelectorAll("a, button, .dest-card, .quiz-option")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      cursorFollower.style.opacity = "0.8";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursorFollower.style.opacity = "0.5";
    });
  });

// ===== HEADER SCROLL =====
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// ===== PARTICULES HERO =====
const particlesContainer = document.getElementById("particles");
const NB_PARTICLES = 50;
for (let i = 0; i < NB_PARTICLES; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.setProperty("--dur", 4 + Math.random() * 8 + "s");
  p.style.setProperty("--delay", -Math.random() * 8 + "s");
  p.style.setProperty("--opacity", (0.2 + Math.random() * 0.6).toString());
  if (Math.random() > 0.7) {
    p.style.width = "3px";
    p.style.height = "3px";
  }
  particlesContainer.appendChild(p);
}

// ===== REVEAL ANIMATIONS =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 80);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ===== COMPTEURS STATS =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    if (target >= 1000000) {
      el.textContent = Math.floor(current / 1000000) + "M" + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
    if (current >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll(".stat-number");
        nums.forEach(animateCounter);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) statsObserver.observe(statsSection);

// ===== DONNÉES DESTINATIONS =====
const destData = {
  paris: {
    title: "Paris 1889",
    tag: "Belle Époque",
    price: "4 200 €",
    duration: "7 jours",
    difficulty: "Facile",
    group: "2–12 personnes",
    emoji: "🗼",
    description: `
      <p>Bienvenue dans la ville lumière à son apogée ! L'Exposition Universelle de 1889 est le clou du spectacle de cette époque dorée. La Tour Eiffel, critiquée par certains artistes mais adulée par le public, trône majestueusement sur le Champ-de-Mars depuis quelques mois seulement.</p>
      <p>Vous vous promènerez dans les grands boulevards animés, vous attablerez dans les cafés fréquentés par Toulouse-Lautrec, Degas et Monet. Le soir, les cabarets s'illuminent et le cancan bat son plein au Moulin Rouge nouvellement ouvert.</p>
      <p>Nos guides temporels vous accompagnent dans les rues pavées, vous présentent aux personnalités de l'époque et vous font vivre l'effervescence d'une capitale en pleine transformation industrielle.</p>
    `,
    highlights: [
      {
        icon: "🗼",
        label: "Ascension de la Tour Eiffel inaugurée",
        desc: "Grimpez au sommet, une vue inédite",
      },
      {
        icon: "🎨",
        label: "Atelier des Impressionnistes",
        desc: "Visitez les ateliers de Monet et Renoir",
      },
      {
        icon: "🎭",
        label: "Nuit au Moulin Rouge",
        desc: "Inauguration du célèbre cabaret",
      },
      {
        icon: "☕",
        label: "Café de Flore",
        desc: "Discussions avec les intellectuels",
      },
    ],
  },
  cretace: {
    title: "Crétacé Supérieur",
    tag: "Préhistoire",
    price: "8 900 €",
    duration: "5 jours",
    difficulty: "Expert",
    group: "2–6 personnes",
    emoji: "🦕",
    description: `
      <p>Voici le voyage le plus vertigineux de notre catalogue : − 65 millions d'années. Le Crétacé supérieur est l'ère des dinosaures à son apogée, quelques millions d'années avant la grande extinction.</p>
      <p>Vous observerez des Triceratops paître paisiblement, assisterez au vol des Ptérosaures géants au-dessus de forêts primaires denses. Et bien sûr, vous croiserez de loin le roi absolu : le Tyrannosaurus Rex dans son habitat naturel.</p>
      <p>Ce voyage nécessite une préparation physique et mentale particulière. Nos guides spécialisés en zoologie préhistorique vous accompagnent à chaque instant. Les observatoires blindés garantissent votre sécurité absolue.</p>
    `,
    highlights: [
      {
        icon: "🦕",
        label: "Observation T-Rex en liberté",
        desc: "Depuis un observatoire sécurisé",
      },
      {
        icon: "🌿",
        label: "Forêt primaire immersive",
        desc: "Végétation unique, disparue depuis",
      },
      {
        icon: "🦅",
        label: "Vol en compagnie des Ptérosaures",
        desc: "Survol de la jungle préhistorique",
      },
      {
        icon: "🐊",
        label: "Rivière des Mosasaures",
        desc: "Les géants des mers crétacées",
      },
    ],
  },
  florence: {
    title: "Florence 1504",
    tag: "Renaissance",
    price: "5 600 €",
    duration: "6 jours",
    difficulty: "Modéré",
    group: "2–10 personnes",
    emoji: "🎨",
    description: `
      <p>Florence, 1504. La Renaissance italienne est à son zénith. Michel-Ange vient d'achever son David, chef-d'œuvre absolu que vous pourrez admirer quelques jours après son inauguration. Léonard de Vinci, de retour à Milan, travaille sur des projets révolutionnaires.</p>
      <p>Vous vous promènerez dans les rues de la cité des Médicis, entre palais somptueux et ateliers d'artistes. Lorenzo le Magnifique est décédé depuis dix ans, mais son héritage culturel rayonne encore sur toute la ville.</p>
      <p>Visitez les boutiques des orfèvres sur le Ponte Vecchio, assistez à des joutes dans les piazzas, et dînez sous les voûtes de la cour des Médicis. Un plongeon dans le berceau de la civilisation moderne.</p>
    `,
    highlights: [
      {
        icon: "🎭",
        label: "David de Michel-Ange",
        desc: "Juste après son inauguration",
      },
      {
        icon: "🏛️",
        label: "Palais des Médicis",
        desc: "Soirée dans la cour des arts",
      },
      {
        icon: "🎨",
        label: "Ateliers de la Renaissance",
        desc: "Rencontres avec les maîtres",
      },
      {
        icon: "🌉",
        label: "Ponte Vecchio",
        desc: "Promenade parmi les orfèvres",
      },
    ],
  },
};

// ===== MODAL =====
function openModal(dest) {
  const data = destData[dest];
  if (!data) return;

  const bgClass =
    dest === "paris"
      ? "paris-bg"
      : dest === "cretace"
        ? "cretace-bg"
        : "florence-bg";

  document.getElementById("modalHeader").innerHTML = `
    <div class="dest-image ${bgClass}" style="width:100%;height:100%;"></div>
    <div class="dest-overlay"></div>
    <div style="position:absolute;bottom:1rem;left:1.5rem;z-index:2;">
      <div class="dest-tag">${data.tag}</div>
      <h2 style="font-family:var(--font-display);font-size:2rem;">${data.title}</h2>
    </div>
  `;

  const highlightsHtml = data.highlights
    .map(
      (h) => `
    <div class="modal-info-item">
      <div class="modal-info-label">${h.icon} ${h.label}</div>
      <div style="color:var(--text-secondary);font-size:0.85rem;">${h.desc}</div>
    </div>
  `,
    )
    .join("");

  document.getElementById("modalBody").innerHTML = `
    ${data.description}
    <div class="modal-info-grid">${highlightsHtml}</div>
    <div class="modal-info-grid">
      <div class="modal-info-item">
        <div class="modal-info-label">Durée</div>
        <div class="modal-info-value">${data.duration}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">À partir de</div>
        <div class="modal-info-value">${data.price}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Difficulté</div>
        <div class="modal-info-value">${data.difficulty}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">Groupe</div>
        <div class="modal-info-value">${data.group}</div>
      </div>
    </div>
    <a href="#contact" onclick="closeModal()" class="btn-primary">Réserver ce voyage</a>
  `;

  document.getElementById("modalOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Pré-remplir le select du formulaire
  const sel = document.getElementById("destSelect");
  if (sel) sel.value = dest;
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ===== QUIZ =====
const quizQuestions = [
  {
    question: "Quel type d'expérience recherchez-vous ?",
    options: [
      {
        text: "🎨 Culturelle et artistique",
        score: { paris: 2, florence: 3, cretace: 0 },
      },
      {
        text: "🌿 Aventure et nature sauvage",
        score: { paris: 0, florence: 0, cretace: 3 },
      },
      {
        text: "✨ Élégance et raffinement",
        score: { paris: 3, florence: 2, cretace: 0 },
      },
      {
        text: "🔬 Découverte scientifique",
        score: { paris: 1, florence: 1, cretace: 3 },
      },
    ],
  },
  {
    question: "Quelle période vous attire le plus ?",
    options: [
      {
        text: "🏙️ XIXe siècle industriel",
        score: { paris: 3, florence: 0, cretace: 0 },
      },
      {
        text: "🦴 Origines de la vie",
        score: { paris: 0, florence: 0, cretace: 3 },
      },
      {
        text: "🏺 Renaissance classique",
        score: { paris: 0, florence: 3, cretace: 0 },
      },
      {
        text: "⚡ Indifférent, je veux l'insolite",
        score: { paris: 1, florence: 1, cretace: 2 },
      },
    ],
  },
  {
    question: "Vous préférez :",
    options: [
      {
        text: "🌆 L'effervescence urbaine",
        score: { paris: 3, florence: 2, cretace: 0 },
      },
      {
        text: "🌋 La nature primaire et sauvage",
        score: { paris: 0, florence: 0, cretace: 3 },
      },
      {
        text: "🎭 L'art et l'architecture",
        score: { paris: 1, florence: 3, cretace: 0 },
      },
      {
        text: "🍷 La gastronomie et les plaisirs",
        score: { paris: 2, florence: 2, cretace: 0 },
      },
    ],
  },
  {
    question: "Votre activité de rêve :",
    options: [
      {
        text: "🏛️ Visiter des monuments historiques",
        score: { paris: 2, florence: 3, cretace: 0 },
      },
      {
        text: "🦖 Observer des créatures géantes",
        score: { paris: 0, florence: 0, cretace: 3 },
      },
      {
        text: "🎪 Assister à des événements uniques",
        score: { paris: 3, florence: 2, cretace: 1 },
      },
      {
        text: "🖼️ Explorer des ateliers d'artistes",
        score: { paris: 1, florence: 3, cretace: 0 },
      },
    ],
  },
];

let quizScores = { paris: 0, cretace: 0, florence: 0 };
let currentQuestion = 0;

function initQuiz() {
  quizScores = { paris: 0, cretace: 0, florence: 0 };
  currentQuestion = 0;
  showQuestion(0);
  document.getElementById("quizWrapper").classList.remove("hidden");
  document.getElementById("quizResult").classList.add("hidden");
}

function showQuestion(index) {
  const q = quizQuestions[index];
  const progress = ((index + 1) / quizQuestions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent =
    `Question ${index + 1}/${quizQuestions.length}`;

  document.getElementById("quizContent").innerHTML = `
    <div class="quiz-question">
      <h3>${q.question}</h3>
      <div class="quiz-options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="quiz-option" onclick="selectOption(${i})">
            ${opt.text}
          </button>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function selectOption(optIndex) {
  const q = quizQuestions[currentQuestion];
  const scores = q.options[optIndex].score;

  Object.keys(scores).forEach((k) => {
    quizScores[k] += scores[k];
  });

  // Highlight sélection
  document.querySelectorAll(".quiz-option").forEach((btn, i) => {
    if (i === optIndex) btn.classList.add("selected");
  });

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  }, 400);
}

function showResult() {
  const winner = Object.entries(quizScores).reduce((a, b) =>
    a[1] > b[1] ? a : b,
  )[0];
  const data = destData[winner];
  const descriptions = {
    paris:
      "Votre profil de voyageur correspond parfaitement à la Belle Époque ! Vous êtes attiré par l'élégance, la culture et l'effervescence urbaine. Paris 1889 vous offrira des souvenirs inoubliables entre art, gastronomie et nuits féeriques.",
    cretace:
      "Aventurier dans l'âme, vous repoussez les limites du possible ! Le Crétacé vous donnera le frisson ultime : observer des créatures disparues depuis 65 millions d'années. Un voyage pour les courageux.",
    florence:
      "Votre sensibilité artistique et votre amour de la beauté vous destinent à Florence 1504. Vous vibrez pour l'art, l'architecture et les grandes œuvres. La Renaissance italienne sera votre paradis.",
  };

  document.getElementById("quizWrapper").classList.add("hidden");
  const result = document.getElementById("quizResult");
  result.classList.remove("hidden");
  document.getElementById("resultIcon").textContent = data.emoji;
  document.getElementById("resultTitle").textContent = data.title;
  document.getElementById("resultDesc").textContent = descriptions[winner];

  // Ajouter bouton "Voir la destination"
  const btn = result.querySelector(".btn-primary");
  btn.insertAdjacentHTML(
    "beforebegin",
    `
    <button class="btn-primary" onclick="openModal('${winner}')" style="margin-right:1rem;margin-bottom:1rem;">
      Voir la destination →
    </button>
  `,
  );
}

function resetQuiz() {
  document
    .getElementById("quizResult")
    .querySelectorAll(".btn-primary:not(:last-child)")
    .forEach((b) => b.remove());
  initQuiz();
}

initQuiz();

// ===== FORMULAIRE =====
function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById("reservationForm");
  const success = document.getElementById("formSuccess");
  form.style.opacity = "0";
  setTimeout(() => {
    form.classList.add("hidden");
    success.classList.remove("hidden");
    success.style.animation = "chatOpen 0.4s ease";
  }, 300);
}

// ===== CHATBOT =====
let chatbotOpen = false;
const chatHistory = [];

// Configuration - l'API key doit être renseignée ici ou via une variable d'environnement
// Pour les tests locaux, utiliser un backend proxy
const CHATBOT_CONFIG = {
  useDirectAPI: false, // Mettre true si vous avez une clé API Anthropic
  apiKey: "", // NE JAMAIS committer une vraie clé API ici
  systemPrompt: `Tu es Chronos, l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.

Ton rôle : conseiller les clients sur les meilleures destinations temporelles avec expertise et enthousiasme.

Ton ton :
- Professionnel mais chaleureux
- Passionné d'histoire
- Toujours enthousiaste sans être trop familier
- Expertise en voyage temporel (fictif mais crédible)

Tu connais parfaitement nos 3 destinations :
- **Paris 1889 — Belle Époque** (4 200 € / 7 jours) : Tour Eiffel inaugurée, Exposition Universelle, Moulin Rouge, impressionnistes, cafés parisiens. Difficulté : Facile.
- **Crétacé Supérieur (−65M ans)** (8 900 € / 5 jours) : T-Rex, Ptérosaures, végétation primitive, mers à Mosasaures. Voyage expert, observatoires sécurisés. Difficulté : Expert.
- **Florence 1504 — Renaissance** (5 600 € / 6 jours) : David de Michel-Ange, Léonard de Vinci, Médicis, Ponte Vecchio, ateliers d'artistes. Difficulté : Modéré.

Tu peux aussi répondre à des questions sur :
- Les conditions de voyage (tenues d'époque fournies, guide temporel inclus)
- La sécurité (protocoles stricts, bouclier temporel)
- Les réservations (délai minimum 2 semaines avant départ)
- Les assurances temporelles (couverture totale incluse)

Réponds toujours en français, de manière concise (max 3-4 phrases par réponse), avec une touche de mystère et d'élégance.`,
};

// Réponses locales si pas d'API
const localResponses = {
  destination:
    "Nous proposons trois voyages extraordinaires : **Paris 1889** pour vivre la Belle Époque, **le Crétacé** pour observer les dinosaures, et **Florence 1504** pour plonger dans la Renaissance italienne. Chacune est unique !",
  paris:
    "Paris 1889, c'est l'effervescence de la Belle Époque ! La Tour Eiffel vient d'être inaugurée, l'Exposition Universelle bat son plein. À partir de **4 200 €** pour 7 jours, avec guide temporel inclus. 🗼",
  cretace:
    "Le Crétacé est notre voyage le plus audacieux : **−65 millions d'années** ! Vous observerez des T-Rex et Ptérosaures depuis nos observatoires sécurisés. À partir de **8 900 €** pour 5 jours. Réservé aux aventuriers ! 🦕",
  florence:
    "Florence 1504 au cœur de la Renaissance ! Michel-Ange vient d'achever son David, Léonard de Vinci arpente les rues. **5 600 €** pour 6 jours d'immersion culturelle absolue. 🎨",
  prix: "Nos tarifs varient selon la destination : **Paris 1889** à 4 200 €, **Florence 1504** à 5 600 €, et **Crétacé** à 8 900 €. Tous incluent le guide temporel, les tenues d'époque et l'assurance temporelle.",
  fonctionne:
    "Notre technologie de déplacement temporel est brevetée et parfaitement sûre ! Vous rejoignez notre capsule de départ à Paris, notre équipe vous équipe d'un bouclier temporel, et en 8 secondes... vous êtes dans une autre époque ! 🌀",
  securite:
    "La sécurité est notre priorité absolue. Chaque voyageur bénéficie d'un bouclier temporel individuel, d'un guide certifié 24h/24, et d'une assurance temporelle complète. Zéro incident en 2 ans d'exploitation.",
  reservation:
    "Pour réserver, utilisez notre formulaire en bas de page ou appelez notre hotline temporelle au **+33 1 89 00 00 89**. Prévoir un délai minimum de **2 semaines** avant la date de départ souhaitée.",
  default:
    "Excellente question ! Je suis là pour vous aider à choisir votre voyage dans le temps. N'hésitez pas à me demander des infos sur nos destinations, tarifs, ou le fonctionnement de nos voyages. ⧗",
};

function getLocalResponse(message) {
  const msg = message.toLowerCase();
  if (
    msg.includes("destination") ||
    msg.includes("proposez") ||
    msg.includes("choix")
  )
    return localResponses["destination"];
  if (
    msg.includes("paris") ||
    msg.includes("belle epoque") ||
    msg.includes("eiffel")
  )
    return localResponses["paris"];
  if (
    msg.includes("cretace") ||
    msg.includes("dinosaure") ||
    msg.includes("prehistoric") ||
    msg.includes("million")
  )
    return localResponses["cretace"];
  if (
    msg.includes("florence") ||
    msg.includes("renaissance") ||
    msg.includes("michel") ||
    msg.includes("leonard")
  )
    return localResponses["florence"];
  if (
    msg.includes("prix") ||
    msg.includes("tarif") ||
    msg.includes("coût") ||
    msg.includes("combien")
  )
    return localResponses["prix"];
  if (
    msg.includes("fonctionne") ||
    msg.includes("comment") ||
    msg.includes("voyage temporel") ||
    msg.includes("marche")
  )
    return localResponses["fonctionne"];
  if (
    msg.includes("securit") ||
    msg.includes("danger") ||
    msg.includes("risque") ||
    msg.includes("safe")
  )
    return localResponses["securite"];
  if (
    msg.includes("reserver") ||
    msg.includes("reservation") ||
    msg.includes("book") ||
    msg.includes("delai")
  )
    return localResponses["reservation"];
  return localResponses["default"];
}

async function callAnthropicAPI(userMessage) {
  if (!CHATBOT_CONFIG.useDirectAPI || !CHATBOT_CONFIG.apiKey) {
    return getLocalResponse(userMessage);
  }

  try {
    const messages = chatHistory.map((m) => ({
      role: m.role,
      content: m.content,
    }));
    messages.push({ role: "user", content: userMessage });

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CHATBOT_CONFIG.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        system: CHATBOT_CONFIG.systemPrompt,
        messages: messages,
      }),
    });

    const data = await response.json();
    return data.content[0].text;
  } catch (err) {
    console.error("API Error:", err);
    return getLocalResponse(userMessage);
  }
}

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  const window = document.getElementById("chatbotWindow");
  const iconOpen = document.querySelector(".chatbot-icon-open");
  const iconClose = document.querySelector(".chatbot-icon-close");
  const badge = document.getElementById("chatbotBadge");

  if (chatbotOpen) {
    window.classList.remove("hidden");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
    badge.classList.add("hidden");
  } else {
    window.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  }
}

function addMessage(text, role) {
  const messages = document.getElementById("chatbotMessages");
  const time = new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const el = document.createElement("div");
  el.className = `message ${role}`;
  el.innerHTML = `
    <div class="message-bubble">${text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>")}</div>
    <div class="message-time">${time}</div>
  `;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
  chatHistory.push({ role, content: text });
}

function showTyping() {
  document.getElementById("chatbotTyping").classList.remove("hidden");
  document.getElementById("chatbotSuggestions").classList.add("hidden");
  document.getElementById("chatbotMessages").scrollTop =
    document.getElementById("chatbotMessages").scrollHeight;
}

function hideTyping() {
  document.getElementById("chatbotTyping").classList.add("hidden");
}

async function sendMessage() {
  const input = document.getElementById("chatbotInput");
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  addMessage(text, "user");
  showTyping();

  const delay = 800 + Math.random() * 600;
  setTimeout(async () => {
    const response = await callAnthropicAPI(text);
    hideTyping();
    addMessage(response, "bot");

    // Suggestions contextuelles
    const suggestions = document.getElementById("chatbotSuggestions");
    suggestions.classList.remove("hidden");
  }, delay);
}

async function sendSuggestion(text) {
  document.getElementById("chatbotSuggestions").classList.add("hidden");
  addMessage(text, "user");
  showTyping();

  setTimeout(
    async () => {
      const response = await callAnthropicAPI(text);
      hideTyping();
      addMessage(response, "bot");
      document.getElementById("chatbotSuggestions").classList.remove("hidden");
    },
    1000 + Math.random() * 500,
  );
}

function handleChatKeypress(e) {
  if (e.key === "Enter") sendMessage();
}

// ===== HAMBURGER MOBILE =====
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  navLinks.style.flexDirection = "column";
  navLinks.style.position = "absolute";
  navLinks.style.top = "100%";
  navLinks.style.left = "0";
  navLinks.style.right = "0";
  navLinks.style.background = "rgba(6,8,16,0.98)";
  navLinks.style.padding = "1rem 2rem";
  navLinks.style.borderBottom = "1px solid rgba(201,168,76,0.2)";
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Init
console.log(
  "%c⧗ TimeTravel Agency — Bienvenue dans le voyageur du temps !",
  "color: #C9A84C; font-size: 16px; font-weight: bold;",
);
