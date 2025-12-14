# 🚀 Avra-Studio E-Commerce

Aplicación demo de un e-commerce desarrollada con React + Firebase, que consume la API pública de [DummyJSON](https://dummyjson.com) para obtener productos y [Firebase](https://firebase.google.com/?hl=es-419) para administra usuarios, login y carritos.

## [Demo en vivo](https://avra-studio.vercel.app)

## ✨ Características principales

-   🔥 Autenticación con Firebase Auth
-   🛒 Carrito sincronizado en Firestore por usuario logueado
-   📦 Productos obtenidos dinámicamente desde DummyJSON API
-   🎨 UI modular con CSS Modules
-   🚀 Routing con React Router
-   💾 Context API para manejar carrito y usuario

## 📌 Requisitos

-   NodeJS: v22.15.0

## 📂 Estructura del proyecto

Árbol del proyecto que muestra de forma clara y concisa la estructura del mismo. Se encuentran los assets, components, context, hooks, firebase y css.
Cada `*.module.css` se encuentra en la misma dirección que su archivo `*.jsx`

```bash
src/
├── App.jsx
├── Index.css
├── main.jsx
│
├── assets
│   ├── Avra-Studio-Full-Logo.png
│   ├── Avra-Studio-Solo-Logo.png
│   └── Avra-Studio-Solo-Text.png
│
├── components
│   ├── CartButtons
│   │   ├── CartButtons.jsx
│   │   └── CartButtons.module.css
│   │
│   ├── CategorySelector
│   │   ├── CategorySelector.jsx
│   │   └── CategorySelector.module.css
│   │
│   ├── Footer
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   │
│   ├── LogIn
│   │   ├── LogIn.jsx
│   │   └── LogIn.module.css
│   │
│   ├── MainContainer
│   │   ├── MainContainer.jsx
│   │   ├── MainContainer.module.css
│   │   │
│   │   ├── Checkout
│   │   │   ├── Checkout.jsx
│   │   │   ├── Checkout.module.css
│   │   │   │
│   │   │   ├── CheckoutCart
│   │   │   │   ├── CheckoutCart.jsx
│   │   │   │   └── CheckoutCart.module.css
│   │   │   │
│   │   │   └── CheckoutForm
│   │   │       ├── CheckoutForm.jsx
│   │   │       └── CheckoutForm.module.css
│   │   │
│   │   ├── Details
│   │   │   ├── Details.jsx
│   │   │   └── Details.module.css
│   │   │
│   │   ├── ItemListContainer
│   │   │   ├── ItemListContainer.jsx
│   │   │   └── ItemListContainer.module.css
│   │   │
│   │   ├── Page404
│   │   │   ├── Page404.jsx
│   │   │   └── Page404.module.css
│   │   │
│   │   └── Products
│   │       ├── Products.jsx
│   │       └── Products.module.css
│   │
│   ├── NavContainer
│   │   ├── NavContainer.jsx
│   │   └── NavContainer.module.css
│   │   │
│   │   └── NavLinkContainer
│   │       ├── NavLinkContainer.jsx
│   │       └── NavLinkContainer.module.css
│   │           │
│   │           └── CartWidget
│   │               ├── CartWidget.jsx
│   │               └── CartWidget.module.css
│   │                   │
│   │                   └── ItemWidget
│   │                       ├── ItemWidget.jsx
│   │                       └── ItemWidget.module.css
│   │
│   ├── SideLogo
│   │   ├── SideLogo.jsx
│   │   └── SideLogo.module.css
│   │
│   └── SignUp
│       ├── SignUp.jsx
│       └── SignUp.module.css
│
├── context
│   ├── CartContext.jsx
│   ├── CartProvider.jsx
│   └── UserContext.jsx
│
├── css
│   └── loader.module.css
│
├── firebase
│   └── config.js
│
└── hooks
    └── useFetch.jsx
```

## 📦 Paquetes utilizados

```bash
firebase@12.6.0,
lucide-react@0.561.0,
react@19.2.3,
react-dom@19.2.3,
react-hot-toast@2.6.0,
react-router-dom@7.10.1
```

## 🛠 Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/FCampo7/ProyectoFinalReact-Campo.git
```

2. Ingresar al proyecto

```bash
cd ProyectoFinalReact-Campo
```

3. Instalar dependencias

```bash
npm install
```

4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

5. Abrir http://localhost:5173/ en tu navegador para ver la aplicación.

### 🔐 Usuario de prueba

Para probar sin registrarse:

```code
Email: test@test.com
Contraseña: test123
```

También podés crear tu propia cuenta en la página de registro.

## 📝 Notas técnicas

-   La información del carrito se guarda en Firestore en un documento asociado al UID del usuario.

-   Cada vez que se modifica el carrito en la UI, se sincroniza en tiempo real con la base.

-   El proyecto está preparado para desplegarse fácilmente en Vercel o Firebase Hosting.

## 📄 Licencia

Licenciado bajo la [MIT License](https://github.com/FCampo7/ProyectoFinalReact-Campo/blob/main/LICENSE).
