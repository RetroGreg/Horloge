# Horloge Analogique et Numérique

![Horloge Romaine](https://github.com/user-attachments/assets/3b1fb2c6-e4a2-4398-a9e5-88f520fac9a6)

## Description

Ce projet a pour objectif de créer une **horloge interactive** combinant une représentation **analogique** et **numérique**. L'horloge offre plusieurs modes visuels, comme un affichage classique en chiffres romains, moderne, ou digital, tout en étudiant les différentes fonctions JavaScript nécessaires pour animer et manipuler le DOM.

## Concept innovant

Cette horloge présente une approche unique où **les chiffres de l'heure défilent directement sur les aiguilles**, créant un effet visuel distinctif et moderne.

---

## Démo

🔗 [Voir la démo en ligne](https://retrogreg.github.io/Horloge/)

---

## Fonctionnalités

- **Horloge analogique :**
  - Aiguilles animées pour les heures, les minutes et les secondes.
  - Chiffres animés défilant le long des aiguilles.
  - Possibilité de changer le style des marques d'heures (chiffres romains, modernes, etc.).

- **Horloge numérique :**
  - Affichage dynamique de l'heure (HH:MM:SS).
  - Mise à jour en temps réel.

- **Design responsive :**
  - Adaptation automatique à toutes les tailles d'écran.
  - Interface optimisée pour mobile et desktop.

- **Modes personnalisés :**
  - **Digital** : Affichage uniquement numérique avec effets néon.
  - **Romain** : Horloge analogique avec chiffres romains lumineux.
  - **Moderne** : Style minimaliste et contemporain avec dégradés dorés.

---

## Installation et utilisation

1. Clonez le repository :

   ```bash
   git clone https://github.com/RetroGreg/Horloge.git
   ```

2. Ouvrez `index.html` dans votre navigateur
3. Sélectionnez un thème avec les boutons en haut de la page

---

## Objectifs pédagogiques

Ce projet vise à :

- Comprendre et manipuler les **fonctions de temps** en JavaScript, comme `Date()`.
- Étudier et pratiquer la **manipulation du DOM** (ajout dynamique d'éléments).
- Utiliser des **transformations CSS** pour animer des objets (ex. `rotate`, `translate`).
- Découvrir comment **structurer un projet web** en séparant le HTML, le CSS et le JavaScript.
- Appliquer des principes modernes de **design et interactivité**.
- Implémenter un design **responsive** qui s'adapte à tous les écrans.

---

## Technologies utilisées

- **HTML5** : Structure de la page.
- **CSS3** : Mise en forme et animations (avec media queries pour le responsive).
- **JavaScript** : Logique de l'horloge et manipulations dynamiques.

---

## Fonctionnement

### Structure du projet

1. **`index.html`** : Contient le squelette de la page (horloge, boutons de sélection, etc.).
2. **`style.css`** : Définit l'apparence visuelle de l'horloge, des aiguilles et des différents modes.
3. **`script.js`** : Gère l'animation des aiguilles, l'affichage numérique, et les changements de thème.

### Points techniques notables

- **Rotation des aiguilles** : Calcul précis des angles selon l'heure actuelle
- **Positionnement dynamique** : Les chiffres sont positionnés le long des aiguilles via JavaScript
- **Animations CSS** : Effets visuels fluides pour chaque thème
- **Adaptation responsive** : Utilisation de `min()` CSS et media queries

---

## Aperçu des thèmes

### Thème Digital

- Effet néon cyan sur les chiffres
- Marques rouges animées
- Ombre lumineuse pulsante

### Thème Romain

- Chiffres romains dorés lumineux
- Ambiance classique et élégante
- Effets de lueur orange

### Thème Moderne

- Design épuré et minimaliste
- Dégradés dorés animés
- Transitions douces

---

## Auteur

**Grégoire** - [GitHub](https://github.com/RetroGreg)
