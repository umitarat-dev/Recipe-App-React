
<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Router-React%20Router%20v6-CA4245?logo=reactrouter&logoColor=white" />
  <img src="https://img.shields.io/badge/Styling-Styled%20Components-db7093?logo=styledcomponents&logoColor=white" />
  <img src="https://img.shields.io/badge/API-Edamam-4CAF50" />
  <img src="https://img.shields.io/badge/Auth-Private%20Routes-blue" />
  <img src="https://img.shields.io/badge/Deployment-Netlify-00C7B7?logo=netlify&logoColor=white" />
</p>

<h1 align="center">📌 Recipe App React  </h1>

<p align="center">
A dynamic Recipe Search application powered by the Edamam API. Built with React, this project features real-time data fetching based on user queries and dietary preferences. It implements secure API key management using environment variables, asynchronous state handling with Axios, and a responsive grid layout for displaying detailed recipe information, providing a seamless culinary discovery experience.
</p>


<div align="center">
  <h3>
    <a href="https://recipe-app-umitdev.netlify.app/">
      🖥️ Live Demo
    </a>
     | 
    <a href="https://github.com/umitarat-dev/Recipe-App-React.git">
      📂 Repository
    </a>
  </h3>
</div>

<p align="center">
  <img src="./img/recipe-app.gif" alt="React Recipe App" width="700"/>
</p>

## Navigation

- [✨ Overview](#-overview)
- [📖 Description](#-description)
- [🚀 Features](#-features)
- [🗂️ Project Skeleton](#️-project-skeleton)
- [🛠️ Built With](#️-built-with)
- [⚡ How To Use](#-how-to-use)
- [📌 About This Project](#-about-this-project)
- [🙏 Acknowledgements](#-acknowledgements)
- [📬 Contact Information](#-contact-information)


## ✨ Overview

<div align="center"> 

  <img src="./img/recipe.png" alt="recipe-app" width="500"/>
  
  --- 
  
  <img src="./img/detail.png" alt="recipe-app" width="500"/> 


</div>

- React Recipe App enables users to discover recipes and explore nutritional details using the Edamam API.
- The app features an authentication flow with protected pages and dynamic routing for a seamless user experience.



## 📖 Description

This project is a modern recipe search application built with React.

Users can search for recipes via the **Edamam Recipe API**, view detailed nutritional information, and navigate between protected and public pages using **React Router v6**.

The application demonstrates:
- API integration and data fetching with Axios
- Client-side routing with protected routes (PrivateRouter)
- Session-based authentication flow
- Responsive UI design using Styled Components



## 🚀 Features

- 🌐 API Integration with `https://api.edamam.com/api/recipes/v2`
- ⚛️ React Router v6 ile client-side routing
- 🔐 PrivateRouter ile korumalı sayfalar
- 🌐 Edamam Recipe Search API entegrasyonu
- 💅 Styled Components ile modern, responsive tasarım
- 💾 Session Storage ile kullanıcı oturum yönetimi
- 📱 Mobil uyumlu navbar ve hamburger menü
- 🚀 Deployed on Netlify
  


## 🗂️ Project Skeleton

```
src/
 │
 |----readme.md   
 │
 ├─ assets/
 │     ├─ coding.svg
 │     ├─ diet.svg
 │     └─ default-image.png
 │
 ├─ components/
 │   ├─ cards/
 │   │    ├─ Cards.jsx
 │   │    └─ Cards.style.jsx
 │   │
 │   ├─ globalStyles/
 │   │    ├─ Flex.jsx
 │   │    ├─ Global.styles.jsx
 │   │    └─ Theme.js
 │   │
 │   ├─ header/
 │   │    ├─ Header.jsx
 │   │    └─ Header.style.jsx
 │   │
 │   └─ nav/
 │        ├─ Navbar.jsx
 │        └─ Navbar.style.jsx
 │
 ├─ pages/
 │   ├─ about/
 │   │    ├─ About.jsx
 │   │    └─ About.style.jsx
 │   │
 │   ├─ detail/
 │   │    ├─ Detail.jsx
 │   │    └─ Detail.jsx
 │   │
 │   ├─ home/
 │   │    ├─ Home.jsx
 │   │    └─ Home.style.jsx
 │   │
 │   ├─ login/
 │   │    ├─ Login.jsx
 │   │    └─ Login.style.jsx
 │   │
 │   └─ register/
 │        └─ Registerjsx
 │
 ├─ router/
 │    ├─ AppRouter.jsx
 │    └─ PrivateRouter.jsx
 │   
 ├─ App.js
 └─ index.js
```



## 🛠️ Built With

- [⚛️ React](https://react.dev/)  
- [🧭 React Router v6](https://reactrouter.com/) 
- [💅 Styled Components](https://styled-components.com/) 
- [📦 Axios](https://axios-http.com/) 
- [🍴 Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api) 
- [GitHub Pages](https://pages.github.com/) 
- [Netlify](https://www.netlify.com/) 

---

## ⚡ How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/), and a package manager (`yarn` or `npm`) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/umitarat-dev/Recipe-App-React.git

# Navigate into the project folder
$ cd Recipe-App-React

# Install dependencies
$ yarn  
$ yarn start

# or using npm
$ npm install
$ npm start
```
- Then open http://localhost:3000 to view it in your browser.



## 📌 About This Project

This project was developed to strengthen core React skills such as routing, API integration, and component-based architecture.

It focuses on:
- Implementing protected routes using React Router
- Managing authentication state with Session Storage
- Consuming a third-party REST API
- Building reusable and styled components
- Deploying a production-ready frontend application

The project reflects real-world frontend patterns commonly used in modern React applications.



## 🙏 Acknowledgements

- [🎓Clarusway](https://clarusway.com/) – for the training resources
- [📘React Documentation](https://react.dev/)
- [🧭React Router Docs](https://reactrouter.com/en/main/start/overview)
- [💅 Styled Components](https://styled-components.com/)
- [🍴 Edamam Recipe API](https://developer.edamam.com/edamam-recipe-api) 


## 📬 Contact Information

I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.

* **LinkedIn:** [linkedin.com/in/umit-arat](https://www.linkedin.com/in/umit-arat/)
* **Email:** [umitarat8098@gmail.com](mailto:umitarat8098@gmail.com)
* **GitHub:** [github.com/umitarat-dev](https://github.com/umitarat-dev) (Current Workspace)
