import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Products } from '../../../types/products.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButton],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  product = input<Products | null>(null)

  form!: FormGroup

  @Output() done = new EventEmitter<Products>()

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl<string >(this.product()?.title ?? "", {nonNullable: true, validators: Validators.required}),
      price: new FormControl<number>(this.product()?.price ?? 0),  
    })
  }

  onSubmit() {
    const product = this.form.value as Products
    this.done.emit(product)
  }
}
