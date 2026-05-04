import { Component, OnInit } from '@angular/core';
import { IonicModule }       from '@ionic/angular';
import { CommonModule }      from '@angular/common';
import { StackItem }         from '../../core/models';

@Component({
  selector:    'app-home',
  standalone:  true,
  imports:     [ IonicModule, CommonModule ],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="bg-transparent px-4 pt-4">
        <ion-menu-button slot="start" class="text-white"></ion-menu-button>
        <ion-title class="font-bold text-white tracking-tight">Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="px-6 pb-12">
        
        <!-- Header de Bienvenida con Gradiente -->
        <div class="mt-8 mb-10 welcome-pop">
           <h1 class="text-4xl font-extrabold text-white leading-tight">
             {{ saludo }}
           </h1>
           <div class="h-1 w-20 bg-blue-500 rounded-full mt-4 animate__animated animate__stretch"></div>
           <p class="text-gray-400 mt-6 text-lg leading-relaxed font-light">
             {{ descripcion }}
           </p>
        </div>

        <!-- Sección de Stack con tarjetas tipo Glassmorphism -->
        <h2 class="text-xs uppercase tracking-widest text-blue-400 font-bold mb-6">Stack Tecnológico</h2>
        
        <div class="space-y-4">
          @for (item of stackItems; track item.nombre) {
            <div class="group flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-3xl backdrop-blur-md hover:bg-slate-700/50 transition-all duration-300 animate__animated animate__fadeInUp">
               <div class="p-3 rounded-2xl bg-slate-900 group-hover:scale-110 transition-transform">
                  <ion-icon [name]="item.icono" [color]="item.color" class="text-2xl"></ion-icon>
               </div>
               <div class="ml-4">
                  <h3 class="text-white font-bold">{{ item.nombre }}</h3>
                  <p class="text-gray-500 text-xs">{{ item.descripcion }}</p>
               </div>
               <ion-icon name="chevron-forward" class="ml-auto text-gray-700"></ion-icon>
            </div>
          }
        </div>

      </div>
    </ion-content>
  `,
})
export class HomePage implements OnInit {
  public saludo: string = 'Bienvenido, Frederick 👋🏻';
  public descripcion: string = 'Estás en el búnker de Programación III. Una arquitectura modular, tipado estricto y diseño premium.';
  
  public stackItems: StackItem[] = [
    { nombre: 'Ionic v8',        descripcion: 'Componentes UI Híbridos', icono: 'phone-portrait-outline', color: 'primary'   },
    { nombre: 'Angular v20',     descripcion: 'Standalone Architecture', icono: 'logo-angular',           color: 'danger'    },
    { nombre: 'Tailwind CSS v3', descripcion: 'Utility-first Design',    icono: 'color-palette-outline',  color: 'secondary' },
    { nombre: 'Dart Sass',       descripcion: 'Modular Style System',    icono: 'layers-outline',         color: 'tertiary'  },
    { nombre: 'Animate.css',     descripcion: 'Motion Design',           icono: 'sparkles-outline',       color: 'warning'   }
  ];

  constructor() {}
  ngOnInit(): void {}
}
