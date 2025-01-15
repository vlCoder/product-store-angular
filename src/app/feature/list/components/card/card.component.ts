import { Component, computed, input, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Products } from '../../../../types/products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  product = input.required<Products>()

  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()

  productTitle = computed(() => this.product().title)
  productPrice = computed(() => this.product().price)

  onEdit() {
    this.edit.emit()
  }

  onDelete() {
    this.delete.emit()
  }

}
