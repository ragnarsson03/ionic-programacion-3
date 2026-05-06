import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StackItem } from '../../core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-content>
      <main class="md:pl-72 pt-16 md:pt-0 pb-20 md:pb-0 min-h-screen bg-background">
        <div class="px-4 md:px-lg max-w-7xl mx-auto w-full py-6 md:py-10 animate__animated animate__fadeIn">
          
          <!-- Hero Section -->
          <section class="mb-lg">
            <div class="relative w-full rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px] md:min-h-[280px] bg-slate-900 flex flex-col justify-end p-md md:p-lg">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10"></div>
              <!-- Imagen local como fondo si la API de google falla, o color plano -->
              <div class="absolute inset-0 w-full h-full object-cover z-0 bg-blue-900 opacity-50"></div>
              <div class="relative z-20 text-white">
                <h1 class="font-headline-lg text-headline-lg mb-xs">{{ saludo }}</h1>
                <p class="font-body-lg text-body-lg text-slate-300 max-w-2xl">{{ descripcion }}</p>
              </div>
            </div>
          </section>

          <!-- Stack Tecnológico Section (Bento Grid) -->
          <section>
            <div class="flex items-center justify-between mb-md">
              <h2 class="font-headline-md text-headline-md text-slate-900">Stack Tecnológico</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              @for (item of stackItems; track item.nombre) {
                <div class="bg-white rounded-xl p-md shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col h-full relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-110"></div>
                  <div class="relative z-10 flex-1">
                    <div class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-sm text-blue-600">
                      <ion-icon [name]="item.icono" class="text-[28px]"></ion-icon>
                    </div>
                    <h3 class="font-title-lg text-title-lg text-slate-900 mb-xs">{{ item.nombre }}</h3>
                    <p class="font-body-md text-body-md text-slate-500">{{ item.descripcion }}</p>
                  </div>
                </div>
              }
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

  // Actualizamos a IonIcons (los logos oficiales)
  public stackItems: StackItem[] = [
    { nombre: 'Ionic v8', descripcion: 'Componentes UI Híbridos', icono: 'logo-ionic', color: 'primary' },
    { nombre: 'Angular v20', descripcion: 'Standalone Architecture', icono: 'logo-angular', color: 'danger' },
    { nombre: 'Tailwind CSS v3', descripcion: 'Utility-first Design', icono: 'logo-css3', color: 'secondary' },
    { nombre: 'Dart Sass', descripcion: 'Modular Style System', icono: 'logo-sass', color: 'tertiary' },
    { nombre: 'Animate.css', descripcion: 'Motion Design', icono: 'color-wand-outline', color: 'warning' }
  ];

  constructor() { }
  ngOnInit(): void { }
}
