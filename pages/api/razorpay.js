const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = req.body.amount;

    const currency = req.body.currency;
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    console.log(options);

    const response = await razorpay.orders.create(options);

    try {
      return res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch(err) {
      console.log(err)
      return res.status(500);
    }
  } else {
    // Handle any other HTTP method
  }
}
