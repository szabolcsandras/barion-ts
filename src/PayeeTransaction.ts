
interface IPayeeTransaction {
    POSTransactionId?: string;
    Payee?: string;
    Total?: number;
    Comment?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class PayeeTransaction {

    /**
     * The unique identifier of the transaction at the shop that started the payment.
     */
    POSTransactionId: string = "";

    /**
     * The recipient's e-mail address.
     */
    Payee: string = "";

    /**
     *
     */
    Total: number = 0;

    /**
     * Comment of the transaction. This is shown to the recipient.
     */
    Comment: string = "";

     constructor(o?: IPayeeTransaction | any) {
         if (o) {
            this.POSTransactionId = o.POSTransactionId || "";
            this.Payee = o.Payee || "";
            this.Total = o.Total || 0;
            this.Comment = o.Comment || "";
         }
     }
}