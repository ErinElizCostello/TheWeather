const NewUpload = require('./models/model.js');
const Password = require('./models/modelP.js');

exports.getPassword = async (req, res) => {
  try {
    const password = await Password.find();
    res.status(200);
    res.json(password);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.postPassword = async (req, res) => {
  try {
    const password = await Password.create({
      password: req.body.password
    });
    res.status(200);
    res.json(password);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.deletePassword = async (req, res) => {
  try {
    const password = await Password.findbyIdAndDelete({
      _id: req.params.id
    })
    res.status(200);
    res.json(password);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getUploads = async (req, res) => {
  try {
    const upload = await NewUpload.find();
    res.status(200);
    res.json(upload);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

exports.postUpload = async (req, res) => {
  try {
    const upload = await NewUpload.create({
      who: req.body.who,
      what: req.body.what,
      when: req.body.when,
      where: req.body.where,
      why: req.body.why
    });
    res.status(200);
    res.json(upload);
  } catch (error) {
    console.log(error); //eslint-disable-line no-console
    res.sendStatus(400);
  }
};

exports.deleteUpload = async (req, res) => {
  try {
    const upload = await NewUpload.findByIdAndDelete({
      _id: req.params.id
    })

    res.status(200);
    res.json(upload);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};