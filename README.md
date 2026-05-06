# Portafolio Profesional: Academic Excellence UI 🚀

Este repositorio contiene la entrega consolidada de las **Evaluaciones 1 y 2** de la asignatura **Programación III**. La aplicación ha evolucionado de un prototipo base hacia un **Portafolio Profesional de Alto Nivel** desarrollado con el ecosistema de **Ionic v8** y **Angular v18+**.

<div align="center">

  <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />

</div>

---

## 🌐 Demo En Vivo
Puedes visualizar el resultado final desplegado en producción aquí:  
👉 **[Link del Despliegue en Vercel](https://ionic-programacion-3.vercel.app)** *(Actualiza con tu link real)*

---

## ✨ Características Principales (Highlight Features)

### 🌓 Dark Mode Nativo & Reactivo
Implementación de un sistema de temas dinámico que inyecta la clase `.dark` en el root de la aplicación. Soporte completo en todas las vistas (Home, Profile, Contact) mediante utilidades de Tailwind CSS.

### 🎥 Multimedia & Branding "Iotic"
- **Hero Video Background:** Integración de bucles de video de alta calidad (HTML5 Video) optimizados para web.
- **Identidad Visual UNETI:** Rebranding semántico utilizando los colores oficiales (Naranja #F97316 y Azul #1E3A8A) aplicados mediante tipografía pura (sin imágenes pesadas).
- **Iconografía dinámina:** Integración del logo **Iotic** en la Shell de navegación.

### 📱 Full Standalone Architecture
Migración total de `NgModules` a **Standalone Components**, reduciendo el tamaño del bundle inicial y siguiendo las mejores prácticas de Angular 17/18.

---

## 🗺️ Vistas de la Aplicación (Requerimientos)

| Vista | Conceptos Técnicos Demostrados |
|---|---|
| **🏠 Inicio** | Video Loops, Bento Grid Layout, Inyección de Modelos de Datos. |
| **👤 Info Personal** | Diseño de Avatar dinámico, Branding Institucional UNETI. |
| **✉️ Contacto** | Two-Way Binding `[(ngModel)]`, Event Handling, Integración WhatsApp API. |

---

## 📁 Estructura del Proyecto (Root-First)

```
/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/           ← Dashboard con Proyectos y Tech Stack
│   │   │   ├── profile/        ← Identidad Académica y Skills
│   │   │   └── contact/        ← Formulario Reactivo y Link de Envío
│   │   ├── core/               ← Modelos y Servicios Singletons
│   ├── assets/                 ← Multimedia, Iconos y Logos optimizados
├── angular.json                ← Config. de Output en carpeta /www para Vercel
├── tailwind.config.js          ← Configuración de Design Tokens
└── package.json
```

---

## 🚀 Despliegue & DevOps

Este proyecto está configurado para la entrega continua:
- **Output:** `www/` (Configurado en `angular.json`).
- **Límite de Archivos:** Assets multimedia optimizados bajo el límite de 100MB de GitHub/Vercel.
- **Comando de Build:** `npm run build` (usando Angular CLI local).

---

## 🛠️ Desarrollo Local

```bash
git clone https://github.com/ragnarsson03/ionic-programacion-3.git
npm install
npm start
```

*Desarrollado por: **Frederick Durán (@ragnarsson03)** — UNETI 2026*
