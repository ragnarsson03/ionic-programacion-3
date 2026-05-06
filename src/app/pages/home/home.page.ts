import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StackItem } from '../../core/models';

/**
 * @view Inicio (Dashboard)
 * @author Frederick Durán
 * @description Esta vista implementa un diseño "Bento Grid" altamente responsivo.
 * Se utiliza la arquitectura Standalone para optimizar la carga del componente.
 * Profesor Carlos Márquez: Note el uso de bucles de video nativos y orquestación tipográfica.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-content>
      <main class="md:pl-72 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen bg-background dark:bg-slate-950 transition-colors">
        <div class="px-4 md:px-lg max-w-7xl mx-auto w-full py-6 md:py-10 animate__animated animate__fadeIn">
          
          <!-- Hero Section (Video Background) -->
          <section class="mb-lg">
            <div class="relative w-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px] md:min-h-[280px] bg-slate-900 flex flex-col justify-end p-md md:p-lg border border-slate-200 dark:border-slate-800">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent z-10"></div>
              
              <!-- HTML5 Video Loop (Forced Autoplay) -->
              <video class="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen bg-blue-900" autoplay loop [muted]="true" playsinline defaultMuted onloadedmetadata="this.muted=true">
                <source src="assets/hero-bg/hero-bg.mp4" type="video/mp4" />
              </video>
              
              <div class="relative z-20 text-white">
                <h1 class="font-display text-4xl md:text-5xl font-extrabold mb-2">{{ saludo }}</h1>
                <p class="text-lg text-slate-300 max-w-2xl">{{ descripcion }}</p>
              </div>
            </div>
          </section>

          <!-- Stack Tecnológico Section -->
          <section class="mb-lg">
            <div class="flex items-center justify-between mb-md">
              <h2 class="font-headline-md text-2xl font-bold text-slate-900 dark:text-white">Stack Tecnológico</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              @for (item of stackItems; track item.nombre) {
                <div class="bg-white dark:bg-slate-900 rounded-xl p-md shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all group flex flex-col h-full relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                  <div class="relative z-10 flex-1 flex flex-col">
                    <div class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-sm text-blue-600 dark:text-blue-400">
                      <ion-icon [name]="item.icono" class="text-[28px]"></ion-icon>
                    </div>
                    <h3 class="font-title-lg text-lg font-bold text-slate-900 dark:text-white mb-1">{{ item.nombre }}</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 flex-1">{{ item.descripcion }}</p>
                    
                    @if (item.urlDocs) {
                      <a [href]="item.urlDocs" target="_blank" class="mt-4 font-bold text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:text-blue-800 transition-colors w-max no-underline">
                        Página Oficial <span class="material-symbols-outlined text-[16px]">open_in_new</span>
                      </a>
                    }
                  </div>
                </div>
              }
            </div>
          </section>

          <!-- Proyectos Destacados Section -->
          <section>
            <div class="flex items-center justify-between mb-md">
              <h2 class="font-headline-md text-2xl font-bold text-slate-900 dark:text-white">Proyectos Destacados</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              
              <!-- Proyecto 1: App Detector de Voz -->
              <div class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-md transition-shadow">
                <div class="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex flex-col justify-end relative">
                   <div class="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                   <h3 class="text-white text-xl font-bold relative z-10 flex items-center gap-2">
                     <span class="material-symbols-outlined">mic</span> App Detector de Voz
                   </h3>
                </div>
                <div class="p-6 flex flex-col gap-4 flex-1">
                  <p class="text-sm text-slate-600 dark:text-slate-400">Web App interactiva con Inteligencia Artificial. Captura y reconoce el habla en tiempo real a través del navegador web.</p>
                  <div class="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href="https://app-detector-de-voz.vercel.app/" target="_blank" class="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity no-underline w-full justify-center">
                      <span class="material-symbols-outlined text-[18px]">play_circle</span> Vercel App
                    </a>
                    <a href="https://github.com/ragnarsson03/app-detector-de-voz" target="_blank" class="px-4 py-2 bg-transparent text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors no-underline w-full justify-center">
                      <span class="material-symbols-outlined text-[18px]">code</span> Repo
                    </a>
                  </div>
                </div>
              </div>

              <!-- Proyecto 2: Dolar BCV Venezuela -->
              <div class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-md transition-shadow">
                <div class="h-32 bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex flex-col justify-end relative">
                   <div class="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                   <h3 class="text-white text-xl font-bold relative z-10 flex items-center gap-2">
                     <span class="material-symbols-outlined">attach_money</span> Monitor Dólar BCV
                   </h3>
                </div>
                <div class="p-6 flex flex-col gap-4 flex-1">
                  <p class="text-sm text-slate-600 dark:text-slate-400">Herramienta local de consulta financiera. Muestra la tasa cambiaria oficial vigente con conversor de divisas integrado en tiempo real.</p>
                  <div class="mt-auto flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href="https://dolar-bcv-vercel.vercel.app/" target="_blank" class="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity no-underline w-full justify-center">
                      <span class="material-symbols-outlined text-[18px]">play_circle</span> Vercel App
                    </a>
                    <a href="https://github.com/ragnarsson03/dolar-bcv-vercel" target="_blank" class="px-4 py-2 bg-transparent text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors no-underline w-full justify-center">
                      <span class="material-symbols-outlined text-[18px]">code</span> Repo
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
          
        </div>
      </main>
    </ion-content>
  `,
})
export class HomePage implements OnInit {
  public saludo: string = 'Bienvenido Profesor Carlos Márquez 👋🏻';
  public descripcion: string = 'Soy Frederick Samir Durán Parra. Aquí presento mis proyectos, stack tecnológico y medios de contacto.';

  // Actualizamos a IonIcons (los logos oficiales) y agregamos enlaces de Documentación
  public stackItems: StackItem[] = [
    { nombre: 'Ionic v8', descripcion: 'Componentes UI Híbridos', icono: 'logo-ionic', color: 'primary', urlDocs: 'https://ionicframework.com/docs' },
    { nombre: 'Angular v20', descripcion: 'Standalone Architecture', icono: 'logo-angular', color: 'danger', urlDocs: 'https://angular.dev/' },
    { nombre: 'Tailwind CSS v3', descripcion: 'Utility-first Design', icono: 'logo-css3', color: 'secondary', urlDocs: 'https://tailwindcss.com/docs' },
    { nombre: 'Dart Sass', descripcion: 'Modular Style System', icono: 'logo-sass', color: 'tertiary', urlDocs: 'https://sass-lang.com/documentation' },
    { nombre: 'Animate.css', descripcion: 'Motion Design', icono: 'color-wand-outline', color: 'warning', urlDocs: 'https://animate.style/' }
  ];

  constructor() { }
  ngOnInit(): void { }
}
