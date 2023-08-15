const MovieService = require('../services/movieService.js')
const controllers = {};

controllers.findAll = (req, res, next) => {
  MovieService.findAll()
    .then((allMovies) => {
      res.status(200).json(allMovies);
    })
    .catch((error) => {
      next(error);
    });
};

controllers.findByPk = (req, res, next) => {
  const id = req.params.id;
  MovieService.findByPk(id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((error) => {
      next(error);
    });
};

controllers.create = (req, res, next) => {
  const { title, genres, year } = req.body;
  if (!title || !genres || !year) {
    return res
      .status(400)
      .json({ message: "Title, genres, and year are required!" });
  }
  MovieService.create(req.file, req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      next (error);
    });
};

controllers.destroy = (req, res, next) => {
  MovieService.destroy(req.params)
    .then((result) => {
      res.status(200).json({ message: "Movies deleted successfully!" });
    })
    .catch((error) => {
      next(error);
    });
};

controllers.updateMovie = (req, res) => {
  const { title, genres, year } = req.body;
  const id = req.params.id
  if (!title || !genres || !year) {
    return res
      .status(400)
      .json({ message: "Title, genres, and year are required!" });
  }
  MovieService.update(req.file, req.body, id)
    .then(([movie]) => {
      if (!movie) {
        return res.status(404).json({ message: "Id not found" });
      }
      res.status(200).json({ message: "Movie updated successfully!" });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = controllers;
