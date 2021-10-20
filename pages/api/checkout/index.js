import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

const CHECKOUT_SESSION_ID = 1234;

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body.items);
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req?.body?.items ?? [],
        success_url: `http://localhost:3000/checkout/${CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/cart`,
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
  }
}
