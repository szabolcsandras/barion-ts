
interface IBankCard {
    MaskedPan?: string;
    BankCardType?: string;
    ValidThruYear?: string;
    ValidThruMonth?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class BankCard {

    /**
     * The last four digits of the card number.
     */
    MaskedPan: string = "";

    /**
     * The type of the bank card.
     */
    BankCardType: string = "";

    /**
     * The 4-digit year part of the card validity date.
     */
    ValidThruYear: string = "";

    /**
     * The 2-digit month part of the card validity date.
     */
    ValidThruMonth: string = "";

    constructor(o?: IBankCard) {
         if (o) {
            this.MaskedPan = o.MaskedPan || "";
            this.BankCardType = o.BankCardType || "";
            this.ValidThruYear = o.ValidThruYear || "";
            this.ValidThruMonth = o.ValidThruMonth || "";
         }
     }
}