import axios from "axios";
import Barion from "../Barion";
import Payment from "../Payment";
import PaymentTransaction from "../PaymentTransaction";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const recurringId = uuidv4();

const testPayment = new Payment({
  POSKey: process.env.BARION_POS_KEY,
  PaymentType: "Immediate",
  PaymentWindow: "0.00:30:00",
  GuestCheckOut: true,
  FundingSources: ["All"],
  PaymentRequestId: "aa",
  RedirectUrl: "http://localhost:8080",
  CallbackUrl: "http://localhost:8080/cb",
  Transactions: [
    new PaymentTransaction({
      POSTransactionId: "aa",
      Payee: "keknarancs89@gmail.com",
      Total: 8900,
      Comment: "comm",
    })
  ],
  Locale: "hu-HU",
  Currency: "HUF"
});

const testRecurringPayment = new Payment({
  POSKey: process.env.BARION_POS_KEY,
  PaymentType: "Immediate",
  PaymentWindow: "0.00:30:00",
  GuestCheckOut: true,
  FundingSources: ["All"],
  PaymentRequestId: recurringId,
  RecurrenceId: recurringId,
  InitiateRecurrence: true,
  RecurrenceType: "MerchantInitiatedPayment",
  RedirectUrl: "http://localhost:8080",
  CallbackUrl: "http://localhost:8080/cb",
  Transactions: [
    new PaymentTransaction({
      POSTransactionId: recurringId,
      Payee: "keknarancs89@gmail.com",
      Total: 8900,
      Comment: "comm",
    })
  ],
  Locale: "hu-HU",
  Currency: "HUF"
});

const startResult = {
  PaymentId: '6f27c32c567ced118bea001dd8b71cc4',
  PaymentRequestId: 'a805b718-3523-4690-a668-71a6951bf690',
  Status: 'Prepared',
  QRUrl: 'https://api.test.barion.com/qr/generate?paymentId=6f27c32c-567c-ed11-8bea-001dd8b71cc4&size=Large',
  Transactions: [
    {
      POSTransactionId: "aa",
      TransactionId: '7027c32c567ced118bea001dd8b71cc4',
      Status: 'Prepared',
      Currency: 'HUF',
      TransactionTime: '0001-01-01T00:00:00',
      RelatedId: null
    }
  ],
  RecurrenceResult: 'None',
  ThreeDSAuthClientData: null,
  GatewayUrl: 'https://secure.test.barion.com/Pay?Id=6f27c32c567ced118bea001dd8b71cc4',
  RedirectUrl: 'http://localhost:8080/?paymentId=6f27c32c567ced118bea001dd8b71cc4',
  CallbackUrl: 'http://localhost:8080/cb?paymentId=6f27c32c567ced118bea001dd8b71cc4',
  TraceId: null,
  Errors: []
};

const stateResult = {
  PaymentId: '6155a0cf5a7ced118bea001dd8b71cc4',
  PaymentRequestId: 'aa',
  OrderNumber: null,
  POSId: 'dbe5400b1df74855a261757a9a934f56',
  POSName: 'HirosDragonTest',
  POSOwnerEmail: 'keknarancs89@gmail.com',
  POSOwnerCountry: 'HU',
  Status: 'Prepared',
  PaymentType: 'Immediate',
  FundingSource: null,
  RecurrenceType: null,
  TraceId: null,
  FundingInformation: null,
  AllowedFundingSources: [ 'All' ],
  GuestCheckout: true,
  CreatedAt: '2022-12-15T09:28:29.682Z',
  ValidUntil: '2022-12-15T09:58:29.682Z',
  CompletedAt: null,
  ReservedUntil: null,
  DelayedCaptureUntil: null,
  Transactions: [
    {
      TransactionId: '6255a0cf5a7ced118bea001dd8b71cc4',
      POSTransactionId: 'aa',
      TransactionTime: '2022-12-15T09:28:29.682Z',
      Total: 8900,
      Currency: 'HUF',
      Payer: null,
      Payee: [Object],
      Comment: 'comm',
      Status: 'Prepared',
      TransactionType: 'Unspecified',
      Items: [],
      RelatedId: null,
      POSId: 'dbe5400b1df74855a261757a9a934f56',
      PaymentId: '6155a0cf5a7ced118bea001dd8b71cc4'
    }
  ],
  Total: 8900,
  SuggestedLocale: 'hu-HU',
  FraudRiskScore: null,
  RedirectUrl: 'http://localhost:8080/?paymentId=6155a0cf5a7ced118bea001dd8b71cc4',
  CallbackUrl: 'http://localhost:8080/cb?paymentId=6155a0cf5a7ced118bea001dd8b71cc4',
  Currency: 'HUF',
  Errors: []
}

