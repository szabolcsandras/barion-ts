import Item from "./Item";
import PayeeTransaction from "./PayeeTransaction";

interface IPaymentTransaction {
    POSTransactionId?: string;
    Payee?: string;
    Total?: number;
    Comment?: string;
    PayeeTransactions?: PayeeTransaction[],
    Items?: Item[],
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class PaymentTransaction {

    /**
     * The unique identifier of the transaction at the shop that started the payment.
     */
    POSTransactionId: string = "";

    /**
     * The recipient user of the transaction. This Barion wallet receives the
     * money when the payment is completed by the payer.
     */
    Payee: string = "";

    /**
     * The total amount of the transaction.
     */
    Total: number = 0;

    /**
     * Comment of the transaction. This is shown to the recipient.
     */
    Comment: string = "";

    /**
     * An array containing possible sub-transactions, which are executed after
     * the payment was completed.
     */
    PayeeTransactions: PayeeTransaction[] = [];

    /**
     * An array containing the items (products or services) included
     * in the transaction.
     */
    Items: Item[] = [];

    constructor(o?: IPaymentTransaction | any) {
         if (o) {
                this.POSTransactionId = o.POSTransactionId || "";
                this.Payee = o.Payee || "";
                this.Total = o.Total || 0;
                this.Comment = o.Comment || "";
            if (o.PayeeTransactions) {
                this.PayeeTransactions =
                    o.PayeeTransactions.map((t: unknown) => new PayeeTransaction(t));
            }
            if (o.Items) {
                this.Items =
                    o.Items.map((t: unknown) => new Item(t));
            }
         }
     }
}