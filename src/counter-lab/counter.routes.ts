import { Routes } from '@angular/router';
import { Counter } from './counter';
import { CounterUI } from './pages/ui';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: Counter,
    children: [
      {
        path: 'ui',
        component: CounterUI,
      },
    ],
  },
];
