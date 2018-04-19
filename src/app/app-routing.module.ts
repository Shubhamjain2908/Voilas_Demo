import { PlaceholderComponent } from './common/placeholder/placeholder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

const routes: Routes = [
  // Dashboard navigation tree
  {
    path: 'dashboard',
    component: PlaceholderComponent,
    data: {
      breadcrumbs: 'Dashboard'
    }
  },
  // Admin navigation tree
  {
    path: 'admin',
    data: {
      breadcrumbs: 'Administration'
    },
    children: [
      // Default child route
      {
        path: '', redirectTo: 'system', pathMatch: 'full'
      },
      // Dummy admin routes
      {
        path: 'system',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'System Configuration'
        },
      },
      {
        path: 'queue',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'Queue Management'
        },
      },
      {
        path: 'user',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'User Management'
        },
      },
      {
        path: 'data',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'Reference Data'
        },
      },
      {
        path: 'project',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'Project Configuration'
        },
      },
      {
        path: 'training',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'Training'
        },
      },
      {
        path: 'test/:id',
        component: PlaceholderComponent,
        data: {
          breadcrumbs: 'Admin test subroute...'
        },
      }
    ]
  },
  // Settings navigation tree
  {
    path: 'settings',
    component: PlaceholderComponent,
    data: {
      breadcrumbs: 'Settings'
    }
  },
  // Dummy routes
  {
    path: 'test/:id',
    component: PlaceholderComponent,
    data: {
      breadcrumbs: 'Test route'
    }
  },
  // Default route
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  // 404
  { path: '**', redirectTo: '/admin' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), McBreadcrumbsModule.forRoot()],
  exports: [RouterModule, McBreadcrumbsModule]
})
export class AppRoutingModule { }
