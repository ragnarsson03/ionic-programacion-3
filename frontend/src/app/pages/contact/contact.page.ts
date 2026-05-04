import { Component, OnInit } from '@angular/core';

/**
 * @component ContactPage
 * @description Controlador de la vista "Contacto".
 * Demuestra el Two-Way Data-Binding usando [(ngModel)] para mantener
 * sincronizados los inputs del formulario con las variables TypeScript.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false,
})
export class ContactPage implements OnInit {

  // Variables del formulario enlazadas al HTML con Two-Way Data-Binding: [(ngModel)]
  public formNombre: string   = '';
  public formMensaje: string  = '';

  constructor() {}

  ngOnInit() {}

  /**
   * @method enviarMensaje
   * @description Método disparado por el Event Binding (click) del botón "Enviar".
   * En una app real haría una petición HTTP a una API REST. Por ahora,
   * imprime los datos capturados del formulario en la consola del navegador.
   */
  public enviarMensaje(): void {
    // Validación básica: no enviar si los campos están vacíos
    if (!this.formNombre || !this.formMensaje) {
      console.warn('Formulario incompleto. Todos los campos son requeridos.');
      return;
    }

    // Log de confirmación visible en la consola del navegador (F12 > Console)
    console.log('--- Mensaje enviado ---');
    console.log('Nombre:', this.formNombre);
    console.log('Mensaje:', this.formMensaje);
    console.log('-----------------------');

    // Reset del formulario luego de enviar
    this.formNombre  = '';
    this.formMensaje = '';
  }

}