const recurringStateResult = {
  PaymentId: '1659cfc47a7ced118bea001dd8b71cc4',
  PaymentRequestId: recurringId,
  Status: 'Prepared',
  QRUrl: 'https://api.test.barion.com/qr/generate?paymentId=1659cfc4-7a7c-ed11-8bea-001dd8b71cc4&size=Large',
  Transactions: [
    {
      POSTransactionId: recurringId,
      TransactionId: '1759cfc47a7ced118bea001dd8b71cc4',
      Status: 'Prepared',
      Currency: 'HUF',
      TransactionTime: '0001-01-01T00:00:00',
      RelatedId: null
    }
  ],
  RecurrenceResult: 'None',
  ThreeDSAuthClientData: null,
  GatewayUrl: 'https://secure.test.barion.com/Pay?Id=1659cfc47a7ced118bea001dd8b71cc4',
  RedirectUrl: 'http://localhost:8080/?paymentId=1659cfc47a7ced118bea001dd8b71cc4',
  CallbackUrl: 'http://localhost:8080/cb?paymentId=1659cfc47a7ced118bea001dd8b71cc4',
  TraceId: null,
  Errors: []
};

describe('Barion', () => {
  describe("startPayment", () => {
    test('should pass', async () => {
      mock.onPost("/v2/Payment/Start").reply(200, startResult);
      const barion = new Barion({
        useTest: true,
      });
      const res = await barion.startPayment(testPayment);
      expect(res.Status).toBe("Prepared");
      expect(res.QRUrl.length).toBeGreaterThan(1);
      expect(res.Transactions.length).toBe(1);
      expect(res.Transactions[0].POSTransactionId)
        .toBe(testPayment.Transactions[0].POSTransactionId);
      expect(res.Transactions[0].Status)
        .toBe("Prepared");
    });
    test('should pass with recurring', async () => {
      const barion = new Barion({
        useTest: true,
      });
      mock.onPost("/v2/Payment/Start").reply(200, recurringStateResult);
      const res = await barion.startPayment(testRecurringPayment);
      expect(res.Status).toBe("Prepared");
      expect(res.QRUrl.length).toBeGreaterThan(1);
      expect(res.Transactions.length).toBe(1);
      expect(res.Transactions[0].POSTransactionId)
        .toBe(testRecurringPayment.Transactions[0].POSTransactionId);
      expect(res.Transactions[0].Status)
        .toBe("Prepared");
    });
  });

  describe("getPaymentState", () => {
    test('should pass', async () => {
      const barion = new Barion({
        useTest: true,
      });
      mock.onGet(
        `/v2/Payment/GetPaymentState?POSkey=a&PaymentId=b`
      ).reply(200, stateResult);
      const res = await barion.getPaymentState(
        "a", "b",
      );
      expect(res.PaymentId).toBe(stateResult.PaymentId);
    });
  });

  /* describe("completePayment", () => {
    test('should pass', async () => {
      const barion = new Barion({
        useTest: true,
      });
      const p = await barion.startPayment(testPayment);
      const res = await barion.completePayment(
        testPayment.POSKey, p.PaymentId,
      );
      expect(1).toBe(1);
    });
  });*/
});