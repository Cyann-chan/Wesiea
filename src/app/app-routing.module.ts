import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'bde',
    loadChildren: () => import('./bde/bde.module').then( m => m.BDEPageModule)
  },
  {
    path: 'bda',
    loadChildren: () => import('./bda/bda.module').then( m => m.BdaPageModule)
  },
  {
    path: 'bds',
    loadChildren: () => import('./bds/bds.module').then( m => m.BdsPageModule)
  },
  {
    path: 'kps',
    loadChildren: () => import('./kps/kps.module').then( m => m.KpsPageModule)
  },
  {
    path: 'bdj',
    loadChildren: () => import('./bdj/bdj.module').then( m => m.BdjPageModule)
  },
  {
    path: 'assointer',
    loadChildren: () => import('./assointer/assointer.module').then( m => m.AssointerPageModule)
  },
  {
    path: 'airesiea',
    loadChildren: () => import('./airesiea/airesiea.module').then( m => m.AiresieaPageModule)
  },
  {
    path: 'dtre',
    loadChildren: () => import('./dtre/dtre.module').then( m => m.DtrePageModule)
  },
  {
    path: 'rec',
    loadChildren: () => import('./rec/rec.module').then( m => m.RecPageModule)
  },
  {
    path: 'asso-paris',
    loadChildren: () => import('./asso-paris/asso-paris.module').then( m => m.AssoParisPageModule)
  },
  {
    path: 'asso-laval',
    loadChildren: () => import('./asso-laval/asso-laval.module').then( m => m.AssoLavalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
