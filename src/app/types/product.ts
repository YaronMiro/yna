/**
* Declare the Product type structure.
*
* @property id: Product ID - existing product: number || new product: null.
* @property title: Product title - existing product: string || new product: null.
* @property isChecked: Flag to mark the product as isCheckedd.
* @property quantity: Product quantity.
* @property price: Product price.
* @property description: Product description.
* @type Product
* @return Product {object}
*/
export interface Product {
    id: number | null;
    title: string | null;
    isChecked: boolean;
    quantity?: number;
    price?: string;
    description?: string;
}
