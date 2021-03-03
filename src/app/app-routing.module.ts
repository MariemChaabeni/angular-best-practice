import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './main/users/users.component';
import { GalerieComponent } from './main/galerie/galerie.component';
import { FaqComponent } from './main/faq/faq.component';
const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  {
    path: 'galery',
    component: GalerieComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
