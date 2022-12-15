interface IPaymentCompletion {
    PaymentId?: string;
    PaymentRequestId?: string;
    PaymentStatus?: string;
    IsSuccessful?: boolean;
    TraceId?: string;
}

export default class PaymentCompletion {

    /**
     * The identifier of the payment in the Barion system.
     */
    PaymentId: string = "";

    /**
     * The identifier of the payment in the shop's system.
     */
    PaymentRequestId: string = "";

    /**
     * The status of the payment in the Barion system.
     */
    PaymentStatus: string = "";

    /**
     * Indicates whether the charge was successful
     */
    IsSuccessful: boolean = false;

    /**
     * Identifies the nature of the token payment.
     */
    TraceId: string = "";

    constructor(o?: IPaymentCompletion | any) {
         if (o) {
            this.PaymentId = o.PaymentId || "";
            this.PaymentRequestId = o.PaymentRequestId || "";
            this.PaymentStatus = o.PaymentStatus || "";
            this.IsSuccessful = o.IsSuccessful === true;
            this.TraceId = o.TraceId || "";
         }
     }
}