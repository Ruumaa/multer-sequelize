const { where } = require("sequelize");
const models = require("../models/userModels");
const UserRepository = {};

UserRepository.findAll = async (params) => {
  try {
    const user = await models.Users.findAll();
    return user;
  } catch (err) {
    throw err;
  }
};

UserRepository.findByPk = async (id) => {
  try {
    const user = await models.Users.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "Id not found!" });
    }
    return user;
  } catch (err) {
    throw err;
  }
};
//Bug ID null!! <<<<<<<<<<<<<<<<<<<<<<<<<<<
UserRepository.create = async (payload) => {
  try {
    const user = await models.Users.create(payload);
    return user;
  } catch (err) {
    throw err;
  }
};

UserRepository.destroy = async (id) => {
  try {
    const user = await models.Users.destroy({
      where: {
        id,
      },
    });
    if (!user) {
      throw { name: "ErrorNotFound" };
    }
    return user;
  } catch (err) {
    throw err;
  }
};

UserRepository.update = async (payload,id) => {
  try {
    const user = await models.Users.update(payload, {
      where: {
        id,
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};
module.exports = UserRepository;
