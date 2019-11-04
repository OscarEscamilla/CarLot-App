import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
