import React from 'react';

import MovieCard from '../../components/molecules/MovieCard';

export default {
  component: MovieCard,
  title: 'molecules/MovieCard',
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = MovieCard.defaultProps;
