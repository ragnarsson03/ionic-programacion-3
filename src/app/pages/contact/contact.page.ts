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
    <ion-content>
      <main class="md:pl-72 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen bg-background">
        <div class="px-4 md:px-lg max-w-7xl mx-auto w-full py-6 md:py-10 animate__animated animate__fadeIn space-y-6">
          
          <!-- Hero Section -->
          <section class="relative w-full h-[200px] md:h-[300px] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-slate-900 border border-slate-100">
            <div class="absolute inset-0 w-full h-full object-cover opacity-50 bg-blue-900 z-0"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 flex items-end p-md lg:p-lg">
              <h1 class="font-display text-4xl md:text-5xl font-extrabold text-white">Envíame un mensaje</h1>
            </div>
          </section>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-md items-start">
            
            <!-- Form Card (Bento Left) -->
            <div class="lg:col-span-7 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 p-md flex flex-col gap-md">
              <div>
                <h2 class="font-headline-md text-2xl font-bold text-slate-900 mb-xs flex items-center gap-2">
                  <span class="material-symbols-outlined text-blue-600">swap_horiz</span> TWO-WAY BINDING & DI
                </h2>
                <p class="text-slate-500 font-medium">Conecta este formulario con el servicio para abrir la consola o WhatsApp automáticamente.</p>
              </div>
              
              <form class="flex flex-col gap-4 mt-2">
                 <div class="flex flex-col gap-1">
                    <label class="text-sm font-bold text-slate-700" for="name">Nombre</label>
                    <input [(ngModel)]="formNombre" class="w-full h-12 px-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-slate-50 text-slate-800 transition-colors placeholder-slate-400" id="name" name="name" placeholder="Tu nombre completo" type="text"/>
                 </div>
                 
                 <div class="flex flex-col gap-1 mt-2">
                    <label class="text-sm font-bold text-slate-700" for="message">Mensaje</label>
                    <textarea [(ngModel)]="formMensaje" class="w-full p-4 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-slate-50 text-slate-800 resize-none transition-colors placeholder-slate-400" id="message" name="message" placeholder="¿En qué te puedo ayudar?" rows="5"></textarea>
                 </div>
                 
                 <button (click)="enviarMensaje()" class="mt-4 h-12 w-full sm:w-auto self-end bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 px-6 transition-all shadow-sm" type="button">
                    <span class="material-symbols-outlined text-[20px]">send</span> Enviar Mensaje
                 </button>

                 @if (enviado) {
                   <div class="flex items-center justify-center mt-4 gap-2 animate__animated animate__fadeIn bg-green-50 p-3 rounded-xl border border-green-200">
                     <span class="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                     <p class="text-green-700 text-sm font-semibold">¡La aplicación de WhatsApp debería estar abriéndose!</p>
                   </div>
                 }
              </form>
            </div>

            <!-- Alternative Channels Card (Bento Right) -->
            <div class="lg:col-span-5 flex flex-col gap-md">
              <div class="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 p-md flex flex-col gap-md h-full">
                <div>
                  <h2 class="font-title-lg text-lg font-bold text-slate-900 mb-1">Canales Alternativos</h2>
                  <p class="text-sm text-slate-500">Otras formas de conectarte con nosotros.</p>
                </div>
                
                <div class="flex flex-col gap-4 mt-2">
                  
                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/in/frederick-dur%C3%A1n-529772385/" target="_blank" class="flex items-center gap-4 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer group no-underline">
                    <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                      <span class="material-symbols-outlined">work</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Perfil Profesional</span>
                      <span class="text-sm text-slate-800 font-bold">LinkedIn</span>
                    </div>
                  </a>

                  <!-- GitHub -->
                  <a href="https://github.com/ragnarsson03" target="_blank" class="flex items-center gap-4 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 hover:border-slate-300 transition-all cursor-pointer group no-underline">
                    <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-slate-300 group-hover:text-slate-800 transition-colors">
                      <span class="material-symbols-outlined">code</span>
                    </div>
                    <div class="flex flex-col">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Repositorios</span>
                      <span class="text-sm text-slate-800 font-bold">ragnarsson03</span>
                    </div>
                  </a>

                  <!-- Email -->
                  <a href="mailto:samirduran1000@gmail.com" class="flex items-center gap-4 p-3 rounded-lg bg-slate-50 hover:bg-red-50 border border-slate-100 hover:border-red-200 transition-all cursor-pointer group no-underline">
                    <div class="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                      <span class="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div class="flex flex-col truncate">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Directo</span>
                      <span class="text-sm text-slate-800 font-bold truncate">samirduran1000&#64;gmail.com</span>
                    </div>
                  </a>

                </div>
              </div>
              
              <!-- Omitimos la Decorative Secondary Image por ser redundante -->
            </div>

          </div>
        </div>
      </main>
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
