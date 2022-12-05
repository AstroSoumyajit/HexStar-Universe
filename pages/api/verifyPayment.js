const crypto = require("crypto");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

    let expected_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    console.log("sig", req.body.razorpay_signature);
    console.log("sigExpect", expected_signature);

    let res = { status: "failed" };
    if (req.body.razorpay_signature === expected_signature) {
      res = { status: "success" };
    }
    res.json(res);
  }
}
