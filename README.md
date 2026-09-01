# Portfolio BTS SIO — SLAM

Site statique multi-page (HTML/CSS/JS pur, aucune dépendance). Le design est
terminé : il ne reste qu'à remplir le contenu.

## 1. Structure du projet

```
portfolio/
├── index.html              ← page d'accueil = "Mon profil" (à propos + compétences + CV)
├── realisations.html       ← page "Réalisations professionnelles"
├── veille.html             ← page "Veille technologique"
├── rectorat.html           ← page "Rectorat"
├── css/style.css             ← design (ne pas toucher)
├── js/
│   ├── content.js              ← TON CONTENU : c'est le seul fichier à éditer
│   ├── nav.js                    ← génère la navigation + le footer (ne pas toucher)
│   └── script.js                  ← injecte content.js dans chaque page (ne pas toucher)
└── assets/                         ← dépose ici ta photo, ton CV en PDF, tes captures, tes PDF officiels
```

La navigation en haut de chaque page (Mon profil / Réalisations
professionnelles / Veille technologique / Rectorat) est générée
automatiquement par `js/nav.js` — elle est donc identique et à jour sur
toutes les pages sans que tu aies à la dupliquer. Si tu veux renommer un
lien ou ajouter une page, modifie uniquement le tableau `NAV_LINKS` en haut
de `js/nav.js`.

## 2. Remplir ton contenu

Ouvre `js/content.js` avec n'importe quel éditeur de texte (VS Code conseillé)
et remplace les valeurs entre guillemets `" "` :

1. **profile** → prénom, nom, accroche, email, lien LinkedIn/GitHub, présentation (page *Mon profil*)
2. **skillCategories** → ton tableau de compétences, groupé par catégorie, avec un niveau de 1 à 5 (page *Mon profil*)
3. **projects** → tes projets (BTS, stage, perso), stack technique, liens (page *Réalisations professionnelles*)
4. **veille** → chaque entrée de ta veille technologique (date au format `"AAAA-MM"`, source, résumé) (page *Veille technologique*)
5. **rectorat** → informations administratives (académie, session, établissement...) et documents
   officiels à télécharger (convention de stage, attestations...) (page *Rectorat*).
   ⚠️ Demande à ton professeur la liste exacte des documents/informations attendus par ton
   académie pour la validation du portfolio numérique (E4), la maquette fournie est un point
   de départ générique.

Tu peux ajouter ou supprimer des lignes librement, tant que tu respectes
la structure `{ ... }` et les virgules entre chaque élément.

### Ajouter ta photo et ton CV
- Dépose ta photo dans `assets/` (ex: `assets/photo.jpg`) puis renseigne
  `photo: "assets/photo.jpg"` dans `content.js`.
- Dépose ton CV en PDF dans `assets/cv.pdf` (le lien est déjà configuré).

### Ajouter des captures d'écran de projets
- Dépose l'image dans `assets/` puis renseigne le champ `image` du projet
  concerné, ex: `image: "assets/projet1.png"`.

## 3. Voir le site en local

Aucune installation nécessaire. Deux options :

- **Le plus simple** : double-clique sur `index.html`, il s'ouvre dans ton navigateur.
- **Recommandé** (évite certains soucis de chargement de fichiers) : dans un
  terminal, place-toi dans le dossier `portfolio/` puis lance :
  ```bash
  python3 -m http.server 8000
  ```
  puis ouvre `http://localhost:8000` dans ton navigateur.

## 4. Mettre le site en ligne gratuitement (GitHub Pages)

1. Crée un dépôt GitHub (ex: `portfolio`) et pousse tout le contenu de ce dossier.
2. Sur GitHub : **Settings → Pages → Source : branche `main`, dossier `/root`**.
3. Ton site est en ligne en quelques minutes à l'adresse :
   `https://ton-pseudo.github.io/portfolio/`

C'est un bon exemple concret de déploiement à mentionner en épreuve BTS SIO.

## 5. Idées d'évolution (facultatif, une fois le contenu à jour)

- Ajouter un formulaire de contact fonctionnel (ex: via Formspree, sans backend)
- Ajouter une page dédiée par projet plutôt qu'une simple carte
- Ajouter un mode sombre (`prefers-color-scheme`)

Mais commence toujours par remplir `content.js` avec du vrai contenu : c'est
ce qui sera lu en premier, bien avant les détails de design.
