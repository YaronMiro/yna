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
    title = '';
    isChecked = false;
    quantity?: number | null;
    price?: string | null;
    description?: string | null;

    constructor(productData: Object = {}) {
        Object.assign(this, productData);
      }
}
