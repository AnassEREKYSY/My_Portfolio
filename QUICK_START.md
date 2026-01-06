# Quick Start Guide

## Installation Rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm start

# L'application sera accessible sur http://localhost:4200
```

## Build pour Production

```bash
# Build optimisé
npm run build

# Les fichiers seront dans dist/portfolio/
```

## Structure des Composants

Tous les composants sont **standalone** et utilisent le lazy loading pour optimiser les performances.

### Pages Principales

- **Home** (`/`) - Page d'accueil avec hero section
- **About** (`/about`) - À propos
- **Experience** (`/experience`) - Expérience professionnelle
- **Projects** (`/projects`) - Portfolio de projets
- **Skills** (`/skills`) - Compétences techniques
- **Contact** (`/contact`) - Informations de contact

### Composants Partagés

- **Header** - Navigation principale avec menu responsive
- **Footer** - Pied de page avec liens sociaux

## Personnalisation

### Modifier les Informations de Contact

Éditer `src/app/components/contact/contact.component.ts`

### Ajouter/Modifier un Projet

Éditer le tableau `projects` dans `src/app/components/projects/projects.component.ts`

### Modifier l'Expérience

Éditer le tableau `experiences` dans `src/app/components/experience/experience.component.ts`

### Modifier les Compétences

Éditer `skillCategories` et `methodologies` dans `src/app/components/skills/skills.component.ts`

## SEO

- Meta tags dans `src/index.html`
- Sitemap dans `public/sitemap.xml`
- Robots.txt dans `public/robots.txt`
- Structured Data (JSON-LD) dans `src/index.html`

## Accessibilité

- Navigation au clavier
- ARIA labels
- Skip link vers le contenu principal
- Contraste des couleurs conforme WCAG
- Focus visible sur tous les éléments interactifs

## Performance

- Lazy loading des routes
- Optimisation des images (à ajouter si nécessaire)
- Compression gzip (configurée dans Nginx)
- Cache des assets statiques

## Déploiement

Voir `README.md` pour les instructions complètes de déploiement sur OVH avec Nginx.




