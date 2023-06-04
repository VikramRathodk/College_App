import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes)
  },
  {
    path: 'vision',
    loadComponent: () => import('./Vision-Mission/vision-mission.page').then( m => m.VisionMissionPage)
  },
  {
    path: 'faculty',
    loadComponent: () => import('./faculty/faculty.page').then( m => m.FacultyPage)
  },
  {
    path: 'department',
    loadComponent: () => import('./department/department.page').then( m => m.DepartmentPage)
  },
  {
    path: 'timetable',
    loadComponent: () => import('./timetable/timetable.page').then( m => m.TimetablePage)
  },
  {
    path: 'placement',
    loadComponent: () => import('./placement/placement.page').then( m => m.PlacementPage)
  },
  {
    path: 'message-hod',
    loadComponent: () => import('./message-hod/message-hod.page').then( m => m.MessageHODPage)
  },

];

