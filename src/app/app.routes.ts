import { Routes } from '@angular/router';
import { Welcome } from './pages/statics/welcome/welcome';
import { ProductList } from './pages/statics/products/product-list/product-list';
import { ProductDetails } from './pages/dynamics/products/product-details/product-details';

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: Welcome },
    { path: 'welcome', component: Welcome },
    { path: 'products', component: ProductList,
        children: [
            { 
                path: 'list',
                loadComponent: () => import('./pages/dynamics/products/product-list/product-list').then(m => m.ProductList) },
            { path: 'details', component: ProductDetails }
        ]
     },
    {
        path: 'dashboard',
        loadComponent: () =>
        import('./pages/dashboard/dashboard-overview/dashboard-overview').then(m => m.DashboardOverview),
        children: [
        // Add more dashboard feature routes here
        ],
    },
    { path: '**',
        loadComponent: () => import('./pages/dynamics/not-found/not-found').then(m => m.NotFound)
    }
];
