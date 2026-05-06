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
    { title: 'Inicio', url: '/home', icon: 'dashboard' },
    { title: 'Información Personal', url: '/profile', icon: 'person' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
  ];

  public isDarkMode: boolean = false;

  constructor() { 
    // Inicializar basándose en la preferencia del sistema o localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('ion-palette-dark'); // Para componentes nativos de Ionic
    }
  }

  /**
   * @method toggleDarkMode
   * @description Alterna entre modo oscuro ('luna') y modo claro.
   */
  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('ion-palette-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('ion-palette-dark');
    }
  }

}
