# My Portfolio
## Project Overview:
This is a portfolio web app using Vue.js with a dashboard-style layout. The app reflect my personal or professional profile, showcase my project, and other stories.

## Features:
1. Login Page - custom login page with hardcoded credentials for form validation. The user will redirected to the portfolio home page after successfully login.
2. Home Page - display the introduction to my porftfolio. It provides quick links to the Profile, Porfolio Showcase, Contact, and Creative Page.  
3. Profile Page - contains a brief introduction about myself, a photo, social media links.
4. Portfolio Showcase - display my projects using an interactive gallery format. Each project card includes image, short description, and a link to the corresponding GitHub repository.
5. Contact Page - includes a simple form wfor visitors to send a message.
6. Creative Page - it features my personal interests.

## Technologies Used:
- Vue.js
- Vue Router
- HTML
- CSS and Bootstrap
- JavaScript
- GitHub

## How to run the Project Locally
1. Download the repository 
2. Navigate the project directory
3. Install dependencies
npm install
4. Start the server
npm run serve
5. Open and navigate your browser
http://localhost:8080

## Code Structure
- node_modules  # Dependencies for the project       
- src           # Source Code
- assets        # Contains images and other assets
- components    # Reusable Vue components
- layouts       # Layout files for different pages
- router        # Vue Router configuration
- └── index.js  # Defines routes for each page  
- App.vue       # Root Vue component, renders other components
- main.js       # Main JavaScript file to bootstrap the app
