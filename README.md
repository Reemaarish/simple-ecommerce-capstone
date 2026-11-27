EasyCart – E-Commerce Capstone Project

A simple, responsive e-commerce web application built using HTML, CSS, and JavaScript.

Features

- Login and Logout simulation
- Product listing
- Add new products
- Edit existing products
- Delete products
- Add products to shopping cart
- Cart item count
- LocalStorage for persistent data
- Responsive mobile-friendly design

Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage
- GitHub Pages

Project Structure

simple-ecommerce-capstone/
│
├── index.html
├── style.css
├── app.js
└── README.md

Architecture

flowchart TD
    A[User] --> B[HTML Interface]
    B --> C[JavaScript Logic]
    C --> D[Product Management]
    C --> E[Shopping Cart]
    C --> F[Login Simulation]
    D --> G[LocalStorage]
    E --> G
    F --> G

Setup Instructions

1. Clone or download this repository.
2. Open the project folder.
3. Open "index.html" in a web browser.
4. Use the application to manage products and shopping cart items.

Live Demo

https://reemaarish.github.io/simple-ecommerce-capstone/

Repository

https://github.com/Reemaarish/simple-ecommerce-capstone

Note

This project uses browser LocalStorage for data persistence. Login and logout are simulated for demonstration purposes. It does not use a real authentication server or payment gateway.

Author

Reema Arish
