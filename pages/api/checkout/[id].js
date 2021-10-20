import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect Checkout Session ID");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);
    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
