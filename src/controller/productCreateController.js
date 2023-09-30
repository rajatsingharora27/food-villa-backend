const { ProductCreationService } = require("../service/index");

const productCreateService = new ProductCreationService();

class ProductCreateController {
  constructor() {}

  createProduct = async (req, res) => {
    try {
      const response = await productCreateService.createProduct(req.body);
      //   console.log(res);
      return res.status(StatusCodes.OK).json({
        message: "Successfully Created Product",
        success: true,
        err: {},
        data: response,
      });
    } catch (error) {
      // console.log(error);
      return res.status(error.statusCode).json({
        message: error.message,
        success: false,
        err: error.explanation,
        data: {},
      });
    }
  };
}

module.exports = ProductCreateController;
