# TP JavaScript Avancé — Solution fournie

## Structure
- index.html — page contenant des boutons pour lancer chaque exercice et afficher la sortie.
- script.js — toutes les solutions (ES6, classes, tableaux, asynchronisme, fetch).
- README.md — ce fichier.

## Commandes Git conseillées (1 commit / partie)
1) Après avoir préparé la partie 1 :
```
git init
git add index.html script.js README.md
git commit -m "Partie 1 — exercices ES6+"
```
2) Après la partie 2 :
```
git add .
git commit -m "Partie 2 — objets / classes / tableaux"
```
3) Après la partie 3 (mini-projet) :
```
git add .
git commit -m "Partie 3 — asynchronisme + mini-projet"
```

## Capture d'écran du mini-projet
Ouvrez `index.html` dans votre navigateur (double-cliquez ou `live-server`) puis cliquez sur *Charger les 5 premiers posts*.
Prenez une capture d'écran de la page (ou de la zone 'mini-projet') et joignez-la au repo.

## Notes pédagogiques
- `const` empêche la réaffectation — tenter `PI = 3.14` provoque une `TypeError`.
- `let` a portée de bloc — contrairement à `var`.
- `async/await` simplifie la lecture des promesses.
- `fetch` renvoie un `Response` qu'on convertit en JSON avec `.json()`.
