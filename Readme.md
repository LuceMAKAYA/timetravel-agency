# ⧗ TimeTravel Agency — Webapp Interactive

> Projet pédagogique M1/M2 Digital & IA — Une agence de voyage temporel fictive avec IA intégrée.

---

## 🌐 Demo

[🚀 Voir la webapp en ligne](#) ← _Remplacer avec l'URL Vercel/Netlify après déploiement_

---

## 📸 Aperçu

Une webapp luxueuse et immersive pour une agence de voyage temporel proposant :

- **Paris 1889** — La Belle Époque
- **Crétacé −65M ans** — L'ère des dinosaures
- **Florence 1504** — La Renaissance italienne

---

## 🛠️ Stack Technique

| Technologie                                         | Usage                 |
| --------------------------------------------------- | --------------------- |
| HTML5 / CSS3                                        | Structure & styles    |
| JavaScript ES6+                                     | Interactivité         |
| CSS Custom Properties                               | Thème & design system |
| Intersection Observer API                           | Animations au scroll  |
| Fetch API                                           | Intégration chatbot   |
| Google Fonts (Cinzel, Cormorant Garamond, Rajdhani) | Typographie           |

_Aucun framework JavaScript requis — Vanilla JS pur pour légèreté maximale._

---

## ✨ Features Implémentées

### Phase 1 — UI/UX

- [x] **Hero section** avec particules animées, titre cinématique et ticker défilant
- [x] **Header sticky** avec effet glassmorphism au scroll
- [x] **Curseur personnalisé** (desktop) avec effet de suivi fluide
- [x] **Animations reveal** au scroll (Intersection Observer)
- [x] **Compteurs animés** pour les statistiques
- [x] **Design responsive** mobile-first

### Phase 2 — Destinations

- [x] **Galerie de 3 destinations** avec cards interactives (hover, zoom)
- [x] **Modales détaillées** par destination (description, highlights, tarifs)
- [x] **Effets visuels** CSS pour chaque époque (Paris, Crétacé, Florence)

### Phase 3 — IA & Interactivité

- [x] **Chatbot "Chronos"** avec personnalité définie
  - Réponses locales intelligentes (matching par mots-clés)
  - Support API Anthropic (claude-sonnet-4-20250514) configurable
  - Suggestions rapides contextuelles
  - Indicateur de frappe animé
- [x] **Quiz de recommandation** (4 questions, scoring par destination)
  - Algorithme de scoring multicritères
  - Résultat personnalisé avec description
  - Option "voir la destination" directe

### Phase 4 — Conversion

- [x] **Formulaire de réservation** avec validation et feedback visuel
- [x] **Section contact** avec coordonnées fictives
- [x] **Footer complet** avec liens de navigation

---

## 🤖 IA Utilisées

| Outil                                       | Usage                               |
| ------------------------------------------- | ----------------------------------- |
| **Claude Sonnet 4.5** (Anthropic)           | Génération du code complet          |
| **Claude API** (`claude-sonnet-4-20250514`) | Chatbot Chronos (configurable)      |
| _Midjourney / DALL-E_                       | Visuels destinations _(à intégrer)_ |

---

## 🚀 Installation & Démarrage

### Démarrage rapide (sans backend)

```bash
# Clone le repo
git clone https://github.com/VOTRE_USERNAME/timetravel-agency.git
cd timetravel-agency

# Ouvrir directement dans le navigateur
open index.html
# ou
python3 -m http.server 3000
```

Puis naviguer vers `http://localhost:3000`

### Activer le Chatbot IA (optionnel)

1. Obtenez une clé API Anthropic sur [console.anthropic.com](https://console.anthropic.com)
2. Dans `script.js`, modifiez :

```javascript
const CHATBOT_CONFIG = {
  useDirectAPI: true, // ← Passer à true
  apiKey: "sk-ant-...", // ← Votre clé API
  // ...
};
```

⚠️ **Ne jamais committer une clé API dans un repo public !**
Pour la production, utilisez un backend proxy ou des variables d'environnement.

---

## 📁 Structure du Projet

```
timetravel-agency/
├── index.html        # Page principale (HTML sémantique)
├── style.css         # Styles (CSS custom properties, animations)
├── script.js         # Logique JS (chatbot, quiz, animations)
└── README.md         # Documentation
```

---

## 🎨 Design System

| Variable         | Valeur             | Usage                |
| ---------------- | ------------------ | -------------------- |
| `--gold`         | `#C9A84C`          | Accent principal     |
| `--gold-light`   | `#E8C97A`          | Dégradés clairs      |
| `--dark`         | `#060810`          | Background principal |
| `--font-display` | Cinzel             | Titres               |
| `--font-body`    | Cormorant Garamond | Corps de texte       |
| `--font-ui`      | Rajdhani           | Labels, boutons      |

---

## 🚢 Déploiement

### Vercel (recommandé)

```bash
npm i -g vercel
vercel
```

### Netlify

Glisser-déposer le dossier sur [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages

Aller dans _Settings → Pages → Deploy from branch → main_

---

## 👥 Membres du Groupe

- Prénom NOM 1
- Prénom NOM 2
- Prénom NOM 3
- Prénom NOM 4

---

## 📄 Licence

Projet pédagogique — M1/M2 Digital & IA 2024/2025

Assets et code générés à des fins éducatives.

---

_⧗ TimeTravel Agency — Voyagez à travers les Âges_
