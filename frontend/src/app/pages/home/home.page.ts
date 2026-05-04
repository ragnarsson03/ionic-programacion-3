import { Component, OnInit } from '@angular/core';
import { IonicModule }       from '@ionic/angular';
import { CommonModule }      from '@angular/common';
import { StackItem }         from '../../core/models';

/**
 * @component HomePage
 * @description Vista principal de la aplicación.
 *
 * ┌─ ¿QUÉ ES UN STANDALONE COMPONENT? ─────────────────────────────────────┐
 * │ Angular históricamente requería que cada clase Component viviera dentro │
 * │ de un NgModule (archivo .module.ts). Desde Angular 15+, los componentes │
 * │ pueden ser "standalone": se declaran a sí mismos y gestionan sus propias │
 * │ importaciones. Esto elimina los archivos boilerplate innecesarios.       │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * Beneficios aplicados aquí:
 * → Se eliminaron: home.module.ts y home-routing.module.ts
 * → El componente importa directamente IonicModule y CommonModule
 * → El router usa 'loadComponent' en lugar de 'loadChildren'
 */
@Component({
  selector:    'app-home',
  standalone:  true,                            // ← Clave de la migración
  imports:     [ IonicModule, CommonModule ],   // ← Cada componente gestiona sus dependencias
  template: `
    <!-- ion-header: Barra superior fija con el título de la vista -->
    <ion-header [translucent]="true">
      <ion-toolbar color="primary">
        <!-- ion-menu-button: Botón hamburguesa que activa/desactiva el menú lateral -->
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- ion-content: Contenedor principal con soporte de scroll nativo -->
    <ion-content [fullscreen]="true" class="animate__animated animate__fadeIn">

      <!-- Tarjeta de bienvenida: La primera impresión del profesor -->
      <ion-card class="m-4 rounded-2xl shadow-lg">
        <ion-card-header>
          <!-- {{ saludo }}: Interpolación — Angular reemplaza esto con el valor de la variable -->
          <ion-card-title class="text-xl font-bold">{{ saludo }}</ion-card-title>
          <ion-card-subtitle>Evaluación 1 — Programación III</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p class="text-sm opacity-80">{{ descripcion }}</p>
        </ion-card-content>
      </ion-card>

      <!-- Tarjeta de Stack con animación de entrada desde abajo -->
      <ion-card class="m-4 rounded-2xl shadow-lg animate__animated animate__fadeInUp">
        <ion-card-header>
          <ion-card-title>Stack Tecnológico</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list lines="none">
            <!-- @for: Directiva de control de flujo de Angular 17+.
                 Itera 'stackItems' del controlador para renderizar cada ítem
                 sin duplicar código HTML (Principio DRY). -->
            @for (item of stackItems; track item.nombre) {
              <ion-item>
                <!-- [name]: Property Binding — enlaza el valor del icono dinámicamente -->
                <ion-icon [name]="item.icono" slot="start" [color]="item.color"></ion-icon>
                <ion-label>
                  <h3 class="font-semibold">{{ item.nombre }}</h3>
                  <p class="text-xs opacity-70">{{ item.descripcion }}</p>
                </ion-label>
              </ion-item>
            }
          </ion-list>
        </ion-card-content>
      </ion-card>

    </ion-content>
  `,
})
export class HomePage implements OnInit {

  /** Mensaje de bienvenida: inyectado al HTML mediante interpolación {{ }} */
  public saludo: string = 'Bienvenido, Profesor Carlos Márquez 👋🏻';

  /** Descripción de la actividad: renderizada mediante Data-Binding unidireccional */
  public descripcion: string =
    'Aplicación desarrollada con Ionic v8 + Angular v20 para demostrar ' +
    'los conceptos de Standalone Components, Routing, Data-Binding e ' +
    'Inyección de Dependencias. Evaluación 1 · Trayecto 3 · Módulo 2.';

  /**
   * @property stackItems
   * @description Arreglo tipado con la interfaz StackItem (core/models).
   * Demuestra que TypeScript garantiza que cada objeto tenga exactamente
   * las propiedades esperadas — si falta una, el compilador lanza error.
   */
  public stackItems: StackItem[] = [
    { nombre: 'Ionic v8',        descripcion: 'Componentes UI para apps híbridas', icono: 'phone-portrait-outline', color: 'primary'   },
    { nombre: 'Angular v20',     descripcion: 'SPA Framework + Standalone API',    icono: 'logo-angular',           color: 'danger'    },
    { nombre: 'TypeScript 5.9',  descripcion: 'Tipado estático estricto',           icono: 'code-slash-outline',     color: 'secondary' },
    { nombre: 'Tailwind CSS v3', descripcion: 'Diseño veloz con clases de utilidad', icono: 'color-palette-outline', color: 'success'   },
    { nombre: 'Arquitectura SCSS', descripcion: 'Sistema modular híbrido con Tailwind', icono: 'layers-outline', color: 'tertiary'  },
    { nombre: 'Animate.css v4',  descripcion: 'Animaciones declarativas en HTML',   icono: 'sparkles-outline',       color: 'warning'   },

  ];

  constructor() {}

  /**
   * @lifecycle ngOnInit
   * @description Ciclo de vida de Angular: se ejecuta una vez que el componente
   * ha sido inicializado. Aquí iría la carga de datos desde una API real.
   */
  ngOnInit(): void {}
}
