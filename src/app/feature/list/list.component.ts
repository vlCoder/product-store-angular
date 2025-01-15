import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Products } from '../../types/products.interface';
import { CardComponent } from './components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { NoItemsComponent } from './components/no-items/no-items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Products[]>(
    inject(ActivatedRoute).snapshot.data['products']

  );

  productsService  = inject( ProductsService )
  router = inject( Router )
  dialogService = inject(ConfirmationDialogService)

  onEdit(product: Products) {
    this.router.navigate(['/edit-product', product.id])
  }

  onDelete(product: Products) {
    this.dialogService.openDialog()
    .pipe(filter(answer => answer === true))
    .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => this.products.set(products))
        })
    })
  }
}
