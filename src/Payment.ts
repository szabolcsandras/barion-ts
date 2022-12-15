import PaymentTransaction from "./PaymentTransaction";

interface IPayment {
    POSKey?: string;
    PaymentType?: string;
    ReservationPeriod?: string;
    DelayedCapturePeriod?: string,
    PaymentWindow?: string;
    GuestCheckOut?: boolean;
    InitiateRecurrence?: boolean;
    RecurrenceId?: string;
    FundingSources?: string[],
    PaymentRequestId?: string,
    RecurrenceType?: string,
    RedirectUrl?: string,
    CallbackUrl?: string,
    Transactions?: PaymentTransaction[],
    Locale?: string,
    Currency?: string,
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class Payment {

    /**
     * The secret API key of the shop, generated by Barion.
     */
    POSKey: string = "";

    /**
     * The type of payment. Accepted values: Immediate,
     * Reservation, DelayedCapture
     */
    PaymentType: string = "";

    /**
     * Only makes sense at reservation payments.
     * Format: TimeSpan (d.hh:mm:ss)
     * min: 1min, max: 1 year 
     * Default: 7days
     */
    ReservationPeriod: string = "";

    /**
     * This is the time window that allows the shop to complete (finalize) the payment.
     * Format: TimeSpan (d.hh:mm:ss)
     * min: 1min, max: 7days 
     * Default: 7days
     */
    DelayedCapturePeriod: string = "";

    /**
     * Time window for the payment to be completed. The payer must execute the payment
     * before this elapses, or else the payment will expire and can no
     * longer be completed.
     * Format: TimeSpan (d.hh:mm:ss)
     * min: 1min, max: 7days 
     * Default: 7days
     */
    PaymentWindow: string = "";

    /**
     * Flag indicating whether the payment can be completed without a registered
     * Barion wallet. 
     */
    GuestCheckOut: boolean = true;

    /**
     * This flag indicates that the shop would like to initialize a token payment.
     */
    InitiateRecurrence: boolean = true;

    /**
     * A string used to identify a given token payment. Its purpose is determined
     * by the value of the InitiateRecurrence property. Must be unique per
     * shop and per user. Required when executing token payments.
     */
    RecurrenceId: string = "";

    /**
     * An array of strings containing the allowed funding sources that can be used
     * to complete the payment.
     * Possible values: All, Balance, BankCard, GooglePay, ApplePay, BankTransfer
     */
    FundingSources: string[] = [];

    /**
     * The unique identifier for the payment generated by the shop.
     */
    PaymentRequestId: string = "";

    /**
     * The unique identifier for the payment generated by the shop. 
     */
    RecurrenceType: string = "";

    /**
     * The URL where the payer should be redirected after the payment is
     * completed or canceled.
     */
    RedirectUrl: string = "";

    /**
     * The URL where the Barion system sends a request whenever there is a change
     * in the state of the payment. 
     */
    CallbackUrl: string = "";

    /**
     * An array of payment transactions contained in the payment.
     */
    Transactions: PaymentTransaction[] = [];

    /**
     * This indicates in which language the Barion Smart Gateway should display
     * for the payer upon redirect.
     * Possible values: cs-CZ, de-DE, en-US, es-ES, fr-FR, hu-HU, sk-SK, sl-SI
     */
    Locale: string = "";

    /**
     * The currency of the payment. Must be supplied in ISO 4217 format.
     * This affects all transactions included in the payment; it is not possible
     * to define multiple transactions in different currencies.
     * Possible values: CZK, EUR, HUF, USD
     */
    Currency: string = "";

    constructor(o?: IPayment) {
         if (o) {
            this.POSKey = o.POSKey || "";
            this.PaymentType = o.PaymentType || "";
            this.ReservationPeriod = o.ReservationPeriod || "";
            this.DelayedCapturePeriod = o.DelayedCapturePeriod || "";
            this.PaymentWindow = o.PaymentWindow || "";
            this.GuestCheckOut = this.GuestCheckOut === true;
            this.InitiateRecurrence = this.InitiateRecurrence === true;
            this.RecurrenceId = o.RecurrenceId || "";
            this.FundingSources = o.FundingSources || [];
            this.PaymentRequestId = o.PaymentRequestId || "";
            this.RecurrenceType = o.RecurrenceType || "";
            this.RedirectUrl = o.RedirectUrl || "";
            this.CallbackUrl = o.CallbackUrl || "";
            if (o.Transactions) {
                this.Transactions =
                    o.Transactions.map(t => new PaymentTransaction(t));
            }
            this.Locale = o.Locale || "";
            this.Currency = o.Currency || "";
         }
     }

    public makeBarionCompatible(): Payment {
        return this;
    }
}