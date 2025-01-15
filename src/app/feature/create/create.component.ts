import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Products } from '../../types/products.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productsService  = inject( ProductsService )

  matSnackBar = inject( MatSnackBar )

  router = inject( Router )


  // restrictToNumbers(event: KeyboardEvent): void {
  //   const allowedKeys = /^[0-9]$/;
  //   if (!allowedKeys.test(event.key)) {
  //     event.preventDefault(); // Bloqueia caracteres não numéricos
  //   }
  // }

  onSubmit(product: Products) {
    this.productsService.post(product).subscribe(()=>{
      console.log('Produto criado com sucesso!')
    })

    this.matSnackBar.open('Produto criado com sucesso!', 'Fechar')
    this.router.navigate(['/'])
    
  }
}
