import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="bg-transparent px-4 pt-4">
        <ion-menu-button slot="start" class="text-white"></ion-menu-button>
        <ion-title class="font-bold text-white tracking-tight">Perfil</ion-title>
        <!-- Logo UNETI en el Header -->
        <ion-thumbnail slot="end" class="mr-2 w-8 h-8">
          <img src="assets/logo_uneti_fondo_negro.jpeg" class="rounded-full shadow-md">
        </ion-thumbnail>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="px-6 pb-12">
        <div class="flex flex-col items-center py-8 animate__animated animate__fadeIn">
          <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700/50 mb-4 shadow-xl">
            <img src="assets/logo_uneti_fondo_negro.jpeg" alt="UNETI" class="w-full h-full object-cover">
          </div>
          <h1 class="text-3xl font-extrabold text-white text-center">{{ nombre }}</h1>
          <div class="h-1 w-16 bg-blue-500 rounded-full mt-3 mb-2 animate__animated animate__stretch"></div>
          <p class="text-sm text-blue-400 mt-1 uppercase tracking-widest font-semibold text-center">{{ carrera }}</p>
        </div>

        <h2 class="text-xs uppercase tracking-widest text-blue-400 font-bold mb-6">Datos Personales & Académicos</h2>

        <div class="space-y-4">
            
            <!-- Cédula -->
            <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
               <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                  <ion-icon name="id-card-outline" class="text-2xl text-blue-400"></ion-icon>
               </div>
               <div class="ml-4">
                  <h3 class="text-white font-bold text-lg">{{ cedula }}</h3>
                  <p class="text-gray-500 text-xs uppercase tracking-wider">Cédula de Identidad</p>
               </div>
            </div>

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

            <!-- Institución con Logo Oficial -->
            <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
               <div class="w-12 h-12 rounded-2xl bg-black overflow-hidden border border-slate-700/50 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img src="assets/logo_uneti_fondo_negro.jpeg" class="w-full h-full object-cover">
               </div>
               <div class="ml-4">
                  <h3 class="text-white font-bold">{{ institucion }}</h3>
                  <p class="text-gray-500 text-xs uppercase tracking-wider">Institución Matriz</p>
               </div>
            </div>

            <!-- GitHub -->
            <a [href]="githubUrl" target="_blank" class="no-underline block">
              <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
                 <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                    <ion-icon name="logo-github" class="text-2xl text-white"></ion-icon>
                 </div>
                 <div class="ml-4">
                    <h3 class="text-white font-bold">ragnarsson03</h3>
                    <p class="text-blue-400 text-xs uppercase tracking-wider">Ver en GitHub</p>
                 </div>
                 <ion-icon name="open-outline" class="ml-auto text-gray-500"></ion-icon>
              </div>
            </a>
            
            <!-- Stack de Desarrollo (Chips UI) -->
            <div class="group flex flex-col p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300">
               <div class="flex items-center">
                   <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                      <ion-icon name="hardware-chip-outline" class="text-2xl text-blue-400"></ion-icon>
                   </div>
                   <div class="ml-4">
                      <h3 class="text-white font-bold">Stack de Desarrollo</h3>
                      <p class="text-gray-500 text-xs uppercase tracking-wider">Tecnologías Base</p>
                   </div>
               </div>
               <div class="flex gap-2 mt-4 ms-2">
                 <span class="px-3 py-1.5 bg-red-500/10 text-red-400 text-[10px] uppercase font-extrabold rounded-xl border border-red-500/20 shadow-sm shadow-red-900/20">Angular</span>
                 <span class="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-extrabold rounded-xl border border-blue-500/20 shadow-sm shadow-blue-900/20">Ionic</span>
                 <span class="px-3 py-1.5 bg-teal-500/10 text-teal-400 text-[10px] uppercase font-extrabold rounded-xl border border-teal-500/20 shadow-sm shadow-teal-900/20">Tailwind</span>
               </div>
            </div>

        </div>
      </div>
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
