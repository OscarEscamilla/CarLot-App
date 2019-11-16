import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NoLoginGuard} from './guards/no-login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate : [NoLoginGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' , canActivate : [AuthGuard] },
    { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule'},
    { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
    { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
    { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' },
  { path: 'detallepark', loadChildren: './pages/detallepark/detallepark.module#DetalleparkPageModule' },
  { path: 'registrouser', loadChildren: './pages/registrouser/registrouser.module#RegistrouserPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
