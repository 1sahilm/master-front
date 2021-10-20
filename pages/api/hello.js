import Products from "../../schema/beds";
import Headboard from "../../schema/headboard";
import Mattress from "../../schema/mattress";
import dbConnect from "../../utils/DBconnect";
import sortJsonArray from "sort-array";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "GET" && req.query.query) {
    const {
      page = 1,
      limit = 10,
      query = "",
      category = "",
      headboardCategory = "",
      mattressCategory = "",
      sort = 0, //0 = none , 1 = acending (price low to high) , 2= descending (price high to low)

      maxPrice = 0,
    } = req.query;

    let pipeline = [];
    //FOR LATER TESTING ONLY
    // fuzzy: {
    //   maxEdits: 1,
    //   maxExpansions: 50,
    // },

    let bedsPipelinePayload = [
      {
        $search: {
          compound: {
            should: [
              {
                autocomplete: {
                  query: query,
                  path: "product_name",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "category",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "size",
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
          images: 1,
          price: 1,
        },
      },
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [{ $skip: parseInt(page) }, { $limit: parseInt(limit) }],
        },
      },
    ];

    if (category) {
      let payload = [
        {
          $match: {
            category: category,
          },
        },
      ];
      Object.assign(bedsPipelinePayload, payload);
    }
    if (parseInt(sort) == 1) {
      let payload = [{ $sort: { price: 1 } }];
      Object.assign(bedsPipelinePayload, payload);
    }
    if (parseInt(sort) == -1) {
      let payload = [{ $sort: { price: -1 } }];
      Object.assign(bedsPipelinePayload, payload);
    }

    const bedsPipeline = await Products.aggregate([bedsPipelinePayload]);

    //INITIALIZING MATTRESS
    let beds = bedsPipeline[0].data;
    //BEDS PAGINATION
    let countBeds;
    try {
      countBeds = bedsPipeline[0].metadata[0].total;
    } catch (err) {
      countBeds = 0;
    }
    let totalPagesBeds = 0;
    totalPagesBeds = countBeds / limit;
    let totalApprox = totalPagesBeds.toFixed(0);
    if (totalPagesBeds > totalApprox) {
      totalPagesBeds = parseInt(totalApprox) + 1;
    } else if (parseInt(totalPagesBeds) < parseInt(totalApprox)) {
      totalPagesBeds = totalApprox;
    }
    //PUSING DATA TO ARRAY
    if (parseInt(page) <= parseInt(totalPagesBeds)) {
      for (let i = 0; i < beds.length; i++) {
        let data = beds[i];
        data["category"] = "beds";
        pipeline.push(data);
      }
    }

    let headboardPipelinePayload = [
      {
        $search: {
          compound: {
            should: [
              {
                autocomplete: {
                  query: query,
                  path: "product_name",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "category",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "size",
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
          images: 1,
          price: 1,
        },
      },
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [{ $skip: parseInt(page) }, { $limit: parseInt(limit) }],
        },
      },
    ];

    if (headboardCategory) {
      let payload = [
        {
          $match: {
            category: headboardCategory,
          },
        },
      ];
      Object.assign(headboardPipelinePayload, payload);
    }
    if (parseInt(sort) === 1) {
      let payload = [{ $sort: { price: 1 } }];
      Object.assign(headboardPipelinePayload, payload);
    }
    if (parseInt(sort) == -1) {
      let payload = [{ $sort: { price: -1 } }];
      Object.assign(headboardPipelinePayload, payload);
    }

    const headboardPipeline = await Headboard.aggregate([
      headboardPipelinePayload,
    ]);

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

    //PUSING DATA TO ARRAY
    if (parseInt(page) <= parseInt(totalPagesHeadboard)) {
      for (let i = 0; i < headboard.length; i++) {
        let data = headboard[i];
        data["category"] = "headboard";
        pipeline.push(data);
      }
    }

    let mattressPipelinePayload = [
      {
        $search: {
          compound: {
            should: [
              {
                autocomplete: {
                  query: query,
                  path: "product_name",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "category",
                },
              },
              {
                autocomplete: {
                  query: query,
                  path: "size",
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
          images: 1,
          price: 1,
        },
      },
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [{ $skip: parseInt(page) }, { $limit: parseInt(limit) }],
        },
      },
    ];

    if (mattressCategory) {
      let payload = [
        {
          $match: {
            category: mattressCategory,
          },
        },
      ];

      Object.assign(mattressPipelinePayload, payload);
    }

    if (parseInt(sort) === 1) {
      let payload = [{ $sort: { price: 1 } }];
      Object.assign(mattressPipelinePayload, payload);
    }
    if (parseInt(sort) == -1) {
      let payload = [{ $sort: { price: -1 } }];
      Object.assign(mattressPipelinePayload, payload);
    }

    const mattressPipeline = await Mattress.aggregate([
      mattressPipelinePayload,
    ]);

    //INITIALIZING MATTRESS
    let mattress = mattressPipeline[0].data;

    //MATTRESS PAGINATION

    let countMattress;
    try {
      countMattress = mattressPipeline[0].metadata[0].total;
    } catch (err) {
      countMattress = 0;
    }

    let totalPagesMattress = 0;
    totalPagesMattress = countMattress / limit;
    let totalApproxMattress = totalPagesMattress.toFixed(0);
    if (totalPagesMattress > totalApproxMattress) {
      totalPagesMattress = parseInt(totalApproxMattress) + 1;
    } else if (parseInt(totalPagesMattress) < parseInt(totalApproxMattress)) {
      totalPagesMattress = totalApproxMattress;
    }
    //PUSING DATA TO ARRAY

    if (parseInt(page) <= parseInt(totalPagesMattress)) {
      for (let i = 0; i < mattress.length; i++) {
        let data = mattress[i];
        data["category"] = "mattress";
        pipeline.push(data);
      }
    }

    let totalPages = Math.max(
      totalPagesBeds,
      totalApproxHeadboard,
      totalApproxMattress
    );
    console.log(totalPages);

    let pipelineFinal = [];

    if (parseInt(sort) === 1) {
      pipelineFinal = sortJsonArray(pipeline, {
        by: "price",
        order: "asc",
      });
    } else if (parseInt(sort) == -1) {
      pipelineFinal = sortJsonArray(pipeline, {
        by: "price",
        order: "desc",
      });
    } else {
      pipelineFinal = pipeline;
    }
    res.status(200).json({
      data: pipelineFinal,
      count: totalPages,
    });
  } else {
    res.json({ message: "Some query missing", data: [] });
  }
}
