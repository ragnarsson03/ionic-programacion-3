import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services';

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
  selector: 'app-contact',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="bg-transparent px-4 pt-4">
        <ion-menu-button slot="start" class="text-white"></ion-menu-button>
        <ion-title class="font-bold text-white tracking-tight">Contacto</ion-title>
        <!-- Logo UNETI en el Header -->
        <ion-thumbnail slot="end" class="mr-2 w-8 h-8">
          <img src="assets/logo_uneti_fondo_negro.jpeg" class="rounded-full shadow-md">
        </ion-thumbnail>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="px-6 pb-12">
        
        <div class="mt-8 mb-6 animate__animated animate__fadeIn">
           <h1 class="text-3xl font-extrabold text-white leading-tight">Envíame un mensaje</h1>
           <div class="h-1 w-16 bg-blue-500 rounded-full mt-3 mb-2"></div>
           <p class="text-sm text-blue-400 tracking-widest font-semibold flex items-center gap-2">
             <ion-icon name="hardware-chip-outline" class="text-lg"></ion-icon>
             TWO-WAY BINDING & DI
           </p>
        </div>

        <div class="space-y-6">
          
          <!-- ─── Formulario de Contacto (Glassmorphism) ──────────── -->
          <div class="p-6 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md animate__animated animate__slideInUp">
             
            <!-- Utilizamos variables CSS para asegurar la transparencia del item en Ionic -->
            <ion-item class="rounded-2xl mb-4" lines="none" style="--background: rgba(15, 23, 42, 0.5); --padding-start: 1rem;">
              <ion-label position="floating" class="text-gray-400">Tu nombre</ion-label>
              <ion-input [(ngModel)]="formNombre" type="text" class="text-white mt-2 font-medium"></ion-input>
            </ion-item>

            <ion-item class="rounded-2xl mb-6" lines="none" style="--background: rgba(15, 23, 42, 0.5); --padding-start: 1rem;">
              <ion-label position="floating" class="text-gray-400">Tu mensaje</ion-label>
              <ion-textarea [(ngModel)]="formMensaje" rows="4" class="text-white mt-2 font-medium"></ion-textarea>
            </ion-item>

            <!-- Botón personalizado con Tailwind en lugar del estándar de Ionic -->
            <button (click)="enviarMensaje()" 
              class="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/50">
              <ion-icon name="paper-plane-outline" class="text-xl"></ion-icon>
              ENVIAR MENSAJE
            </button>

            @if (enviado) {
              <div class="flex items-center justify-center mt-6 gap-2 animate__animated animate__fadeIn bg-green-500/10 p-3 rounded-xl border border-green-500/20">
                <ion-icon name="checkmark-circle-outline" class="text-green-400 text-xl"></ion-icon>
                <p class="text-green-400 text-sm font-semibold">¡Mensaje enviado con éxito!</p>
              </div>
            }
          </div>

          <!-- ─── Canales Alternativos ────────────────────────────── -->
          <h2 class="text-xs uppercase tracking-widest text-blue-400 font-bold mb-4 mt-8 animate__animated animate__fadeInUp">Canales Alternativos</h2>

          <div class="space-y-4 animate__animated animate__fadeInUp">
            
            <!-- WhatsApp -->
            <a href="https://wa.me/584149083826" target="_blank" class="no-underline block">
              <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300 border-l-4 border-l-green-500">
                 <div class="p-3 rounded-2xl bg-green-900/30 group-hover:scale-110 transition-transform">
                    <ion-icon name="logo-whatsapp" class="text-2xl text-green-500"></ion-icon>
                 </div>
                 <div class="ml-4">
                    <h3 class="text-white font-bold text-lg">+58 414-9083826</h3>
                    <p class="text-green-500 text-xs uppercase tracking-wider">Línea Directa</p>
                 </div>
                 <ion-icon name="open-outline" class="ml-auto text-gray-500"></ion-icon>
              </div>
            </a>

            <a href="https://github.com/ragnarsson03" target="_blank" class="no-underline block">
              <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
                 <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                    <ion-icon name="logo-github" class="text-2xl text-white"></ion-icon>
                 </div>
                 <div class="ml-4">
                    <h3 class="text-white font-bold">ragnarsson03</h3>
                    <p class="text-gray-400 text-xs uppercase tracking-wider">GitHub Oficial</p>
                 </div>
                 <ion-icon name="open-outline" class="ml-auto text-gray-500"></ion-icon>
              </div>
            </a>

            <a href="mailto:samirduran1000@gmail.com" class="no-underline block">
              <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
                 <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                    <ion-icon name="mail-outline" class="text-2xl text-red-400"></ion-icon>
                 </div>
                 <div class="ml-4 truncate">
                    <h3 class="text-white font-bold text-sm">samirduran1000&#64;gmail.com</h3>
                    <p class="text-red-400 text-xs uppercase tracking-wider">Email Directo</p>
                 </div>
                 <ion-icon name="chevron-forward" class="ml-auto text-gray-500"></ion-icon>
              </div>
            </a>
          </div>

        </div>
      </div>
    </ion-content>
  `,
})
export class ContactPage implements OnInit {

  // Variables del formulario enlazadas al HTML con [(ngModel)]
  public formNombre: string = '';
  public formMensaje: string = '';
  public enviado: boolean = false;

  /**
   * @constructor
   * @param contactService → Angular inyecta automáticamente el servicio.
   * No creamos el servicio manualmente (new ContactService()), sino que
   * declaramos la dependencia y Angular se encarga del ciclo de vida.
   * Esto es la Inyección de Dependencias (DI) en acción.
   */
  constructor(private contactService: ContactService) { }

  ngOnInit(): void { }

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
    this.enviado = true;
    this.formNombre = '';
    this.formMensaje = '';

    // Ocultamos la confirmación después de 3 segundos
    setTimeout(() => (this.enviado = false), 3000);
  }
}
