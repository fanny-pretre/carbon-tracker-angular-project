# 🌱 CO₂cou - Carbon Tracker (Angular)

Bienvenue sur **CO₂cou**, une application Angular permettant de **suivre et sensibiliser à son empreinte carbone** à travers des simulations simples et pédagogiques.

> ⚠️ **Projet fictif** réalisé dans le cadre d’un apprentissage Angular.  
> Toutes les données sont simulées et utilisées à des fins éducatives.

---

## 🚀 Fonctionnalités

### 🏠 Accueil (Dashboard)
- Affichage d’un **score carbone hebdomadaire**
- Liste d’**actions écologiques**
- Résumé par catégories :
  - 🚗 Transport
  - 🍽️ Alimentation
  - ⚡ Énergie
- Utilisation de **RxJS (Observable)** pour un affichage réactif

---

### 📊 Calcul d’empreinte carbone
- Simulation de trajets
- Calcul :
  - Distance totale
  - Consommation moyenne
  - Émissions de CO₂
- Génération aléatoire de voyages
- Affichage sous forme de cartes + tableau

---

### 💡 Conseils écologiques
- Liste d’articles
- Filtrage dynamique (recherche)
- Mise en avant des articles “featured”

---

### 📩 Formulaire de contact
- Formulaire réactif avec validation Angular
- Vérification :
  - Nom
  - Email
  - Téléphone
  - Message
- Feedback utilisateur en temps réel

---

### 📄 Mentions légales
- Page alimentée via **Observable (RxJS)**
- Données fictives (projet pédagogique)

---

## 🧠 Concepts Angular utilisés

- ✅ Components standalone  
- ✅ Data binding (`{{ }}`, `[ ]`, `( )`, `[(ngModel)]`)  
- ✅ Reactive Forms  
- ✅ Services & injection de dépendances  
- ✅ Routing  
- ✅ Directives (`*ngIf`, `*ngFor`, `ngClass`)  
- ✅ RxJS & Observables (`async pipe`)  
- ✅ Architecture modulaire  

---

## 🎨 UI / UX

- Design moderne (blanc / vert / gris 🌿)  
- Cartes avec ombres et animations  
- Responsive (mobile friendly)  
- Feedback utilisateur (erreurs, états)  

---

## 🛠️ Installation

```bash
# Cloner le projet
git clone https://github.com/ton-username/co2cou.git

# Aller dans le dossier
cd co2cou

# Installer les dépendances
npm install

# Lancer le projet
ng serve