import React from 'react';

import Featured movie from '../../components/organisms/Featured movie';

export default {
  component: Featured movie,
  title: 'organisms/Featured movie',
};

const Template = (args) => <Featured movie {...args} />;

export const Default = Template.bind({});
Default.args = Featured movie.defaultProps;
