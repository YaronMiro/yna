/**
* Declare the Product type structure.
*
* @property id: Product ID.
* @property title: Product title.
* @property isChecked: Flag to mark the product.
* @property quantity: Product quantity.
* @property price: Product price.
* @property description: Product description.
* @type Product
* @return Product {object}
*/
export interface Product {
    id: number;
    title: string;
    isChecked: boolean;
    quantity?: number;
    price?: string;
    description?: string;
}
