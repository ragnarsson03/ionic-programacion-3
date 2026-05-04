import { Component, OnInit } from '@angular/core';

/**
 * @interface StackItem
 * @description Interfaz TypeScript que define la forma del objeto para
 * cada tecnología del stack. Usar interfaces garantiza tipado estricto
 * y evita errores en tiempo de desarrollo (no solo en ejecución).
 */
interface StackItem {
  nombre:      string;
  descripcion: string;
  icono:       string;
  color:       string;
}

/**
 * @component HomePage
 * @description Vista principal de la aplicación. Muestra el saludo al
 * profesor y el stack tecnológico utilizando Data-Binding e iteración @for.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  /**
   * @property saludo
   * @description Cadena de texto inyectada en el HTML mediante interpolación {{ }}.
   * Se define aquí en el controlador y Angular la "envía" al template automáticamente.
   */
  public saludo: string = 'Bienvenido, Profesor Carlos Márquez 👋🏻';

  /**
   * @property descripcion
   * @description Texto descriptivo de la evaluación enlazado al HTML por interpolación.
   */
  public descripcion: string =
    'Esta aplicación fue desarrollada como parte de la Evaluación 1 ' +
    'de Programación III (Trayecto 3 — Módulo 2). Navega usando el ' +
    'menú lateral para explorar las secciones de la práctica.';

  /**
   * @property stackItems
   * @description Arreglo de objetos tipados con la interfaz StackItem.
   * Angular itera este arreglo en el HTML usando la directiva @for
   * para generar los ítems de la lista dinámicamente.
   */
  public stackItems: StackItem[] = [
    {
      nombre:      'Ionic Framework v8',
      descripcion: 'Framework UI para aplicaciones híbridas (web/Android/iOS)',
      icono:       'phone-portrait-outline',
      color:       'primary',
    },
    {
      nombre:      'Angular v20',
      descripcion: 'Framework SPA con TypeScript, Módulos y Data-Binding',
      icono:       'logo-angular',
      color:       'danger',
    },
    {
      nombre:      'TypeScript 5.9',
      descripcion: 'Superconjunto de JavaScript con tipado estático estricto',
      icono:       'code-slash-outline',
      color:       'secondary',
    },
    {
      nombre:      'SCSS + Animate.css',
      descripcion: 'Diseño centralizado con variables y animaciones declarativas',
      icono:       'color-palette-outline',
      color:       'success',
    },
  ];

  constructor() {
    // Constructor vacío. No se inyecta ningún servicio en esta vista por ahora.
  }

  /**
   * @lifecycle ngOnInit
   * @description Ciclo de vida de Angular. Se ejecuta una vez que el
   * componente ha sido inicializado. Ideal para llamadas a APIs o setup inicial.
   */
  ngOnInit(): void {}

}
