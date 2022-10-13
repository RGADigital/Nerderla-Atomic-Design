import React from 'react';

import MoviesGallery from '../../components/organisms/MoviesGallery';

export default {
  component: MoviesGallery,
  title: 'organisms/MoviesGallery',
};

const Template = (args) => <MoviesGallery {...args} />;

export const Default = Template.bind({});
Default.args = MoviesGallery.defaultProps;
