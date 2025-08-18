import { Routes } from '@angular/router';
import { Demos } from './demos';
import { BasicSignals } from './pages/basic-signals';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: Demos,
    children: [
      {
        path: 'basic-signals',
        component: BasicSignals,
      },
    ],
  },
];
