const MovieRepository = require('../repositories/movieRepository');

const MovieService = {};

MovieService.findAll = async (params) => {
  try {
    const movies = await MovieRepository.findAll(params);
    return movies;
  } catch (err) {
    throw err;
  }
};

MovieService.findByPk = async (id) => {
  try {
    const movie = await MovieRepository.findByPk(id);
    return movie;
  } catch (err) {
    throw err;
  }
};

MovieService.create = async (filePhoto, params) => {
  try {
    const { title, genres, year } = params;
    let payload = {
      title,
      genres,
      year,
    };
    if (filePhoto) {
      let linkPhoto = `http://localhost:3000/api/movies/upload/${filePhoto.filename}`;
      console.log(linkPhoto);
      payload.photo = linkPhoto;
    }
    const movie = await MovieRepository.create(payload);
    return movie;
  } catch (err) {
    throw err;
  }
};
MovieService.destroy = async (params) => {
  try {
    const { id } = params;
    await MovieRepository.destroy(id);
  } catch (err) {
    throw err;
  }
};
MovieService.update = async (filePhoto, params, id) => {
  try {
    const { title, genres, year } = params;
    let payload = {
      title,
      genres,
      year,
      photo: filePhoto.filename,
    };
    const movie = await MovieRepository.update(payload, id);
    return movie;
  } catch (err) {
    throw err;
  }
};
module.exports = MovieService;
