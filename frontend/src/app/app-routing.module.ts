import { NgModule }            from '@angular/core';
import { PreloadAllModules,
         RouterModule,
         Routes }              from '@angular/router';

/**
 * @const routes
 * @description Definición de rutas de la aplicación usando la API moderna de Angular.
 *
 * ┌─ LAZY LOADING CON STANDALONE COMPONENTS ───────────────────────────────┐
 * │ Antes (con NgModules):                                                  │
 * │   loadChildren: () => import('./home/home.module').then(m => m.Module) │
 * │                                                                         │
 * │ Ahora (con Standalone Components):                                      │
 * │   loadComponent: () => import('./home/home.page').then(c => c.HomePage) │
 * │                                                                         │
 * │ Beneficios:                                                             │
 * │ → Eliminamos home.module.ts y home-routing.module.ts (6 archivos menos) │
 * │ → Carga diferida (Lazy Loading) sigue funcionando igual                 │
 * │ → El bundle inicial de la app es más pequeño                            │
 * └────────────────────────────────────────────────────────────────────────┘
 */
const routes: Routes = [
  {
    // Redirige la raíz vacía '' directamente a /home
    path:         '',
    redirectTo:   'home',
    pathMatch:    'full'
  },
  {
    // loadComponent: Carga el componente HomePage de forma diferida (Lazy Loading).
    // El import() solo se ejecuta cuando el usuario navega a esta ruta.
    path:          'home',
    loadComponent: () => import('./pages/home/home.page').then(c => c.HomePage)
  },
  {
    path:          'profile',
    loadComponent: () => import('./pages/profile/profile.page').then(c => c.ProfilePage)
  },
  {
    path:          'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(c => c.ContactPage)
  }
];

@NgModule({
  imports:  [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports:  [ RouterModule ]
})
export class AppRoutingModule {}
