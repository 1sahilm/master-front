import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "GET") {
    const product = await Products.aggregate([
      {
        $search: {
          compound: {
            should: [
              {
                autocomplete: {
                  query: req.query.search,
                  path: "product_name",
                },
              },
              {
                autocomplete: {
                  query: req.query.search,
                  path: "category",
                },
              },
              {
                autocomplete: {
                  query: req.query.search,
                  path: "size",
                },
              },
            ],
          },
        },
      },
      {
        $limit: 6,
      },
      {
        $project: {
          _id: 1,
          product_name: 1,
          type: 1,
        },
      },
    ]);

    res.status(200).json(product);
  } else {
    res.status(500).json({ message: "GET query missing" });
  }
}
