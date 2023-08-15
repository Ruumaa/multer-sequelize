const UserRepository = require("../repositories/userRepository");
const UserService = {};

UserService.findAll = async (params) => {
  try {
    const user = await userRepository.findAll(params);
    return user;
  } catch (err) {
    throw err;
  }
};

UserService.findByPk = async (id) => {
  try {
    const user = await userRepository.findByPk(id);
    return user;
  } catch (err) {
    throw err;
  }
};

UserService.create = async (params) => {
  try {
    const { email, gender, password, role } = params;
    let payload = {
      email,
      gender,
      password,
      role,
    };

    const user = await UserRepository.create(payload);
    return user;
  } catch (err) {
    throw err;
  }
};

UserService.destroy = async (params) => {
  try {
    const { id } = params;
    const user = await UserRepository.destroy(id);
    return user;
  } catch (err) {
    throw err;
  }
};

UserService.update = async (params, id) => {
  try {
    const { email, gender, password, role } = params;
    let payload = {
      email,
      gender,
      password,
      role,
    };
    const user = await UserRepository.update(payload, id);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = UserService;
