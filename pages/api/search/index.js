import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "GET" && req.query.query) {
    const {
      page = 1,
      limit = 20,
      query = "",
      category = "",
      headboardCategory = "",
      mattressCategory = "",
      sofaCategory = "",
      gardernFurnitureCategory = "",
      livingRoomCategory = "",
      diningSetCategory = "",
      sort = 0, //0 = none , 1 = acending (price low to high) , -1= descending (price high to low)

      maxPrice = 0,
    } = req.query;

    let pipeline = [];
    let bedsPipeline = [];
    let countBeds;

    //FOR LATER TESTING ONLY
    // fuzzy: {
    //   maxEdits: 1,
    //   maxExpansions: 50,
    // },

    let categoryPayload = [];
    let filter = {};

    if (category) {
      categoryPayload.push(category);
    }
    if (headboardCategory) {
      categoryPayload.push(headboardCategory);
    }
    if (mattressCategory) {
      categoryPayload.push(mattressCategory);
    }
    if (sofaCategory) {
      categoryPayload.push(sofaCategory);
    }
    if (gardernFurnitureCategory) {
      categoryPayload.push(gardernFurnitureCategory);
    }
    if (livingRoomCategory) {
      categoryPayload.push(livingRoomCategory);
    }
    if (diningSetCategory) {
      categoryPayload.push(diningSetCategory);
    }

    if (
      category ||
      headboardCategory ||
      mattressCategory ||
      sofaCategory ||
      gardernFurnitureCategory ||
      livingRoomCategory ||
      diningSetCategory
    ) {
      filter.category = categoryPayload;
    }

    console.log(categoryPayload);

    if (maxPrice) {
      filter.price = {
        $lte: parseInt(maxPrice),
      };
    }
    console.log(filter);

    if (
      (category ||
        headboardCategory ||
        mattressCategory ||
        maxPrice ||
        sofaCategory ||
        gardernFurnitureCategory ||
        livingRoomCategory ||
        diningSetCategory) &&
      (parseInt(sort) == 1 || parseInt(sort) == -1)
    ) {
      console.log("sort");

      bedsPipeline = await Products.find({
        $text: {
          $search: query,
        },
      })
        .where(filter)
        .limit(limit * 1)
        .sort({ price: parseInt(sort) })
        .skip((page - 1) * limit);

      //GET COUNT
      countBeds = await Products.find({
        $text: {
          $search: query,
        },
      })
        .where(filter)
        .count();
    } else if (parseInt(sort) == 1 || parseInt(sort) == -1) {
      bedsPipeline = await Products.find({
        $text: {
          $search: query,
        },
      })
        .sort({ price: parseInt(sort) })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      //GET COUNT

      countBeds = await Products.find({
        $text: {
          $search: query,
        },
      }).count();

      console.log("only");
    } else if (
      category ||
      headboardCategory ||
      mattressCategory ||
      maxPrice ||
      sofaCategory ||
      gardernFurnitureCategory ||
      livingRoomCategory ||
      diningSetCategory
    ) {
      console.log("no sort");

      bedsPipeline = await Products.find({
        $text: {
          $search: query,
        },
      })
        .where(filter)
        .limit(limit * 1)
        .skip((page - 1) * limit);

      //GET COUNT

      countBeds = await Products.find({
        $text: {
          $search: query,
        },
      })
        .where(filter)
        .count();
    } else {
      bedsPipeline = await Products.find({
        $text: {
          $search: query,
        },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);

      //GET COUNT

      countBeds = await Products.find({
        $text: {
          $search: query,
        },
      }).count();

      console.log("only prod");
    }

    //INITIALIZING MATTRESS
    let beds = bedsPipeline;

    //BEDS PAGINATION

    let totalPagesBeds = 0;
    totalPagesBeds = countBeds / limit;
    let totalApprox = totalPagesBeds.toFixed(0);
    if (totalPagesBeds > totalApprox) {
      totalPagesBeds = parseInt(totalApprox) + 1;
    } else if (parseInt(totalPagesBeds) < parseInt(totalApprox)) {
      totalPagesBeds = totalApprox;
    }
    // PUSING DATA TO ARRAY
    if (parseInt(page) <= parseInt(totalPagesBeds)) {
      for (let i = 0; i < beds.length; i++) {
        let data = beds[i];
        pipeline.push(data);
      }
    }

    res.status(200).json({
      data: pipeline,
      count: totalPagesBeds,
    });
  } else {
    res.json({ message: "Some query missing", data: [] });
  }
}
