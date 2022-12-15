interface IBarionError {
    ErrorCode?: string;
    Title?: string;
    Description?: string;
    EndPoint?: string;
    AuthData?: string;
    HappenedAt?: string;
    PaymentId?: string;
}

export default class BarionError {

    /**
     * The error code of the payment, this can
     * be interpreted as an error Id.
     */
    ErrorCode: string = "";

    /**
     * The title of the error, this is a more
     * readable form of the error.
     */
    Title: string = "";

    /**
     * The description of the error, more
     * information about the error.
     */
    Description: string = "";

    /**
     * The URL of the API endpoint to help the
     * reproduction of the error scenario.
     */
    EndPoint: string = "";

    /**
     * The e-mail address of the caller to help the
     * reproduction of the error scenario.
     */
    AuthData: string = "";

    /**
     * The timestamp of the response.
     */
    HappenedAt: string = "";

    /**
     * If the error is related to a business process that
     * involves a given payment, the public identifier of
     * the payment is supplied here
     */
    PaymentId: string = "";

    constructor(o?: IBarionError | any) {
        if (o) {
            this.ErrorCode = o.ErrorCode || "";
            this.Title = o.Title || "";
            this.Description = o.Description || "";
            this.EndPoint = o.EndPoint || "";
            this.AuthData = o.AuthData || "";
            this.HappenedAt = o.HappenedAt || "";
            this.PaymentId = o.PaymentId || "";
        }
    }
}