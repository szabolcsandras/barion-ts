
interface IItem {
    Name?: string;
    Description?: string;
    ImageUrl?: string;
    Quantity?: number;
    Unit?: string;
    UnitPrice?: number;
    ItemTotal?: number;
    SKU?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class Item {

    /**
     * The short name of the item. This is shown to the payer on the Barion Smart Gateway.
     */
    Name: string = "";

    /**
     * The detailed description of the item. This is NOT shown to the payer on
     * the Barion Smart Gateway.
     */
    Description: string = "";

    /**
     * 	A URL pointing to an image that shows the item. This is optional and available
     * for UX purposes only.
     */
    ImageUrl: string = "";
   
    /**
     * The total quantity of the item.
     */
    Quantity: number = 0;

    /**
     * The measurement unit of the item.
     */
    Unit: string = "";

    /**
     * The price of one measurement unit of the item. It can be any value, even negative
     * if it indicates e.g. discount.
     */
    UnitPrice: number = 0;

    /**
     * he total price of the item. This is not necessarily equals Quanitity × UnitPrice.
     * Pricing can be determined freely by the shop.
     */
    ItemTotal: number = 0;

    /**
     * The SKU value of the item in the shop's inventory system.
     */
    SKU: string = "";

    constructor(o?: IItem | any) {
         if (o) {
            this.Name = o.Name || "";
            this.Description = o.Description || "";
            this.ImageUrl = o.ImageUrl || "";
            this.Quantity = o.Quantity || 0;
            this.Unit = o.Unit || "";
            this.UnitPrice = o.UnitPrice || 0;
            this.ItemTotal = o.ItemTotal || 0;
            this.SKU = o.SKU || "";
         }
     }
}