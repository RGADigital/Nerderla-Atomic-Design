import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./MoviesGallery.module.scss";
import uuid from "uuid/v4";
import { MovieCard } from "../../molecules";

const cx = classNames.bind(styles);

const MoviesGallery = ({ movies }) => (
  <div className={cx("container")}>
    {movies.map((movie) => (
      <MovieCard key={uuid()} {...movie} />
    ))}
  </div>
);

MoviesGallery.defaultProps = {
  movies: [],
};

MoviesGallery.propTypes = {
  movies: PropTypes.object,
};
export default MoviesGallery;