# 🎸 Guitar Shop - Tienda de Guitarras

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://sparkling-pony-785eff.netlify.app/)

Una moderna tienda de guitarras desarrollada con Tailwind CSS para el bootcamp de Talento Tech. Este proyecto muestra un catálogo de guitarras con funcionalidad de carrito de compras.

## 🌟 Características

- Catálogo de guitarras con imágenes y precios
- Carrito de compras interactivo
- Diseño responsive con Tailwind CSS
- Fácil de personalizar y extender

## 🛠️ Tecnologías Utilizadas

- HTML5
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Netlify](https://www.netlify.com/) para despliegue

## 📁 Estructura del Proyecto

```
├── public/               # Archivos públicos
│   └── index.html        # Página principal
├── pages/                # Otras páginas
│   └── catalogo.html     # Página de catálogo
├── components/           # Componentes de JavaScript
│   ├── cart.js          # Lógica del carrito
│   └── index.js         # Punto de entrada de componentes
├── styles/              # Estilos personalizados
├── assets/              # Recursos estáticos
├── images/              # Imágenes del proyecto
├── package.json         # Dependencias y scripts
└── tailwind.config.js   # Configuración de Tailwind
```

## 🚀 Cómo Empezar

### Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/guitar-shop.git
cd guitar-shop
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Iniciar el Servidor de Desarrollo

```bash
# Construir los estilos con Tailwind
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

# Abrir el archivo index.html en tu navegador
```

## 🌐 Despliegue

El sitio está desplegado en Netlify: [Ver Sitio en Vivo](https://sparkling-pony-785eff.netlify.app/)

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## ✨ Créditos

Desarrollado por Victor Sanchez para el bootcamp de Talento Tech.

---

#