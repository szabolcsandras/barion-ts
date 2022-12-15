import DetailedPaymentTransaction from "./DetailedPaymentTransaction";
import FundingInformation from "./FundingInformation";

interface IPaymentState {
    PaymentId?: string;
    PaymentRequestId?: string;
    POSId?: string;
    POSName?: string;
    POSOwnerEmail?: string;
    POSOwnerCountry?: string;
    Status?: string;
    PaymentType?: string;
    AllowedFundingSources?: string[];
    FundingSource?: string;
    FundingInformation?: FundingInformation;
    RecurrenceType?: string;
    TraceId?: string;
    GuestCheckout?: boolean;
    CreatedAt?: string;
    StartedAt?: string;
    CompletedAt?: string;
    ValidUntil?: string;
    ReservedUntil?: string;
    DelayedCaptureUntil?: string;
    Transactions?: DetailedPaymentTransaction[];
    Total?: number;
    Currency?: string;
    SuggestedLocale?: string;
    FraudRiskScore?: number;
    CallbackUrl?: string;
    RedirectUrl?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class PaymentState {

    /**
     * The identifier of the payment in the Barion system.
     */
    PaymentId: string = "";

    /**
     * The identifier of the payment in the shop's system.
     */
    PaymentRequestId: string = "";

    /**
     * The public identifier of the shop that created the payment.
     */
    POSId: string = "";

    /**
     * The name of the shop that created the payment.
     */
    POSName: string = "";

    /**
     * The e-mail address of the owner of the shop that created the payment.
     */
    POSOwnerEmail: string = "";

    /**
     * ISO2 country code of the owner of the shop that created the payment.
     */
    POSOwnerCountry: string = "";

    /**
     * The current status of the payment in the Barion system.
     */
    Status: string = "";

    /**
     * The type of the payment. Can be Immediate or Reservation.
     */
    PaymentType: string = "";

    /**
     * The allowed funding sources that were defined when creating the payment.
     */
    AllowedFundingSources: string[] = [];

    /**
     * The funding source that was used to complete the payment.
     * If the payment is not yet completed, this is empty.
     */
    FundingSource: string = "";

    /**
     * Detailed information about the funding source that was used to complete the payment.
     * If the payment is not yet completed, this is empty.
     */
    FundingInformation: FundingInformation = new FundingInformation();

    /**
     * The RecurrenceType that was defined in the payment/start
     * request for the recurring scenario.
     */
    RecurrenceType: string = "";

    /**
     * The Trace Id that identifies that recurring scenario.
     */
    TraceId: string = "";

    /**
     * Indicates whether the payment allows guest checkout.
     */
    GuestCheckout: boolean = true;

    /**
     * The timestamp showing when the payment was created.
     */
    CreatedAt: string = "";

    /**
     * The timestamp showing when a reservation payment was started.
     */
    StartedAt: string = "";

    /**
     * The timestamp showing when a reservation payment was started.
     */
    CompletedAt: string = "";

    /**
     * Timestamp showing the expiration time of the payment time window. 
     */
    ValidUntil: string = "";

    /**
     * Timestamp showing the expiration time of the reservation
     * time window.
     */
    ReservedUntil: string = "";

    /**
     * Timestamp showing the expiration time of the authorization
     * time window.
     */
    DelayedCaptureUntil: string = "";

    /**
     * An array containing a detailed structure of all transactions
     * associated with the payment.
     */
    Transactions: DetailedPaymentTransaction[] = [];

    /**
     * The total amount of the payment at the time of the request.
     */
    Total: number = 0;

    /**
     * The 3 character ISO 4217 currency code of the payment.
     */
    Currency: string = "";

    /**
     * Indicates in which language the Barion Smart Gateway
     * should be shown for the payer.
     */
    SuggestedLocale: string = "";

    /**
     * A risk score computed by the anti-fraud analysis, between
     * a range of 0 (completely legit) to 100 (certain fraud). 
     */
    FraudRiskScore: number = 0;

    /**
     * 	The URL (including the payment identifier) where the
     * Barion system will send (or already sent) a request to whenever
     * there is a change in the state of the payment.
     */
    CallbackUrl: string = "";

    /**
     * The URL (including the payment identifier) where the payer
     * gets (or already got) redirected to after the payment is
     * or was completed or cancelled.
     */
    RedirectUrl: string = "";

    constructor(o?: IPaymentState | any) {
         if (o) {
            this.PaymentId = o.PaymentId || "";
            this.PaymentRequestId = o.PaymentRequestId || "";
            this.POSId = o.POSId || "";
            this.POSName = o.POSName || "";
            this.POSOwnerEmail = o.POSOwnerEmail || "";
            this.POSOwnerCountry = o.POSOwnerCountry || "";
            this.Status = o.Status || "";
            this.PaymentType = o.PaymentType || "";
            this.AllowedFundingSources = o.AllowedFundingSources || [];
            this.FundingSource = o.FundingSource || "";
            if (o.FundingInformation) {
                this.FundingInformation = new FundingInformation(o.FundingInformation);
            }
            this.RecurrenceType = o.RecurrenceType || "";
            this.TraceId = o.TraceId || "";
            this.GuestCheckout = o.GuestCheckout === true;
            this.CreatedAt = o.CreatedAt || "";
            this.StartedAt = o.StartedAt || "";
            this.CompletedAt = o.CompletedAt || "";
            this.ValidUntil = o.ValidUntil || "";
            this.ReservedUntil = o.ReservedUntil || "";
            this.DelayedCaptureUntil = o.DelayedCaptureUntil || "";
            if (o.Transactions) {
                this.Transactions = o.Transactions.map((t: unknown) => new DetailedPaymentTransaction(t));
            }
            this.Total = o.Total || 0;
            this.Currency = o.Currency || "";
            this.SuggestedLocale = o.SuggestedLocale || "";
            this.FraudRiskScore = o.FraudRiskScore || 0;
            this.CallbackUrl = o.CallbackUrl || "";
            this.RedirectUrl = o.RedirectUrl || "";
         }
     }
}