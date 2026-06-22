import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/**
 * @view Información Personal
 * @description Demostración de Property Binding y Branding Institucional.
 * Se implementó el logo UNETI de forma vectorial/semántica usando spans y clases de Tailwind CSS
 * para evitar la latencia de carga de imágenes de mapa de bits.
 */
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-content>
      <main class="md:pl-72 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen bg-background dark:bg-slate-950 transition-colors">
        <div class="px-4 md:px-lg max-w-7xl mx-auto w-full py-6 md:py-10 animate__animated animate__fadeIn">
          
          <!-- Header Banner (Video Background) -->
          <div class="relative w-full h-48 md:h-64 mb-20">
            <!-- Capa con overflow oculto para el video -->
            <div class="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 bg-slate-900">
              <video class="w-full h-full object-cover opacity-60 mix-blend-screen transition-all" 
                autoplay loop muted playsinline preload="auto" 
                poster="assets/code-poster.png">
                <source src="assets/code/code.webm" type="video/webm" />
                <source src="assets/code/code-small.mp4" type="video/mp4" />
              </video>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
            </div>
            
            <!-- Avatar overlapping -->
            <div class="absolute -bottom-16 left-6 md:left-12 flex items-end gap-6 z-20">
              <div class="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-surface dark:bg-slate-800 shadow-md overflow-hidden flex items-center justify-center">
                <img src="assets/dog-dev/dog-dev.jpeg" alt="Avatar" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <div class="mt-4 mb-10 md:ml-48 px-2 md:px-0">
            <h1 class="font-display text-4xl font-extrabold text-slate-900 dark:text-white">{{ nombre }}</h1>
            <p class="font-headline-md text-xl text-slate-500 dark:text-slate-400 mt-2">Desarrollador Web</p>
          </div>

          <!-- Bento Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            <!-- Personal & Academic Data Card -->
            <div class="col-span-1 md:col-span-2 bg-white dark:bg-slate-900 rounded-xl p-md shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span class="material-symbols-outlined text-blue-600 dark:text-blue-400">badge</span> Datos Académicos
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Cédula</span>
                  <span class="text-lg text-slate-800 dark:text-slate-200 font-medium">{{ cedula }}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">WhatsApp</span>
                  <span class="text-lg text-slate-800 dark:text-slate-200 font-medium">+58 414-9083826</span>
                </div>
                <!-- Institución con Logo Estilizado -->
                <div class="flex flex-col sm:col-span-2">
                  <span class="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Institución</span>
                  <div class="flex items-center gap-3 mt-1 p-3 lg:p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 break-words">
                    <span class="material-symbols-outlined text-blue-600 dark:text-blue-400 hidden sm:block">account_balance</span>
                    <!-- Logo Institucional: Renderizado con Spans para optimización de performance (Sin Img) -->
                    <div class="flex flex-col">
                      <!-- Renderizado visual del Logo UNETI -->
                      <div class="flex items-center tracking-tight mb-1">
                        <span class="text-orange-500 font-black text-2xl lg:text-3xl">U</span>
                        <span class="text-blue-900 dark:text-blue-400 font-black text-2xl lg:text-3xl tracking-widest pl-[1px]">NETI</span>
                      </div>
                      <span class="text-sm lg:text-base text-slate-600 dark:text-slate-400 font-medium leading-tight">
                        Universidad Nacional Experimental de las Telecomunicaciones e Informática
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Development Stack Card -->
            <div class="col-span-1 bg-white dark:bg-slate-900 rounded-xl p-md shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span class="material-symbols-outlined text-blue-600 dark:text-blue-400">code</span> Stack Tecnológico
              </h2>
              <div class="flex flex-col gap-4">
                <div class="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Librerías Base</div>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-red-100 dark:border-red-900/30">
                    <span class="material-symbols-outlined text-[16px]">integration_instructions</span> Angular
                  </span>
                  <span class="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-blue-100 dark:border-blue-900/30">
                    <span class="material-symbols-outlined text-[16px]">devices</span> Ionic
                  </span>
                  <span class="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-teal-100 dark:border-teal-900/30">
                    <span class="material-symbols-outlined text-[16px]">waves</span> Tailwind
                  </span>
                  <span class="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/10 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-blue-200 dark:border-blue-800/40">
                    <span class="material-symbols-outlined text-[16px]">code_blocks</span> TypeScript
                  </span>
                  <span class="px-3 py-1.5 bg-pink-50 dark:bg-pink-900/10 text-pink-700 dark:text-pink-400 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-pink-100 dark:border-pink-900/30">
                    <span class="material-symbols-outlined text-[16px]">palette</span> SCSS
                  </span>
                  <span class="px-3 py-1.5 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-green-100 dark:border-green-900/30">
                    <span class="material-symbols-outlined text-[16px]">dns</span> Node.js
                  </span>
                  <span class="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
                    <span class="material-symbols-outlined text-[16px]">merge</span> Git
                  </span>
                </div>
              </div>
            </div>

            <!-- External Links Card -->
            <div class="col-span-1 md:col-span-3 bg-white dark:bg-slate-900 rounded-xl p-md shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow mt-4 md:mt-0">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <span class="material-symbols-outlined text-blue-600 dark:text-blue-400">link</span> Enlaces Externos
              </h2>
              <a [href]="githubUrl" target="_blank" class="inline-flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto no-underline">
                <span class="material-symbols-outlined text-slate-700 dark:text-slate-300">code</span>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 dark:text-slate-500 font-medium">GitHub</span>
                  <span class="text-blue-600 dark:text-blue-400 font-medium">ragnarsson03</span>
                </div>
                <span class="material-symbols-outlined text-slate-300 dark:text-slate-600 ml-auto sm:ml-8">arrow_forward</span>
              </a>
            </div>
          </div>
          
        </div>
      </main>
    </ion-content>
  `,
})
export class ProfilePage implements OnInit {
  public nombre: string = 'Frederick Samir Durán Parra';
  public cedula: string = 'V-30.346.056';
  public carrera: string = 'Informática — Ingeniería';
  public institucion: string = ''; // Reemplazado visualmente en el HTML
  public githubUrl: string = 'https://github.com/ragnarsson03';

  constructor() { }
  ngOnInit(): void { }
}
