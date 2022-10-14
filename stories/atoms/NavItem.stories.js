import React from 'react';

import NavItem from '../../components/atoms/NavItem';

export default {
  component: NavItem,
  title: 'atoms/NavItem',
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = NavItem.defaultProps;
