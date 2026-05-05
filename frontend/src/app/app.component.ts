import { Component } from '@angular/core';
import { MenuItem } from './core/models';

/**
 * @component AppComponent
 * @description Componente raíz de la aplicación.
 * Gestiona exclusivamente el menú lateral (SideMenu) y su enrutamiento.
 * Los datos del menú están tipados con MenuItem (core/models).
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  /**
   * @property appPages
   * @description Arreglo de rutas que alimenta el SideMenu via Data-Binding.
   * Cada objeto cumple el contrato MenuItem definido en core/models.
   */
  public appPages: MenuItem[] = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Información Personal', url: '/profile', icon: 'person' },
    { title: 'Contacto', url: '/contact', icon: 'call' },
  ];

  constructor() { }

}
