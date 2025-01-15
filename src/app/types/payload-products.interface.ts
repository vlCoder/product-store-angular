import { Products } from "./products.interface"

export type PayloadProducts = Omit<Products, 'id'>

