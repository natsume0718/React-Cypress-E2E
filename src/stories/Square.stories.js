import React from 'react';

import Square from '../components/squre';
import '../index.css';


export default {
  title: 'Square',
  component: Square,
};

const Template = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};

export const Round = Template.bind({});
Round.args = {
  value: '◯',
};

export const Cross = Template.bind({});
Cross.args = {
  value: 'X',
};

export const Triangle = Template.bind({});
Triangle.args = {
  value: '△',
};
