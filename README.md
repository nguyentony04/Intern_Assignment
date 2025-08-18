# Internship Assignment

## What I learned 
- Implementing filters and sorting via: availibility, A-Z, Z-A, and price.
- How to create a toggle theme for the website using Reacts useState

## Challanges I Faced
- trying to keep the css file clean as possible trying to avoid redundancy while supporting the theme switch. The way I got past this was using youtube videos and ultimately trial and error. 
- making hover effects highlight product names without pushing visible errors on the site itself. the way around this bug was to use "text-underline-offset" and use a small transformation scale to enlarge the image slightly so it conforms with the underlining. 
- getting the theme toggle to sync with the app was a little frustrating to understand. the toggle would switch state but wasn't applying styles globally which cause some of the site to stay in light mode. so for this fix, i added useEffect in app.jsx that updates the document.body whenever the theme state changes. 

## Workspace Setup

to set up for this project, you'll need the following dependencies below into the terminal:
____________________________________________________________________

React:
npm install react@^19.1.0 react-dom@^19.1.0
____________________________________________________________________

Vite:
npm install -D vite@^7.0.4 @vitejs/plugin-react@^4.6.0
____________________________________________________________________

when ready to launch site locally, prompt the following into the terminal:

npm run dev
____________________________________________________________________
