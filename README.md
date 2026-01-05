# Portfolio - Anass EREKYSY

Portfolio professionnel de Anass EREKYSY, Senior Full Stack Developer spécialisé en .NET, Angular et DevOps.

## Technologies

- **Angular 19** - Framework frontend
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - Langage de programmation
- **Standalone Components** - Architecture Angular moderne

## Prérequis

- Node.js 18+ et npm
- Angular CLI 19+

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Build pour la production
npm run build
```

## Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation principale
│   │   ├── footer/          # Pied de page
│   │   ├── home/            # Page d'accueil / Hero
│   │   ├── about/           # Section À propos
│   │   ├── experience/      # Expérience professionnelle
│   │   ├── projects/        # Projets réalisés
│   │   ├── skills/          # Compétences techniques
│   │   └── contact/         # Contact
│   ├── app.component.ts     # Composant racine
│   ├── app.routes.ts        # Configuration des routes
│   └── app.config.ts        # Configuration de l'application
├── index.html               # HTML principal avec meta tags SEO
└── styles.css               # Styles globaux avec Tailwind
```

## Déploiement

### Build de Production

```bash
npm run build
```

Le build sera généré dans le dossier `dist/portfolio/`.

### Déploiement sur OVH avec Nginx

1. **Build l'application** :
   ```bash
   npm run build
   ```

2. **Copier les fichiers** sur le serveur OVH :
   ```bash
   scp -r dist/portfolio/* user@your-server:/var/www/html/
   ```

3. **Configuration Nginx** (exemple) :
   ```nginx
   server {
       listen 80;
       server_name anass-erekysy.dev www.anass-erekysy.dev;
       
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache pour les assets statiques
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       # Compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

4. **SSL avec Let's Encrypt** (recommandé) :
   ```bash
   sudo certbot --nginx -d anass-erekysy.dev -d www.anass-erekysy.dev
   ```

## 🔍 SEO

Le site est optimisé pour le SEO avec :
- Meta tags complets (title, description, Open Graph, Twitter Cards)
- Sitemap.xml
- Robots.txt
- Structure HTML sémantique
- URLs propres
- Contenu indexable

## ♿ Accessibilité

Le site respecte les standards d'accessibilité :
- Navigation au clavier
- ARIA labels
- Contraste des couleurs
- Structure sémantique HTML
- Focus visible

## 📝 Notes

- Le site est statique (pas de backend)
- Toutes les données sont dans les composants
- Optimisé pour Lighthouse (Performance, SEO, Accessibility)
- Responsive design (mobile-first)

## 📧 Contact

Pour toute question ou suggestion :
- Email: ereanass@gmail.com
- LinkedIn: [Anass EREKYSY](https://www.linkedin.com/in/anass-erekysy)
- GitHub: [anass-erekysy](https://github.com/anass-erekysy)
