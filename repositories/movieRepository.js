const models = require("../models/indexModels.js");
const MovieRepository = {};

MovieRepository.findAll = async (params) => {
  try {
    const movies = await models.Movies.findAll();
    if (!movies) {
      throw err;
    }
    return movies;
  } catch (err) {
    throw err;
  }
};

MovieRepository.findByPk = async (id) => {
  try {
    const movie = await models.Movies.findByPk(id);
    if (!movie) {
      throw { name: "ErrorNotFound" };
    }
    return movie;
  } catch (err) {
    throw err;
  }
};

MovieRepository.create = async (payload) => {
  try {
    const movie = await models.Movies.create(payload);
    return movie;
  } catch (err) {
    throw err;
  }
};

MovieRepository.destroy = async (id) => {
  try {
    const movie = await models.Movies.destroy({
      where: {
        id,
      },
    });
    if (!movie) {
      throw { name: "ErrorNotFound" };
    }
    return movie;
  } catch (err) {
    throw err;
  }
};

MovieRepository.update = async (payload, id) => {
  try {
    const movie = await models.Movies.update(payload, {
      where: {
        id,
      },
    });
    return movie;
  } catch (err) {
    throw err;
  }
};

module.exports = MovieRepository;
