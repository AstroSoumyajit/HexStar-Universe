const Razorpay = require("razorpay");
const shortid = require("shortid");

export default async function handler(req, res) {
  if (req.method === "POST") {

    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
      });

      const options = {
        amount: 50000, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_74394",
        payment_capture:1
      };

      const order = await instance.orders.create(options);

      if (!order) return res.status(500).send("Some error occured");

      res.json(order);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  } else {
    // Handle any other HTTP method
  }
}
