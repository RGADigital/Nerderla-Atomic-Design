import React from 'react';

import FeaturedMovie from '../../components/molecules/FeaturedMovie';

export default {
  component: FeaturedMovie,
  title: 'molecules/FeaturedMovie',
};

const Template = (args) => <FeaturedMovie {...args} />;

export const Default = Template.bind({});
Default.args = FeaturedMovie.defaultProps;
