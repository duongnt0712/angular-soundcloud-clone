import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
