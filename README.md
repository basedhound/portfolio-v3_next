<div align="center">
      <a href="https://devfrank.vercel.app" target="_blank"><img src="public/assets/preview.png" alt="Project Banner">   </a>
<h3>Portfolio v3</h3>
</div>

## <br/> 📋 Table of Contents

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)
- 🎨 [Styling](#styling)


## <br/> <a name="introduction">✨ Introduction</a>

**[EN]** This portfolio is a showcase of my skills, built with React and powered by Next.js. I've leveraged TypeScript to ensure robust code quality and maintainability. A styling system crafted with Sass brings a polished visual identity to life. And, with Framer Motion and Anime.js, I've added a touch of dynamism with smooth animations and transitions, creating an engaging user experience.

**[FR]** Ce portfolio est une vitrine de mes compétences, conçu avec React et propulsé par Next.js. J'ai mis à profit TypeScript pour assurer une qualité de code robuste et maintenable. Un système de styling conçu avec Sass donne vie à une identité visuelle soignée. Et, avec Framer Motion et Anime.js, j'ai ajouté une touche de dynamisme avec des animations et des transitions fluides, créant une expérience utilisateur engageante.

## <br/> <a name="tech-stack">⚙️ Tech Stack</a>

- [**React**](https://react.dev/reference/react) is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components that manage their own state, leading to more efficient and predictable code. It is widely used for developing single-page applications (SPAs) due to its virtual DOM that improves performance and ease of maintenance.

- [**Next.js**](https://nextjs.org/docs) is a React framework for building server-side rendered or statically exported applications. Next.js extends the functionality of React by handling server-side rendering, automatic code splitting, and static site generation, improving performance, SEO, and user experience.

- [**TypeScript**](https://www.typescriptlang.org/docs/) is a statically typed superset of JavaScript, offering better code quality, scalability, and maintainability. TypeScript enables developers to catch errors early, provides better code completion, and helps ensure consistency across large projects.

- [**Sass**](https://sass-lang.com/guide/) is a CSS preprocessor, providing advanced features like variables, nesting, and mixins for more efficient and maintainable styling. Sass allows developers to write more complex and reusable CSS, reducing the amount of duplicate code and simplifying the design process.

- [**Framer Motion**](https://www.framer.com/motion/) is a React library for creating animations and transitions. Framer Motion simplifies the process of adding engaging interactions to projects by offering a declarative way to define animations, making it easier to create complex animations and transitions with minimal effort.

- [**Anime.js**](https://animejs.com/documentation/) is a versatile JavaScript animation library, offering a wide range of features including keyframes, timelines, and easing functions to create complex animations. Anime.js provides a simple and powerful API for creating dynamic, visually appealing animations, making it a popular choice for developers and designers alike.

- [**i18n**](https://www.i18next.com/) is a robust internationalization framework for JavaScript, enabling seamless localization of applications by managing translations, language detection, and formatting. With its flexible API, i18n supports dynamic content translation, making it ideal for applications that need to cater to multiple languages.

- [**next-intl**](https://next-intl-docs.vercel.app/docs/) is a powerful localization library for Next.js, designed to handle translations and internationalization with ease. It offers server-side and client-side rendering of localized content, language detection, and flexible formatting options, allowing developers to build multilingual applications with minimal setup and effort.

## <br/> <a name="features">📝 Features</a>

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

👉 **Fully Functional Search**: Allows users to find my projects easily using various search criteria.

👉 **Bilingual Support with i18n**: Allows seamless switching between English and French, offering a fully localized experience.

## <br/> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

At the root of your project, you'll see a `package.json` file defining our dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `animejs` -> A javascript animation library, used for the grid animation inside of DotGrid.tsx
- `framer-motion` -> A react based animation library, used in a hand full of places (anywhere you see `<motion.el />` style components)
- `sass` -> All styling uses plain CSS and sass modules for this project

Now that's out of the way, you can get your project running by first installing dependencies.

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`localhost:3000`](http://localhost:3000) in your browser to view the project.


## <br/> <a name="styling">🎨 Styling</a>

Global styling (colors mainly) are defined using CSS variables in the `app/globals.css` file.

```
  --background: rgb(17, 17, 17);
  --bg-opaque: rgb(17, 17, 17, 0.25);
  --background-light: rgb(35, 35, 35);
  --background-dark: rgb(8, 8, 8);

  --text: rgb(235, 236, 243);
  --brand: rgb(10, 255, 157);

  --text-xs: 1.6rem;
  --text-sm: 1.8rem;
  --text-md: 2.2rem;
  --text-lg: 3.6rem;
  --text-xl: 5.6rem;
  --text-2xl: 9.6rem;
```

The first six variables are the colors for the app. The last six are font sizes. Play around with these a bit to start making it your own.