import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../Home/Home.page').then(m => m.HomePage)
      },
      {
        path: 'feedback',
        loadComponent: () => import('../Feedback/Feedback.page').then(m => m.FeedBackPage)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

