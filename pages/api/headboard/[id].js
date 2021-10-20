import Products from "../../../schema/headboard";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  try {
    const getProductsByID = await Products.findById(req.query.id);

    res.status(200).json(getProductsByID);
  } catch (err) {
    res.json({ success: false, data: "Server Error" });
  }
}
