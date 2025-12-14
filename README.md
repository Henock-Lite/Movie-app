# 🎬 React Movies App

Application React permettant de rechercher des films via l’API **The Movie Database (TMDB)**, de consulter leurs informations et de gérer une liste de coups de cœur.

---

## 🚀 Fonctionnalités

### 1️⃣ Navigation

- **Home** : recherche et affichage des films
- **Coups de cœur** : liste des films favoris sauvegardés

### 2️⃣ Récupération des données

- Fetch des données depuis l’API TMDB
- Stockage des résultats dans le state React

### 3️⃣ Affichage des films

Chaque film est affiché sous forme de **carte** contenant :

- 🎞️ Image du film
  `https://image.tmdb.org/t/p/original/{posterId}`
- 🎬 Titre
- 📅 Date de sortie
- ⭐ Note du film
- 🏷️ Genres
- 📝 Synopsis
- ❤️ Bouton **Ajouter aux coups de cœur**

### 4️⃣ Recherche

- Champ de recherche dynamique
- Requête envoyée à l’API TMDB selon la saisie utilisateur

### 5️⃣ Bonus

- 🔼 / 🔽 Boutons **Top** et **Flop** (tri par note)
- 💾 Sauvegarde des coups de cœur dans le **localStorage**
- 📄 Page dédiée aux coups de cœur

### 6️⃣ UI / Styling

- Travail du style pour pratiquer **React + CSS**
- Interface responsive

---

## 🔐 Configuration de l’API (variables d’environnement)

Même si l’API TMDB est gratuite, la clé API est stockée dans un fichier `.env` pour respecter les bonnes pratiques.

### 1️⃣ Créer un fichier `.env`

À la racine du projet :

```env
VITE_TMDB_API_KEY=your_api_key_here
```

⚠️ Avec **Vite**, toutes les variables doivent commencer par `VITE_`.

### 2️⃣ Utilisation dans le code

```js
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=code&language=fr-FR`;
```

### 3️⃣ Sécurité

- Le fichier `.env` est ajouté au `.gitignore`
- La clé API n’est **pas versionnée** sur GitHub

### 4️⃣ Fichier `.env.example`

```env
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 🔗 Endpoints TMDB utilisés

```txt
/search/movie
```

Exemple de requête :

```txt
https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&language=fr-FR
```

---

## 🖼️ Support de démarrage

Template de base (image par défaut) :
👉 ['./src/assets/movie-screem.png']

## 🛠️ Technologies utilisées

- ⚛️ React
- 🧠 Hooks (useState, useEffect)
- 🌐 Fetch API
- 💾 localStorage
- 🎨 SCSS

---

## 📦 Installation

```bash
git clone https://github.com/Henock-Lite/Movie-app
cd Movies-app
npm install
npm run dev
```

---

## 🎯 Objectif pédagogique

- Comprendre les appels API
- Manipuler les states et les hooks React
- Structurer une application front-end
- Gérer une logique de favoris
- Améliorer le sens du design UI

---

## ✍️ Auteur

Projet réalisé par **@Henock-Lite** dans un objectif d’apprentissage de React.

---

💡 Améliorations possibles : pagination, loader, gestion des erreurs, dark mode…
