# simple-modal (english)

A simple modal component for React 18, designed to be easy to integrate and use in your projects.

![Modal Example](https://github.com/Nox57/simple-modal-yp/raw/main/src/img/example.png)

## 🧱 Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js (version 18 or later) and npm (version 9 or later)](https://nodejs.org/en/download/)
- You have a recent version of [React](https://legacy.reactjs.org/) and [React DOM](https://www.npmjs.com/package/react-dom) installed in your project.

## 🚀 Installation

Use the following command to install `simple-modal`:

```bash
npm install @nox57/simple-modal
```

or

```bash
yarn add @nox57/simple-modal
```

## 🛠 Usage

```jsx
import React, { useState } from 'react'
import Modal from '@nox57/simple-modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnOverlayClick={true}
                width="500px"
                closeButtonText="Fermer"
            >
                <h2>Modal Title</h2>
                <p>Modal content</p>
            </Modal>
        </>
    )
}
```

## 🧰 Props

-   `isOpen` (boolean, required): Determines whether the modal is open or closed.
-   `onClose` (function, required): Function called when the modal is closed.
-   `children` (node): Modal content.
-   `className` (string, optional): Additional CSS class for the modal overlay.
-   `closeOnOverlayClick` (boolean, optional, default=true): Determines whether clicking on the overlay closes the modal.
-   `width` (string, optional, default='500px'): Width of the modal content.
-   `closeButtonText` (string, optional, default='Close'): Text for the close button.

## 🎨 Style Customization

The modal's style can be easily customized by overriding the following CSS classes:

-   `.modal-overlay`: For the modal overlay.
-   `.modal-content`: For the modal content.
-   `.modal-close`: For the close button.

## ✒️ Author

-   [Nox57](https://github.com/Nox57/)

## 📜 Licence

    This project is licensed under the MIT License.

# simple-modal (french)

Un composant modal simple pour React 18, conçu pour être facile à intégrer et à utiliser dans vos projets.

![Exemple de Modal](https://github.com/Nox57/simple-modal-yp/raw/main/src/img/example.png)

## 🧱 Prérequis

Avant de commencer, assurez-vous d'avoir respecté les conditions suivantes :

- Vous avez installé [Node.js (version 18 ou ultérieure) et npm (version 9 ou ultérieur)](https://nodejs.org/en/download)
- Vous avez une version récente de [React](https://legacy.reactjs.org/) et [React DOM](https://www.npmjs.com/package/react-dom) installées dans votre projet.

## 🚀 Installation

Utilisez la commande suivante pour installer `simple-modal` :

```bash
npm install @nox57/simple-modal
```

ou

```bash
yarn add @nox57/simple-modal
```

## 🛠 Utilisation

```jsx
import React, { useState } from 'react'
import Modal from '@nox57/simple-modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir la modal</button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnOverlayClick={true}
                width="500px"
                closeButtonText="Fermer"
            >
                <h2>Titre de la modal</h2>
                <p>Contenu de la modal</p>
            </Modal>
        </>
    )
}
```

## 🧰 Propriétés

-   `isOpen` (booléen, requis): Détermine si la modal est ouvert ou fermé.
-   `onClose` (fonction, requis): Fonction appelée lors de la fermeture du modal.
-   `children` (noeud): Contenu de la modal.
-   `className` (chaîne, optionnel): Classe CSS supplémentaire pour l'overlay de la modal.
-   `closeOnOverlayClick` (booléen, optionnel, défaut=`true`): Détermine si un clic sur l'overlay ferme la modal.
-   `width` (chaîne, optionnel, défaut=`'500px'`): Largeur du contenu de la modal.
-   `closeButtonText` (chaîne, optionnel, défaut=`'Close'`): Texte du bouton de fermeture.

## 🎨 Personnalisation du Style

Le style de la modal peut être facilement personnalisé en surchargeant les classes CSS suivantes :

-   `.modal-overlay`: Pour l'overlay de la modal.
-   `.modal-content`: Pour le contenu de la modal.
-   `.modal-close`: Pour le bouton de fermeture.

## ✒️ Auteur

-   [Nox57](https://github.com/Nox57/)

## 📜 Licence

Ce projet est sous licence MIT.
