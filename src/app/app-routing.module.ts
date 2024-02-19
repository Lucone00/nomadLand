import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'home', component: WelcomePageComponent },
  {
    path: 'welcome',
    component: WelcomePageComponent,
    loadChildren: () =>
      import('./features/welcome-page/welcome-page.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'login',
    component: LoginPageComponent,
    loadChildren: () =>
      import('./features/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
