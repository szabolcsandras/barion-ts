import Payment from "./Payment";
import PaymentResult from "./PaymentResult";
import axios from "axios";
import BarionError from "./BarionError";
import PaymentState from "./PaymentState";
import PaymentCompletion from "./PaymentCompletion";

interface BarionOptions {
    /**
     * Uses the test (Sandbox) api if true.
     */
    useTest?: boolean;
}
export default class Barion {
    /**
     * Set it to true for sandbox mode.
     */
    public useTest: boolean = false;

    /**
     * URL of the barion api. Constructor will overwrite this
     * if useTest is true.
     */
    private apiUrl: string = "https://api.barion.com/";

    constructor(o: BarionOptions) {
        if (o) {
            o.useTest === true ?
                this.useTest = true : this.useTest = false;
        }
        if(this.useTest === true) {
            this.apiUrl = "https://api.test.barion.com/";
        }
        axios.defaults.baseURL = this.apiUrl;
    }

    /**
     * Starts an online payment at Barion.
     * @param p - Payment informations
     * @returns A payment result got from Barion API
     */
    public async startPayment(p: Payment): Promise<PaymentResult> {
        return new Promise(async (resolve, reject) => {
            axios.post('/v2/Payment/Start', p.makeBarionCompatible())
                .then(r => {
                    return resolve(new PaymentResult(r.data));
                })
                .catch(e => {
                    if (e.response) {
                        if (e.response.data) {
                            if (e.response.data.Errors) {
                                return reject(e.response.data.Errors.map((e: unknown) =>
                                    new BarionError(e)
                                ));
                            }
                        }
                    }
                    return reject(e);
                });
        });
    }

    /**
     * Gets information about an existing payment.
     * @param POSKey - The secret API key of the shop.
     * @param PaymentId - The identifier of the payment in the Barion system.
     * @returns A PaymentState got from Barion API
     */
    public async getPaymentState(POSKey: string, PaymentId: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            axios.get(`/v2/Payment/GetPaymentState?POSkey=${POSKey}&PaymentId=${PaymentId}`)
            .then(r => resolve(new PaymentState(r.data)))
            .catch(e => {
                if (e.response) {
                    if (e.response.data) {
                        if (e.response.data.Errors) {
                            return reject(e.response.data.Errors.map((e: unknown) =>
                                new BarionError(e)
                            ));
                        }
                    }
                }
                return reject(e);
            });
        });
    }

    // NOT TESTED, NOT FINISHED
    /**
     * Completes an existing 
     * @param POSKey - The secret API key of the shop.
     * @param PaymentId - The identifier of the payment in the Barion system.
     * @returns A PaymentState got from Barion API
     */
     public async completePayment(POSKey: string, PaymentId: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const r = await axios.post('/v2/Payment/Complete',
                {
                    POSKey,
                    PaymentId,
                });
                return resolve(new PaymentCompletion(r.data));
            } catch (ex) {
                console.log("EXXX:", ex);
                return reject(ex);

            }
        });
    }
}