# Frontend — Ionic Angular 📱

Este directorio contiene el **código fuente completo** de la aplicación móvil híbrida desarrollada con Ionic v8 y Angular v20, cumpliendo los requerimientos de la **Evaluación 1 de Programación III**.

<div align="center">

  <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
  <img src="https://img.shields.io/badge/Animate.css-1ABC9C?style=for-the-badge&logo=css3&logoColor=white" alt="Animate.css" />

</div>

---

## 🗺️ Vistas de la Aplicación (3 Menús Requeridos)

| Vista | Ruta | Concepto Angular Demostrado |
|---|---|---|
| **Inicio** | `/home` | Interpolación `{{ }}`, Interfaz TypeScript, `@for` |
| **Información Personal** | `/profile` | Data-Binding completo, Property Binding `[ ]` |
| **Contacto** | `/contact` | Two-Way Binding `[(ngModel)]`, Event Binding `(click)` |

---

## 📁 Arquitectura de Carpetas

```
frontend/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/           ← Vista Inicio (Saludo al profesor, Stack)
│   │   │   ├── profile/        ← Vista Info Personal (Datos del estudiante)
│   │   │   └── contact/        ← Vista Contacto (Formulario con ngModel)
│   │   ├── app.component.ts    ← Controlador del SideMenu (Menú lateral)
│   │   ├── app.component.html  ← Template del layout principal
│   │   └── app-routing.module.ts ← Definición de rutas (Lazy Loading)
│   ├── styles/                 ← 🎨 Sistema de estilos centralizado (SCSS)
│   │   ├── index.scss          ← Barrel (punto de entrada único)
│   │   ├── _variables.scss     ← Design Tokens (colores, fuentes, espacios)
│   │   ├── _reset.scss         ← Normalización CSS cross-platform
│   │   ├── _typography.scss    ← Jerarquía tipográfica global
│   │   └── _animations.scss    ← Config. de Animate.css + keyframes propios
│   ├── global.scss             ← Importa el barrel /styles/index.scss
│   └── index.html              ← HTML de entrada de la Single Page App
├── package.json
└── angular.json
```

---

## 🎨 Sistema de Diseño (Tailwind + Global SCSS)

Se ha migrado a un sistema de diseño basado en utilidades (**Tailwind CSS**), lo que permite:
1. **Eliminar archivos `.scss` por componente:** El diseño vive dentro del `.ts` embebido.
2. **Estabilidad:** Versión v3.4.17 optimizada para Node.js v25.
3. **Mantenimiento:** Configuración centralizada en `tailwind.config.js`.

### Convención de nombrado SCSS
- Archivos parciales: `_nombre.scss` (con guión bajo = no compila solo).
- Punto de entrada: `index.scss` (sin guión bajo = compila).

---

## 🚀 Desarrollo Local

```bash
# Dentro de /frontend
npm install     # Instalar dependencias
npm start       # Servidor dev → http://localhost:4200

# Para probar en modo móvil:
# F12 en el navegador → ícono de dispositivo móvil (arriba izquierda)
# Seleccionar "iPhone 14" o "Galaxy S20"
```

---

## 📐 Convenciones de Código

| Aspecto | Convención |
|---|---|
| Archivos y variables | `camelCase` en Inglés |
| Comentarios de código | JSDoc en Inglés + explicación en Español |
| Texto visible (UI) | Español |
| Estilos | SCSS con variables centralizadas (sin Tailwind) |

*Evaluación 1 — Programación III — UNETI 2026-1*
