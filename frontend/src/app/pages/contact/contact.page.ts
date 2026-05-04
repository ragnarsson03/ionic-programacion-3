import { Component, OnInit } from '@angular/core';
import { IonicModule }        from '@ionic/angular';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ContactService }     from '../../core/services';

/**
 * @component ContactPage
 * @description Vista de Contacto: demuestra Two-Way Data Binding y Event Binding.
 *
 * Al ser Standalone, este componente importa directamente FormsModule
 * (necesario para [(ngModel)]) sin depender de un módulo padre.
 *
 * Conceptos Angular demostrados:
 * → [(ngModel)]:  Two-Way Data Binding — sincronización bidireccional input ↔ variable
 * → (click):      Event Binding — ejecuta un método al interactuar con un elemento
 * → @if:          Renderizado condicional — muestra/oculta elementos según lógica
 * → ContactService: Inyección de Dependencias — el servicio es provisto por Angular
 */
@Component({
  selector:   'app-contact',
  standalone: true,
  imports:    [ IonicModule, CommonModule, FormsModule ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar color="primary">
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title>Contacto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">

      <!-- ─── Formulario de Contacto ──────────────────────────────────── -->
      <ion-card class="m-4 rounded-2xl animate__animated animate__fadeInDown">
        <ion-card-header>
          <ion-card-title>Envíame un mensaje</ion-card-title>
          <ion-card-subtitle>Two-Way Binding + Inyección de Dependencias</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>

          <!-- [(ngModel)]: Two-Way Data Binding.
               Sincroniza bidireccionalmente el valor del input con 'formNombre'.
               Si el usuario escribe → se actualiza la variable en TypeScript.
               Si la variable cambia en TypeScript → se actualiza el input. -->
          <ion-item class="rounded-xl mb-2">
            <ion-label position="floating">Tu nombre</ion-label>
            <ion-input [(ngModel)]="formNombre" type="text"></ion-input>
          </ion-item>

          <ion-item class="rounded-xl mb-4">
            <ion-label position="floating">Tu mensaje</ion-label>
            <ion-textarea [(ngModel)]="formMensaje" rows="4"></ion-textarea>
          </ion-item>

          <!-- (click): Event Binding — llama a enviarMensaje() al hacer clic.
               Angular escucha el evento DOM 'click' y ejecuta el método. -->
          <ion-button expand="block" color="primary" (click)="enviarMensaje()"
            class="rounded-xl">
            <ion-icon name="send-outline" slot="start"></ion-icon>
            Enviar Mensaje
          </ion-button>

          <!-- @if: Renderizado condicional de Angular 17+.
               Solo muestra este bloque cuando 'enviado' es true. -->
          @if (enviado) {
            <div class="flex items-center justify-center mt-4 gap-2 animate__animated animate__fadeIn">
              <ion-icon name="checkmark-circle-outline" color="success"></ion-icon>
              <p class="text-green-500 text-sm font-semibold">Mensaje enviado correctamente</p>
            </div>
          }

        </ion-card-content>
      </ion-card>

      <!-- ─── Canales Alternativos ─────────────────────────────────────── -->
      <ion-card class="m-4 rounded-2xl animate__animated animate__fadeInUp">
        <ion-card-header>
          <ion-card-title>También me encuentras en</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list lines="none">
            <ion-item button detail="true">
              <ion-icon name="logo-github" slot="start"></ion-icon>
              <ion-label>GitHub: /frederick-duran</ion-label>
            </ion-item>
            <ion-item button detail="true">
              <ion-icon name="mail-outline" slot="start" color="danger"></ion-icon>
              <ion-label>samirduran999&#64;gmail.com</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

    </ion-content>
  `,
})
export class ContactPage implements OnInit {

  // Variables del formulario enlazadas al HTML con [(ngModel)]
  public formNombre:  string  = '';
  public formMensaje: string  = '';
  public enviado:     boolean = false;

  /**
   * @constructor
   * @param contactService → Angular inyecta automáticamente el servicio.
   * No creamos el servicio manualmente (new ContactService()), sino que
   * declaramos la dependencia y Angular se encarga del ciclo de vida.
   * Esto es la Inyección de Dependencias (DI) en acción.
   */
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  /**
   * @method enviarMensaje
   * @description Valida los campos del formulario y delega el procesamiento al
   * ContactService, siguiendo el Principio de Responsabilidad Única (SRP).
   */
  public enviarMensaje(): void {
    if (!this.formNombre.trim() || !this.formMensaje.trim()) {
      console.warn('[ContactPage] Campos vacíos — formulario no enviado.');
      return;
    }

    // Delegamos la lógica al servicio: la vista no procesa, solo muestra
    this.contactService.enviar(this.formNombre, this.formMensaje);

    // Mostramos confirmación y reseteamos el formulario
    this.enviado     = true;
    this.formNombre  = '';
    this.formMensaje = '';

    // Ocultamos la confirmación después de 3 segundos
    setTimeout(() => (this.enviado = false), 3000);
  }
}
