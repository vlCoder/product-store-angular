import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
    {
        path:'',
        resolve:{
            products:() => {
                const productsService = inject(ProductsService)
                return productsService.getAll();
            }
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
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
               const productsService = inject(ProductsService)
               return productsService.get(route.paramMap.get('id') as string)
            }
        },
        loadComponent: () => import ('./feature/edit/edit.component').then(m => m.EditComponent)
    }
];
