const UserService = require("../services/userService.js");
const controllers = {};

controllers.findAll = (req, res, next) => {
  UserService.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

controllers.findByPk = (req, res, next) => {
  const id = req.params.id;
  UserService.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

controllers.create = (req, res, next) => {
  const { email, gender, password, role } = req.body;
  if (!email || !gender || !password || !role) {
    res
      .status(400)
      .json({ message: "Email, gender, password, and role are required!" });
  }
  UserService.create(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

controllers.destroy = (req, res, next) => {
  UserService.destroy(req.params)
    .then(() => {
      res.status(200).json({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      next(err);
    });
};

controllers.update = (req, res, next) => {  
  const { email, gender, password, role } = req.body;
  const id = req.params.id;
  if (!email || !gender || !password || !role) {
    res
      .status(400)
      .json({ message: "Email, gender, password, and role are rquired!" });
  }

  UserService.update(req.body, id)
    .then(([result]) => {
        if(!result){
            throw {name: 'ErrorNotFound'}
        }
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = controllers;
