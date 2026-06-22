# Reporte Técnico: Sesión Didáctica 2 (SD2) - Frederick Durán

Este documento consolida todas las mejoras técnicas, de rendimiento e interactividad implementadas para cumplir con los requerimientos de la asignatura Programación III.

## 📌 Índice de Contenidos

1. [Introducción y Objetivos](#1-introducción-y-objetivos)
2. [Arquitectura y Modularización](#2-arquitectura-y-modularización)
3. [Optimización de Performance (Video & Assets)](#3-optimización-de-performance-video--assets)
4. [Interactividad y Formularios Reactivos](#4-interactividad-y-formularios-reactivos)
5. [Experiencia de Usuario (UX) e Intuición](#5-experiencia-de-usuario-ux-e-intuición)
6. [Guía de Evidencias (Screenshots)](#6-guía-de-evidencias-screenshots)
7. [Conclusión](#7-conclusión)

---

## 1. Introducción y Objetivos
El objetivo de esta fase (SD2) fue evolucionar el prototipo inicial hacia una aplicación robusta, intuitiva y optimizada. Se priorizó la **lógica de programación** sobre la estética simple, cumpliendo con la solicitud del profesor de añadir dinamismo e interactividad real.

## 2. Arquitectura y Modularización
Se aplicó el principio de **Separación de Responsabilidades** al componente de contacto. Anteriormente, el código estaba acoplado en un solo archivo `.ts`. Ahora se divide en:
- `contact.page.html`: Definición semántica de la vista.
- `contact.page.scss`: Estilos encapsulados.
- `contact.page.ts`: Lógica de negocio y control del formulario.

Esto facilita el mantenimiento y sigue las mejores prácticas de **Angular 18+**.

## 3. Optimización de Performance (Video & Assets)
Para solucionar la latencia de carga causada por videos pesados, se implementaron técnicas de ingeniería multimedia:
- **Transcodificación a .webm:** Se redujo el peso de los videos en más de un 80% usando el codec VP8/VP9.
- **Downscaling inteligente:** Los videos se ajustaron a 720p, ideal para dispositivos móviles, eliminando el desperdicio de ancho de banda de los videos 4K originales.
- **Video Posters:** Se crearon imágenes "poster" ligeras que se muestran instantáneamente mientras el video se descarga en segundo plano, logrando una percepción de carga inmediata (Efecto "SVG-like").
- **Preload Strategy:** Uso de `preload="auto"` para priorizar la descarga de recursos críticos.

## 4. Interactividad y Formularios Reactivos
Se migró el sistema de contacto a **Reactive Forms**, permitiendo:
- **Validaciones en Tiempo Real:** Validación de formato de email, longitud mínima de nombre y obligatoriedad del mensaje.
- **Micro-CRUD de Historial:** Se añadió la capacidad de **Crear (enviar)**, **Leer (listar)** y **Eliminar** mensajes del historial local, demostrando la gestión de estados e Inyección de Dependencias.
- **Feedback Proactivo:** Implementación de **Ionic Toasts** para notificar al usuario sobre el éxito o error de sus acciones de forma elegante.

## 5. Experiencia de Usuario (UX) e Intuición
Para hacer la app más "intuitiva", se añadieron elementos de contexto:
- **Hero Background:** Fondo visual tecnológico que identifica la sección.
- **Tarjeta de Disponibilidad:** Información clara sobre horarios de atención.
- **Bento Grid Layout:** Organización visual moderna que facilita la lectura de datos.

## 6. Guía de Evidencias (Screenshots)
Para tu reporte final en PDF, se recomienda capturar:
- **Captura A:** Formulario con errores de validación (campos en rojo).
- **Captura B:** El Toast de éxito al enviar un mensaje.
- **Captura C:** El historial de mensajes mostrando el botón de eliminar (CRUD).
- **Captura D:** Prueba de carga (cómo el video inicia sin pantalla negra gracias al poster).

## 7. Conclusión
La aplicación ha dejado de ser un sitio estático para convertirse en una **herramienta funcional**. Se han cubierto todos los puntos discutidos en el chat grupal, superando las expectativas técnicas de la SD2.

---
*Desarrollado por Frederick Durán @ragnarsson03*
