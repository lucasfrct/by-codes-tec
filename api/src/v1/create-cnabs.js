
const Cnab = require("../shared/Cnab");
const { Cnabs } = require("../models");

module.exports = async(req, res) => {
  
  let result = [];
  const body = req.body;
  
  const cnab = new Cnab('CNAB.txt');
  const cnabs = await cnab.load();

  for await (content of cnabs) {
    let feedback = await Cnabs.create(content);	
    result.push(feedback);
  }

  res.json(result);
}