const ctrlImg = {};

ctrlImg.indexRouteImg = (req, res) => {
  res.render("index.hbs");
};

ctrlImg.uploadImg = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("enviado");
};

module.exports = ctrlImg;
