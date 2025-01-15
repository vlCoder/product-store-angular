import { Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { getProducts } from './shared/resolvers/get-products.resolver';
import { getProduct } from './shared/resolvers/get-product.resolver';

export const routes: Routes = [
    {
        path:'',
        resolve:{
            products: getProducts
        },
        component: ListComponent, 
    },
    {   
        path:'create-product',
        loadComponent: () => import ('./feature/create/create.component').then(m => m.CreateComponent) //CreateComponent
    },
    {
        path:'edit-product/:id',
        resolve: {
            product: getProduct
        },
        loadComponent: () => import ('./feature/edit/edit.component').then(m => m.EditComponent)
    }
];
