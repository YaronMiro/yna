/**
* The Product type structure.
*
* @property id: Product ID.
* @property title: Product title.
* @property isChecked: Flag to mark the product as checked.
* @property quantity: Product quantity.
* @property price: Product price.
* @property description: Product description.
* @type Product
* @return Product {object}
*/
export class Product {
    id: number;
    title = '';
    isChecked = false;
    quantity?: string | null = null;
    price?: string | null = null;
    description?: string | null = null;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
