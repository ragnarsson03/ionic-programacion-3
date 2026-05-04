import { Component, OnInit } from '@angular/core';

/**
 * @component ProfilePage
 * @description Controlador de la vista "Información Personal".
 * Almacena los datos del estudiante que serán mostrados en el HTML
 * mediante la técnica de Data-Binding (Interpolación {{ }}).
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  // Variables públicas enlazadas al HTML mediante interpolación {{ variable }}
  public nombre: string    = 'Frederick Samir Durán Parra';
  public cedula: string    = 'V-30.346.056';
  public carrera: string   = 'Informática — UNETI';
  public institucion: string = 'Universidad Nacional Experimental de las Telecomunicaciones e Informática';
  public trayecto: string  = 'Trayecto III — Módulo 2 (2026-1)';
  public stack: string     = 'Angular · Ionic · TypeScript · NestJS';

  constructor() {
    // El constructor queda vacío porque no necesitamos inyectar ningún servicio externo aún.
  }

  /**
   * @lifecycle ngOnInit
   * @description Se ejecuta una sola vez cuando Angular termina de inicializar
   * el componente. Aquí se harían las llamadas a servicios (API) si existieran.
   */
  ngOnInit() {}

}
