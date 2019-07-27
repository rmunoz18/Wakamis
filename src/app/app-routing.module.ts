import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  {
    path: 'espanol',
    loadChildren: './espanol/espanol.module#EspanolComponentModule'
  },
  {
    path: 'kaqchikel',
    loadChildren: './kaqchikel/kaqchikel.module#KaqchikelComponentModule'
  },
  
  {
    path: 'kaquno',
    
    loadChildren: './kaquno/kaquno.module#KaqunoComponentModule'
  },
  
  {
    path: 'calendario',
  
      loadChildren: './calendario/calendario.module#CalendarioComponentModule'
      
  },

  {
    path: 'progreso',
      loadChildren: './progreso/progreso.module#ProgresoComponentModule'
  },
  
  {
    path: 'tienda',
    loadChildren: './tienda/tienda.module#TiendaComponentModule'

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
