/**
* The Product type structure.
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
export class Product {
    id: number;
    title: string | null = null;
    isChecked = false;
    quantity?: number | null = null;
    price?: string | null = null;
    description?: string | null = null;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
