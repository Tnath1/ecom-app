# eCommerce App

A React + Vite storefront app that uses Redux Toolkit for product, cart, and liked-product state.

The app currently supports product browsing from the DummyJSON API, product detail pages, a global cart flow, a liked-products flow, and shared navigation/footer across the main pages.

## Tech Stack

- React 18
- Vite 5
- Redux Toolkit
- RTK Query
- React Redux
- React Router DOM
- React Icons

## Current Features

- Browse products fetched from `https://dummyjson.com/`
- View individual product detail pages
- Add products to cart from the product detail page
- See live cart count in the nav
- Manage cart quantities on the cart page
- View subtotal, 5% tax fee, and total in the order summary
- Like and unlike products from the product detail page
- View all liked products on a dedicated loved page
- Shared `Nav` and `Footer` across routed pages
- Active nav underline animation for `Home`, `Shop`, and `About`

## Routes

- `/` - Home page
- `/shop` - Product listing page
- `/about` - About page
- `/product/:id` - Product detail page
- `/cart` - Cart page
- `/loved` - Liked products page

## State Management

Redux Toolkit is used in three main ways:

- `productApi` uses RTK Query to fetch products from DummyJSON
- `products` stores the fetched product list used across pages
- `cart` stores cart items and quantity updates
- `liked` stores liked products and toggles by product id

## Project Structure

```text
src/
  components/
    About.jsx
    Cart.jsx
    Home.jsx
    Loved.jsx
    Nav.jsx
    ProductDetail.jsx
    Shop.jsx
    css/
  data/
    apiSlice.js
    cartSlice.js
    likedSlice.js
    product.api.js
    Store.js
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed.

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Notes

- The sign up / login modal is currently UI-only and is not connected to a backend yet.
- Products are loaded from DummyJSON, while cart and liked-product state are managed locally in Redux.
- Cart quantity changes affect item quantity, while the nav cart badge reflects the number of distinct products in cart.

## Author

Created and maintained by Arome Ukpoju.

For questions or collaboration:
`aromejonathanu@gmail.com`
