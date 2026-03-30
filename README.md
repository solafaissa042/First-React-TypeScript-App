React Shopping Cart App
A simple shopping cart application built with React and TypeScript using Vite as the build tool. The app allows users to browse products, add them to a cart, adjust quantities, and submit orders.

Features
Display a list of products with images, names, and prices.
Add products to the shopping cart.
Adjust item quantities in the cart.
Remove items from the cart.
Display total items and total price dynamically.
Show a confirmation message when an order is submitted.
Fully TypeScript typed for type safety.

Technologies
React 19
TypeScript 5
Vite 7
ESLint for code linting

Project Structure

react-ts/
├─ src/
│ ├─ components/
│ │ ├─ App.tsx
│ │ ├─ Header.tsx
│ │ ├─ Footer.tsx
│ │ ├─ Cart.tsx
│ │ ├─ CartLineItem.tsx
│ │ ├─ ProductList.tsx
│ │ └─ Product.tsx
│ ├─ context/
│ │ ├─ CartProvider.tsx
│ │ └─ ProductProvider.tsx
│ ├─ hooks/
│ │ ├─ useCart.ts
│ │ └─ useProducts.ts
│ ├─ images/
│ │ └─ product images (e.g., item0001.jpg)
│ ├─ main.tsx
│ └─ index.css
├─ package.json
└─ tsconfig.json

Components

App.tsx
The main component controlling which view to show (cart or products) and rendering Header and Footer.

Header.tsx
Displays the site title and cart summary. Includes navigation to toggle cart view.

Footer.tsx
Displays total items, total price, and copyright.
C
art.tsx
Displays all items in the shopping cart with options to adjust quantity or remove items. Shows confirmation message on order submission.

CartLineItem.tsx
Represents a single item in the cart. Handles quantity changes and removal. Uses React.memo for performance optimization.

ProductList.tsx
Displays a list of all available products. Each product is rendered using the Product component.

Product.tsx
Represents a single product. Allows adding to cart and indicates if already in the cart. Uses React.memo.

Hooks & Context

useCart.ts & CartProvider.tsx
CartProvider manages the state of the shopping cart using a reducer.
Actions: ADD, REMOVE, QUANTITY, SUBMIT.
useCart hook provides access to cart state and actions.

useProducts.ts & ProductProvider.tsx
ProductsProvider holds the list of products.
useProducts hook provides access to product data.

Getting Started
Install dependencies:
npm install

Start development server:
npm run dev

Build for production:
npm run build

Preview production build:
npm run preview

Usage
Browse the list of products.
Click Add to Cart to add a product.
Click the Cart button in the header to view your cart.
Adjust quantities or remove items.
Click Place Order to submit and clear the cart.
✅ Fully typed with TypeScript, optimized with React.memo for performance, and structured with contexts/hooks for clean state management.

Author: Solafa Issa

live demo:https://first-react-typescript-app.onrender.com/
