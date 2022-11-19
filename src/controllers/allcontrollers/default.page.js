const default_page = async (req, res) => {
  try {
    res.status(200).send({message: "Default Home Page API REST"});
  } catch (error) {
    res.status(401).send({message: "Algo anda mal"});
    console.log(error);
  }
};

//module.exports = default_page;
module.exports = default_page;