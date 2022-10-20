import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './MoviesGallery.module.scss';
import uuid from 'uuid/v4';
import { MovieCard, MovieCardBig } from '../../molecules';

const cx = classNames.bind(styles);
const TYPE = ['small', 'big'];

const MoviesGallery = ({ movies, type }) => (
    <div className={cx('container', type)}>
        {movies.map((movie) =>
            type === 'small' ? (
                <MovieCard
                    key={uuid()}
                    {...movie.fields}
                    tag={movie.metadata.tags}
                />
            ) : (
                <MovieCardBig
                    key={uuid()}
                    {...movie.fields}
                    tag={movie.metadata.tags}
                />
            )
        )}
    </div>
);

MoviesGallery.defaultProps = {
    movies: [],
    type: 'small',
};

MoviesGallery.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.oneOf(TYPE),
};
export default MoviesGallery;
