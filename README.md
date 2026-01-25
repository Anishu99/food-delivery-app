INITIAL SETUP

1. mkdir food-delivery-app
2. cd food-delivery-app3. npm init -y // create package.json file
3. npm i react react-dom // create node_modules with react,react-dom and other dependable files
4. npm i --save-dev parcel

5. touch index.html App.js App.css

6. In the index.html > create boilerplate by html:5
and add below content in body
 <body>
    <div id="root"></div>
    <script type="module" src="./App.js"></script>
  </body>

7. In App.js
   import React from "react";
   import { createRoot } from "react-dom/client";
   import "./index.css";

const App = () => {
return <h1>Foodiggy</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

9.

/\*\*
FILE STRUCTURE

-
- Header
- - Logo
- - Navbar
- Body
- - Search
- - Restaurant Container
-      - Restaurant Card
- Footer
- - Copyright
- - Contact
- - Address
- - Links
    \*/
