import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';
import { RegisterPageComponent } from './features/register-page/register-page.component';
import { HomepageComponent } from './features/homepage/homepage.component';

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
  {
    path: 'register',
    component: RegisterPageComponent,
    loadChildren: () =>
      import('./features/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    loadChildren: () =>
      import('./features/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
