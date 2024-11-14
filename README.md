# Landing page Guitar


https://github.com/user-attachments/assets/ecb598be-2601-4d03-b9b0-70f74af036bd

## Índice

1. [Introducción](#introducción)
2. [Descripción General](#descripción-general)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Instalación y Configuración](#instalación-y-configuración)
    - [Requisitos Previos](#requisitos-previos)
    - [Clonación del Repositorio](#clonación-del-repositorio)
    - [Instalación de Dependencias](#instalación-de-dependencias)
    - [Configuración de TailwindCSS](#Configuración-de-TailwindCSS)
    - [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
6. [Componentes Principales](#componentes-principales)
7. [Consideraciones Finales](#consideraciones-finales)
8. [Recursos Adicionales](#recursos-adicionales)

---

## Introducción

Esta documentación describe el proceso de creación de una landing page de guitarras con **Node.js** como backend y **TailwindCSS** para los estilos frontend.

## Descripción General

La aplicación permite a los usuarios explorar información sobre guitarras y está diseñada para facilitar la navegación de manera visual y efectiva.

- **Ver todos los productos**: Muestra una lista de productos disponibles.


## Tecnologías Utilizadas

  **HTML**  para la maquetacion del sitio.
- **NPM**  para la gestión de dependencias.
- **TailwindCSS**  para el diseño y los estilos.

## Estructura del Proyecto

```
GUITAR/
├── src/
│   ├── img/                    # Carpeta de imágenes para la landing page
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.png
│   │   └── header.jpg
│   ├── index.js                # Archivo principal de JavaScript
│   ├── input.css               # Archivo CSS de entrada para configuración de TailwindCSS
│   ├── output.css              # Archivo CSS generado, probablemente con TailwindCSS procesado
│   └── index.html              # Archivo principal HTML de la landing page
├── package-lock.json           # Archivo de bloqueo de versiones de npm
├── package.json                # Archivo de configuración de npm y dependencias del proyecto
└── tailwind.config.js          # Archivo de configuración de TailwindCSS


```

## Instalación y Configuración

### Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** 

### Clonación del Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/VictorDev1986/Guitar.git
cd Guitar
```

### Instalación de Dependencias

Instala las dependencias del proyecto:

```bash
npm install

```
### Configuración de TailwindCSS

Instalación de Tailwind CSS:

```bash
npm install -D tailwindcss
npx tailwindcss init

```

Configuración del archivo tailwind.config.js:

En el archivo tailwind.config.js, especifica la ubicación de tus archivos para TailwindCSS:

```bash
  module.exports = {
  content: ["./src/views/**/*.ejs", "./public/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```
Configuración en el archivo CSS:

Crea o ajusta un archivo CSS principal en public/css/styles.css e incluye las directivas de Tailwind:

```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

```


### Ejecución de la Aplicación

Inicia la aplicación en modo de desarrollo:

```bash

  npm run dev

```

La aplicación estará disponible en `http://localhost:3000`. o live server

## Componente Principale

- **Navbar:** Barra de navegación con enlaces a secciones de la página.
- **GuitarList:** Vista con lista de guitarras destacadas.
- **Contacto:** Formulario de contacto para los visitantes interesados.

## Consideraciones Finales


**SEO:** Optimiza etiquetas meta y títulos para mejor visibilidad.
**Optimización de imágenes:** Reduce el tamaño de imágenes en public/ para tiempos de carga más rápidos.


## Recursos Adicionales

- **Documentación de tailwindcss**: [https://tailwindcss.com/](https://tailwindcss.com/)

---

**Nota**: Esta documentación se centra exclusivamente en la aplicación frontend desarrollada con tailwindcss.
