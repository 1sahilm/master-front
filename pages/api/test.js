import Products from "../../schema/beds";
import Headboard from "../../schema/headboard";
import Mattress from "../../schema/mattress";
import dbConnect from "../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  let query = "headboard";
  let page = 10;
  let limit = 10;

  let headboardPayload = [
    {
      $search: {
        compound: {
          should: [
            {
              autocomplete: {
                query: query,
                path: "product_name",
                fuzzy: {
                  maxEdits: 1,
                  maxExpansions: 50,
                },
              },
            },
            {
              autocomplete: {
                query: query,
                path: "category",
                fuzzy: {
                  maxEdits: 1,
                  maxExpansions: 50,
                },
              },
            },
            {
              autocomplete: {
                query: query,
                path: "size",
                fuzzy: {
                  maxEdits: 1,
                  maxExpansions: 50,
                },
              },
            },
          ],
        },
      },
    },
    {
      $project: {
        _id: 1,
        product_name: 1,
        category: 1,
      },
    },
    {
      $facet: {
        metadata: [{ $count: "total" }],
        data: [{ $skip: parseInt(page) }, { $limit: parseInt(limit) }],
      },
    },
  ];

  const headboardPipeline = await Headboard.aggregate([headboardPayload]);

  //INITIALIZING HEADBOARD
  let headboard = headboardPipeline[0].data;

  //HEADBOARD PAGINATION

  let countHeadboard;
  try {
    countHeadboard = headboardPipeline[0].metadata[0].total;
  } catch (err) {
    countHeadboard = 0;
  }

  let totalPagesHeadboard = 0;
  totalPagesHeadboard = countHeadboard / limit;
  let totalApproxHeadboard = totalPagesHeadboard.toFixed(0);
  if (totalPagesHeadboard > totalApproxHeadboard) {
    totalPagesHeadboard = parseInt(totalApproxHeadboard) + 1;
  } else if (parseInt(totalPagesHeadboard) < parseInt(totalApproxHeadboard)) {
    totalPagesHeadboard = totalApproxHeadboard;
  }

  res.json({ totalPagesHeadboard, headboard });
}
