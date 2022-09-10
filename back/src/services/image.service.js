const Image = require('../models/img.schema');

class ImageService {
	async findAll() {
		try {
			return Image.find().populate('userId', {
				password: 0,
			});
		} catch (error) {
			throw error;
		}
	}

	async findById(id) {
		try {
			return Image.findById(id);
		} catch (error) {
			throw error;
		}
	}

	async findByUserId({ userId }) {
		return Image.find({ userId });
	}

	async create(image) {
		const newImage = new Image(image);
		return newImage.save();
	}

	async update(id, data) {
		return Image.findByIdAndUpdate(id, data);
	}

	async delete(id) {
		try {
			return Image.findByIdAndDelete(id);
		} catch (error) {
			throw new Error('Error deleting note by id', id);
		}
	}
}

module.exports = new ImageService();

/* class ImgController {
  async getImgById (req, res, next) {
    const id = req.params.id;

    try {
      const img = await ImgSchema.findById(id);

      if (!img) throw createError.BadRequest("image not found");

      return res.json(img);
    } catch (error) {
      next(error);
    }
  };

  // get img by id user
  async getImgs (req, res, next) {
    try {
      const imgs = await ImgSchema.find({ userId: req.user.id });
      if (!imgs) throw createError.badRequest("not found image");
      res.json(imgs);
    } catch (error) {
      next(error);
    }
  };

  // get all img
  async getAllImg (req, res, next) {
    try {
      const img = await ImgSchema.find().populate("userId", { password: 0 });
      if (!img) throw createError.BadRequest("not found images");

      return res.json(img);
    } catch (error) {
      next(error);
    }
  };

  async uploadImg (req, res, next) {
    const img = await new ImgSchema();

    try {
      if (!req.files) throw createError.BadRequest();
      if (!req.body.title || !req.body.description) { throw createError.Unauthorized("you have complete form"); }
      const imgCloud = await cloudinaryAdd(req.files.image.tempFilePath);
      if (!imgCloud) throw createError.Unauthorized("not provided image");
      img.title = req.body.title;
      img.description = req.body.description;
      img.userId = req.user.id;
      img.imgUrl = imgCloud.url;
      const imgSave = await img.save();
      await fs.unlink(req.files.image.tempFilePath, () => console.log("deleted"));
      res.json(imgSave);
    } catch (error) {
      next(error);
    }
  };

  async deleteImg (req, res, next) {
    const id = req.params.id;
    try {
      const img = await ImgSchema.findByIdAndRemove(id);
      if (!img) throw createError.BadRequest("image not found");
      // cut url
      const imgCut = img.imgUrl.split("/")[7].split(".")[0];
      // delete img cloudinary
      await cloudinaryDelete(imgCut);

      return res.json(img);
    } catch (error) {
      next(error);
    }
  };

  async updateImg (req, res, next) {
    const id = req.params.id;
    console.log(req.body);
    try {
      const img = await ImgSchema.findByIdAndUpdate(id, req.body);
      if (!img) throw createError.BadRequest("image not found");

      return res.json(img);
    } catch (error) {
      next(error);
    }
  }
}
;

module.exports = new ImgController();
 */
