
interface IRecurrenceType {
    RecurrenceType?: number;
    MerchantInitiatedPayment?: number;
    RecurringPayment?: number;
}

/**
 * Indicates the type of recurrence that the payment represents.
 */
export default class RecurrenceType {

    /**
     * The purchase is initiated by the customer on the merchant's website,
     * but instead of redirecting the customer to the Barion Smart Gateway
     * the recurrence Id is used for a more convenient payment flow.
     */
    RecurrenceType: number = 0;

    /**
     * The customer authorizes the merchant to charge her in the future.
     * Subsequent payments are initiated by the merchant and the
     * customer is not present for these purchases.
     */
    MerchantInitiatedPayment: number = 0;

    /**
     * The customer authorizes the merchant to charge for the
     * services/products periodically, typically in case of subscriptions.
     * Subsequent payments are initiated by the merchant and the customer
     * is not present during these payment. Subsequent charges can only
     * be the same or lower as the initial amount.
     */
     RecurringPayment: number = 0;

     constructor(o?: IRecurrenceType) {
         if (o) {
            this.RecurrenceType = o.RecurrenceType || 0;
            this.MerchantInitiatedPayment = o.MerchantInitiatedPayment || 0;
            this.RecurringPayment = o.RecurringPayment || 0;
         }
     }
}