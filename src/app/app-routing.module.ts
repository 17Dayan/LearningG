import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./users/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'modalidad',
    loadChildren: () => import('./modalidad/modalidad.module').then( m => m.ModalidadPageModule)
  },
  {
    path: 'instruccion',
    loadChildren: () => import('./instruccion/instruccion.module').then( m => m.InstruccionPageModule)
  },
  {
    path: 'juego',
    loadChildren: () => import('./juego/juego.module').then( m => m.JuegoPageModule)
  },
  {
    path: 'monografia',
    loadChildren: () => import('./monografia/monografia.module').then( m => m.MonografiaPageModule)
  },
  {
    path: 'postgrado',
    loadChildren: () => import('./postgrado/postgrado.module').then( m => m.PostgradoPageModule)
  },
  {
    path: 'pasantia-nacional',
    loadChildren: () => import('./pasantia-nacional/pasantia-nacional.module').then( m => m.PasantiaNacionalPageModule)
  },
  {
    path: 'investigacion',
    loadChildren: () => import('./investigacion/investigacion.module').then( m => m.InvestigacionPageModule)
  },
  {
    path: 'sem-internacional',
    loadChildren: () => import('./sem-internacional/sem-internacional.module').then( m => m.SemInternacionalPageModule)
  },
  {
    path: 'sem-actualizacion',
    loadChildren: () => import('./sem-actualizacion/sem-actualizacion.module').then( m => m.SemActualizacionPageModule)
  },
  {
    path: 'inv-creacion',
    loadChildren: () => import('./inv-creacion/inv-creacion.module').then( m => m.InvCreacionPageModule)
  },
  {
    path: 'juego2',
    loadChildren: () => import('./juego2/juego2.module').then( m => m.Juego2PageModule)
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
