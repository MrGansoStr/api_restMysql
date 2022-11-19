const notfound_page = (req, res, next) => {
  res.status(404).send({message: "NOT FOUND"});
};

module.exports = notfound_page;