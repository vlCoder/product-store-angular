import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Products } from '../../types/products.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, RouterLink, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productsService  = inject( ProductsService )
  matSnackBar = inject( MatSnackBar )
  router = inject( Router )

  product: Products = inject(ActivatedRoute).snapshot.data['product']

  onSubmit(product: Products) {
    this.productsService
      .put(this.product.id, product)
      .subscribe(() => {
        this.matSnackBar.open('Produto editado com sucesso!', 'Fechar')
        this.router.navigate(['/'])
      })
  }
}
