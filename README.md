# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Install Tailwind CSS

B1: Install tailwindcss via npm, and create your tailwind.config.js file.

### npm install -D tailwindcss

### npx tailwindcss init

B2: Add the paths to all of your template files in your tailwind.config.js file.

### content: ["./src/**/*.{html,js}"],

B3: Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

### @tailwind base;

### @tailwind components;

### @tailwind utilities;

B4: Run the CLI tool to scan your template files for classes and build your CSS.

### npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

B5: Add your compiled CSS file output.css.

## Files Structure

- assets: image, fonts, video, ... (Public)
- components
- routers
- store: redux, manage state
- Utils: General function
- Styles: scss
- view: pages of project
- services: Call API
- test: test
