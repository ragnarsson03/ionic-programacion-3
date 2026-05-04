import { Component, OnInit } from '@angular/core';
import { IonicModule }       from '@ionic/angular';
import { CommonModule }      from '@angular/common';

@Component({
  selector:   'app-profile',
  standalone: true,
  imports:    [ IonicModule, CommonModule ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar color="primary">
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title>Info Personal</ion-title>
        <!-- Logo UNETI en el Header -->
        <ion-thumbnail slot="end" class="mr-2 w-8 h-8">
          <img src="assets/logo_uneti_fondo_negro.jpeg" class="rounded-full">
        </ion-thumbnail>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">

      <div class="flex flex-col items-center py-8 animate__animated animate__fadeIn">
        <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 mb-4 shadow-xl">
          <img src="assets/logo_uneti_fondo_blanco.jpeg" alt="UNETI" class="w-full h-full object-cover">
        </div>
        <h1 class="text-2xl font-bold">{{ nombre }}</h1>
        <p class="text-sm opacity-60 mt-1 uppercase tracking-widest">{{ carrera }}</p>
      </div>

      <ion-card class="m-4 rounded-3xl overflow-hidden shadow-lg border border-gray-100 animate__animated animate__slideInUp">
        <ion-card-header class="bg-blue-50">
          <ion-card-title class="text-blue-800">Datos Académicos</ion-card-title>
        </ion-card-header>
        <ion-card-content class="p-0">
          <ion-list lines="full">
            <ion-item>
              <ion-icon name="id-card-outline" slot="start" color="primary"></ion-icon>
              <ion-label>
                <h3 class="font-semibold text-gray-500">Cédula</h3>
                <p class="text-lg text-black">{{ cedula }}</p>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="school-outline" slot="start" color="secondary"></ion-icon>
              <ion-label>
                <h3 class="font-semibold text-gray-500">Institución</h3>
                <p class="text-sm text-black">{{ institucion }}</p>
              </ion-label>
            </ion-item>

            <ion-item button [href]="githubUrl" target="_blank">
              <ion-icon name="logo-github" slot="start" color="dark"></ion-icon>
              <ion-label>
                <h3 class="font-semibold text-gray-500">GitHub</h3>
                <p class="text-blue-600">github.com/ragnarsson03</p>
              </ion-label>
              <ion-note slot="end">Visitar</ion-note>
            </ion-item>

            <ion-item>
              <ion-icon name="code-slash-outline" slot="start" color="success"></ion-icon>
              <ion-label>
                <h3 class="font-semibold text-gray-500">Stack</h3>
                <p class="text-black italic">Angular · Ionic · Tailwind</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

    </ion-content>
  `,
})
export class ProfilePage implements OnInit {
  public nombre:      string = 'Frederick Samir Durán Parra';
  public cedula:      string = 'V-30.346.056';
  public carrera:     string = 'Informática — Ingeniería';
  public institucion: string = 'UNETI';
  public githubUrl:   string = 'https://github.com/ragnarsson03';

  constructor() {}
  ngOnInit(): void {}
}
