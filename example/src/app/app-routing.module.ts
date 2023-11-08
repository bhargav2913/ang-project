import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Students',
    loadChildren: () => import('./student/student-component.module').then(m => m.StudentComponentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

