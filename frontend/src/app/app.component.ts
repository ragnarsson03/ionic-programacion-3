import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  /**
   * @description Application routing menu array.
   * Modificamos este arreglo genérico para enrutar a las 3 vistas requeridas
   * por la Evaluación 1. Se emplea Native Data-Binding.
   */
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Info Personal', url: '/profile', icon: 'person' },
    { title: 'Contacto', url: '/contact', icon: 'call' },
  ];

  constructor() {}
}
