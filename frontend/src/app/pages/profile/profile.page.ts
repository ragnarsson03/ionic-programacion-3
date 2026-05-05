import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-content>
      <main class="md:pl-72 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen bg-background">
        <div class="px-4 md:px-lg max-w-7xl mx-auto w-full py-6 md:py-10 animate__animated animate__fadeIn">
          
          <!-- Header Banner -->
          <div class="relative w-full h-48 md:h-64 mb-20">
            <!-- Capa con overflow oculto solo para la imagen de fondo -->
            <div class="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900">
              <img src="https://lh3.googleusercontent.com/aida/ADBb0ujy80Uonk5knF-imhlSgaYZDuC_zB_oV1RbbXsxPMzLIxgreZpMVEgVlwY5rdUzPBtnZYd2vZf6dmcSeOdSXcRSx5_OvA8xujtDkdD8UWmFbFxanygdssR9P7WfjPIrRS5G-B0QTGA3TeFiB299plZLIOWC0c5n95wqOdbU68cDkcxHkb9MtJUMPJ8L46nRro0pu2MwtK4_lFV3WQpqCM7gRp9dhzLnFn5YxQ214XmUFFOkneayJBqOs9dx6A2q7EEjk0eo-zN2_As" alt="Profile Header Banner" class="w-full h-full object-cover">
            </div>
            
            <!-- Avatar overlapping libre del overflow parent -->
            <div class="absolute -bottom-16 left-6 md:left-12 flex items-end gap-6 z-10">
              <div class="w-32 h-32 rounded-full border-4 border-white bg-surface shadow-md overflow-hidden flex items-center justify-center">
                <img src="assets/logo_uneti_fondo_negro.jpeg" alt="Avatar" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <div class="mt-4 mb-10 md:ml-48 px-2 md:px-0">
            <h1 class="font-display text-4xl font-extrabold text-slate-900">{{ nombre }}</h1>
            <p class="font-headline-md text-xl text-slate-500 mt-2">{{ carrera }}</p>
          </div>

          <!-- Bento Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            <!-- Personal & Academic Data Card -->
            <div class="col-span-1 md:col-span-2 bg-white rounded-xl p-md shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                <span class="material-symbols-outlined text-blue-600">badge</span> Datos Académicos
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 uppercase tracking-wider mb-1">Cédula</span>
                  <span class="text-lg text-slate-800 font-medium">{{ cedula }}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 uppercase tracking-wider mb-1">WhatsApp</span>
                  <span class="text-lg text-slate-800 font-medium">+58 414-9083826</span>
                </div>
                <div class="flex flex-col sm:col-span-2">
                  <span class="text-xs text-slate-400 uppercase tracking-wider mb-1">Institución</span>
                  <div class="flex items-center gap-3 mt-1 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span class="material-symbols-outlined text-blue-600">account_balance</span>
                    <span class="text-lg text-slate-800 font-medium">{{ institucion }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Development Stack Card -->
            <div class="col-span-1 bg-white rounded-xl p-md shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                <span class="material-symbols-outlined text-blue-600">code</span> Stack Tecnológico
              </h2>
              <div class="flex flex-col gap-4">
                <div class="text-xs text-slate-400 uppercase tracking-wider">Librerías Base</div>
                <div class="flex flex-wrap gap-2">
                  <span class="px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-lg flex items-center gap-2 border border-red-100">
                    <span class="material-symbols-outlined text-sm">integration_instructions</span> Angular
                  </span>
                  <span class="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg flex items-center gap-2 border border-blue-100">
                    <span class="material-symbols-outlined text-sm">devices</span> Ionic
                  </span>
                  <span class="px-4 py-2 bg-teal-50 text-teal-700 text-sm font-semibold rounded-lg flex items-center gap-2 border border-teal-100">
                    <span class="material-symbols-outlined text-sm">waves</span> Tailwind
                  </span>
                </div>
              </div>
            </div>

            <!-- External Links Card -->
            <div class="col-span-1 md:col-span-3 bg-white rounded-xl p-md shadow-sm border border-slate-100 hover:shadow-md transition-shadow mt-4 md:mt-0">
              <h2 class="font-title-lg text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                <span class="material-symbols-outlined text-blue-600">link</span> Enlaces Externos
              </h2>
              <a [href]="githubUrl" target="_blank" class="inline-flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-slate-50 transition-colors w-full sm:w-auto no-underline">
                <span class="material-symbols-outlined text-slate-700">code</span>
                <div class="flex flex-col">
                  <span class="text-xs text-slate-400 font-medium">GitHub</span>
                  <span class="text-blue-600 font-medium">ragnarsson03</span>
                </div>
                <span class="material-symbols-outlined text-slate-300 ml-auto sm:ml-8">arrow_forward</span>
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
  public institucion: string = 'UNETI';
  public githubUrl: string = 'https://github.com/ragnarsson03';

  constructor() { }
  ngOnInit(): void { }
}
