import BankCard from "./BankCard";

interface IFundingInformation {
    BankCard?: BankCard;
    AuthorizationCode?: string;
    ProcessResult?: string;
}

/**
 * Represtents payee transaction included in a payment transaction
 */
export default class FundingInformation {

    /**
     * The bank card used to complete the payment.
     */
    BankCard: BankCard = new BankCard();

    /**
     * The authorization code received by the card
     * processing system when executing the payment.
     */
    AuthorizationCode: string = "";

    /**
     * The result of the last card payment attempt.
     */
    ProcessResult: string = "";

    constructor(o?: IFundingInformation) {
         if (o) {
             if (o.BankCard) {
                 this.BankCard = new BankCard(o.BankCard)
             }
            this.AuthorizationCode = o.AuthorizationCode || "";
            this.ProcessResult = o.ProcessResult || "";
         }
     }
}