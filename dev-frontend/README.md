
---

### 📁 `dev-frontend/README.md`

```markdown
# 🎨 Frontend — Interface utilisateur

Ce dossier contient le code source de la partie frontend de l’application.

## 📄 Contenu

- `index.html` — Page HTML de base.
- `README.md` — Documentation du frontend.

## 💻 Utilisation

Ouvre simplement `index.html` dans un navigateur pour tester l’interface actuelle.

## 🔜 À venir

- Ajout de fichiers CSS & JS.
- Connexion avec l'API Flask.
- Développement de composants interactifs.


# 📘 Consignes de collaboration – Projet Flask + Expo Frontend

## 📂 Structure du projet

Le projet est divisé en deux parties principales :


Chaque dossier est associé à une branche dédiée :
- `dev-backend` → branche : `dev-backend`
- `dev-frontend` → branche : `dev-frontend`

---

## 👥 Répartition des tâches

### 🔧 Backend (`dev-backend/`)

Deux collaborateurs travaillent sur le backend :

1. **Développeur A**  
   - Responsable de :  
     - `models.py`  
     - `app.py`  
   - Missions :  
     - Création des modèles SQLAlchemy (ex: User)
     - Initialisation de l’application Flask

2. **Développeur B**  
   - Responsable de :  
     - `routes.py`  
     - `config.py`  
   - Missions :  
     - Mise en place des routes Flask
     - Configuration des variables d’environnement, base de données, etc.

### 🧪 Collaboration backend
- Chaque feature doit être développée dans une **branche feature** depuis `dev-backend`
- Une **Pull Request** (PR) est soumise pour chaque fonctionnalité
- Les deux développeurs relisent les PRs ensemble, testent et fusionnent

---

### 🎨 Frontend (`dev-frontend/`)

Deux autres collaborateurs travaillent sur le frontend :

1. **Développeur C**  
   - Initie le projet avec :
     ```bash
     npx create-expo-app@latest
     ```
   - S’assure d’être sur la branche `dev-frontend`

2. **Développeur D**  
   - Partage le travail d’interface, navigation et intégration

### 🧪 Collaboration frontend
- Création de composants dans des branches `feature/...`
- Test collaboratif avec Expo Go
- PR obligatoire pour tout changement majeur

---

## ✅ Bonnes pratiques Git

- Toujours se positionner sur la bonne branche avant de commencer :
  ```bash
  git checkout dev-backend   # ou dev-frontend selon le cas

