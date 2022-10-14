import React from 'react';

import Nav from '../../components/molecules/Nav';

export default {
  component: Nav,
  title: 'molecules/Nav',
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = Nav.defaultProps;
